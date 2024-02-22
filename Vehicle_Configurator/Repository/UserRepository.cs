using Microsoft.AspNetCore.Mvc;
using Vehicle_Configurator.DbRepos;

namespace Vehicle_Configurator.Repository
{
    public class UserRepository : IUserRepository
    { 
        private readonly ScottDbContext context;

        public UserRepository(ScottDbContext context)
        {
            this.context = context;
        }
        public async Task<ActionResult<User>> Add(User user)
        {
            context.Users.Add(user);
            await context.SaveChangesAsync();
            return user;
        }


        public bool Login(User user)
        {
            String Username = user.Username;
            String Password = user.Password;
            return (context.Users.Any(u=>u.Username == Username && u.Password == Password));
        }
    }
}
