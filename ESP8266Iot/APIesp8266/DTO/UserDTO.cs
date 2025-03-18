using APIesp8266.Model;

namespace APIesp8266.DTO
{
    public class UserDTO (User user)
    {


        public int Id { get; set; } = user.Id;
        public string UserName { get; set; } = user.UserName;


    }
}
