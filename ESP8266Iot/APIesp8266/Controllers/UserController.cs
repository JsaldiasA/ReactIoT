using APIesp8266.Entity;
using APIesp8266.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using APIesp8266.DTO;
using System.Linq;
namespace APIesp8266.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController(IConfiguration _config) : Controller
    {

        [AllowAnonymous]
        [HttpGet]
        public IActionResult GetUsers()
        {

            var context = new UserDbContext();// create context to extract the data from DB
            var UsersList = context.Users.ToList();
            List<UserDTO> UsersDTOList = new List<UserDTO>();

            UsersDTOList = UsersList.Select(u => new UserDTO(u)).ToList();

            return Json(UsersDTOList);
        }

    }
}

