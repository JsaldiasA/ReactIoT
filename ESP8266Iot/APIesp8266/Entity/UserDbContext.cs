using APIesp8266.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace APIesp8266.Entity
{
    public class UserDbContext : DbContext
    {
        /*     public UserDbContext(DbContextOptions<UserDbContext> options) : base(options)
            {
                options.UseSqlServer();
            }
        */
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=.;Database=Esp8266DB;Integrated Security=SSPI;Trusted_Connection=True;TrustServerCertificate=True;");
        }
        public DbSet<User> Users { get; set; }// name of the data base table aim to a user class that have same columns
        //name with schema did not work. just dbo.Users.
    
    }
}
