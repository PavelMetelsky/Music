using MediatR;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Piano.BusinessLogic.Commands.Users.CreateUser;
using Piano.BusinessLogic.Models;
using Piano.BusinessLogic.Queries.Users.GetUserDetails;
using Piano.BusinessLogic.Queries.Users.GetUsers;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Piano.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IMediator _mediator;

        public UsersController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<List<User>> GetUsers()
        {
            return await _mediator.Send(new GetUsersQuery());
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> GetUserDetails(string userId)
        {
            return Ok(await _mediator.Send(new GetUserDetailsQuery { UserId = userId }));
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] CreateUserCommand command)
        {
            await _mediator.Send(command);

            return Ok();
        }


        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginCommand command)
        {
            return Ok(await _mediator.Send(command));
        }

        // PUT api/<UsersController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UsersController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
