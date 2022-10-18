using MediatR;
using Microsoft.EntityFrameworkCore;
using Piano.BusinessLogic.Models;
using Piano.Database;

namespace Piano.BusinessLogic.Queries.Users.GetUserDetails
{
    public class GetUserDetailsHandler : IRequestHandler<GetUserDetailsQuery, UserModel>
    {
        private readonly PianoContext _pianoContext;

        public GetUserDetailsHandler(PianoContext pianoContext)
        {
            _pianoContext = pianoContext;
        }

        public async Task<UserModel> Handle(GetUserDetailsQuery request, CancellationToken cancellationToken)
        {
            var user = await _pianoContext.Users.FirstOrDefaultAsync(u => u.UserId.ToString() == request.UserId);

            return new UserModel
            {
                Username = user.Username,
                Email = user.Email,
                UserId = user.UserId,
                Role = user.Role,
                City = user.City,
                Country = user.Country,
                Telephone = user.Telephone,
            };
        }
    }
}
