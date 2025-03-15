namespace APIesp8266.Model
{
    public class LoginBody(string UserName, string Password)
    {
        public string UserName { get; set; } = UserName;
        public string Password { get; set; } = Password;
    }
}
