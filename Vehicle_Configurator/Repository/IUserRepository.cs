using Microsoft.AspNetCore.Mvc;
using Vehicle_Configurator.DbRepos;
namespace Vehicle_Configurator.Repository
{
    public interface IUserRepository
    {
        Task<ActionResult<User>> Add(User user);
        bool Login(User user);

    }
}
