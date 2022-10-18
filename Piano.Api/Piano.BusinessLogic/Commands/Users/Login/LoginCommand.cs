using MediatR;

namespace Piano.BusinessLogic.Commands.Users.CreateUser
{
    public class LoginCommand : IRequest<Result>
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

    public class Result
    {
        public Guid? Flag { get; set; }
    }
}
