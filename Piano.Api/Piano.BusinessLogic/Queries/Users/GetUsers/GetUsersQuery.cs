using MediatR;
using Piano.BusinessLogic.Models;

namespace Piano.BusinessLogic.Queries.Users.GetUsers
{
    public class GetUsersQuery: IRequest<List<User>>
    {
    }
}
