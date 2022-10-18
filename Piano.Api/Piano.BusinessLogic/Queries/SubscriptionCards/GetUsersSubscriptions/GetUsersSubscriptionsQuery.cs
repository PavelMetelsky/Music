using MediatR;
using Piano.BusinessLogic.Models.Cards;

namespace Piano.BusinessLogic.Queries.SubscriptionCards;

public class GetUsersSubscriptionsQuery : IRequest<List<SubscriptionCard>>
{
    public string UserId { get; set; }
}