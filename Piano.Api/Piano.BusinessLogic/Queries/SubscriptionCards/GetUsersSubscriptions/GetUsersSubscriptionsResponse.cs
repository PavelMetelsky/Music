using Piano.BusinessLogic.Models.Cards;

namespace Piano.BusinessLogic.Queries.SubscriptionCards;

public class GetUsersSubscriptionsResponse
{
    public List<SubscriptionCard> SubscriptionCardsList { get; set; }
}