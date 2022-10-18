using MediatR;
using Microsoft.EntityFrameworkCore;
using Piano.Database;

namespace Piano.BusinessLogic.Commands.Users.CreateUser
{
    public class LoginHandler : IRequestHandler<LoginCommand, Result>
    {
        private readonly PianoContext _pianoContext;

        public LoginHandler(PianoContext pianoContext)
        {
            _pianoContext = pianoContext;
        }

        public async Task<Result> Handle(LoginCommand request, CancellationToken cancellationToken)
        {
            var user = await _pianoContext.Users.FirstOrDefaultAsync(
                u => u.Email == request.Email && u.Password == request.Password);

            return new Result
            {
                Flag = user?.UserId
            };
        }
    }
}
