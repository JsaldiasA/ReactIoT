using APIesp8266.Entity;
using APIesp8266.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using APIesp8266.Entity;
using Microsoft.EntityFrameworkCore.Internal;

namespace APIesp8266.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController(IConfiguration _config) : Controller
    {
   
        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody] LoginBody body)
        {
    
            var context = new UserDbContext();// create context to extract the data from DB
            var Users = context.Users.ToList();
            bool found = Users.Any(x => x.UserName.Equals(body.UserName) && x.Password.Equals(body.Password));

            if (!found)
            {
                return Unauthorized("Incorrect credentials");
            }
            return Json(new { token = GenerateToken(body.UserName) });
        }
        private string GenerateToken(string user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));//see appsetting.json for _config["Jwt
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            JwtSecurityToken token = new(
                _config["Jwt:Issuer"],
                _config["Jwt:Audience"],
                [new Claim(ClaimTypes.NameIdentifier, user)],
                expires: DateTime.Now.AddMinutes(15),
                signingCredentials: credentials
            );
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
