using Microsoft.AspNetCore.Mvc;
using Vehicle_Configurator.Repository;
using Vehicle_Configurator.DbRepos;
using System.ComponentModel;
namespace Vehicle_Configurator.Controllers
{

    [Route("api/")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly IUserRepository _repository;

        public UserController(IUserRepository repository)
        {
            _repository = repository;
        }

        [HttpPost("signup")]
        public async Task<ActionResult<User>> PostUSer(User user)
        {
            await _repository.Add(user);
            return CreatedAtAction("PostUser", new { id = user.Id }, user);

        }


        [HttpPost("login")]
        public  bool Login(User user)
        {

            if(_repository.Login(user)==null) {
                return false;
            }
           bool ans= _repository.Login(user);
            return ans;
        }

    }
}
