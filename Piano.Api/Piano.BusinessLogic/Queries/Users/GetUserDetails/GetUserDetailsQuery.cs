using MediatR;
using Piano.BusinessLogic.Models;

namespace Piano.BusinessLogic.Queries.Users.GetUserDetails
{
    public class GetUserDetailsQuery : IRequest<UserModel>
    {
        public string UserId { get; set; }
    }
}
