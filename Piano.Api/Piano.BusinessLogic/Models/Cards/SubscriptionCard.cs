namespace Piano.BusinessLogic.Models.Cards;

public class SubscriptionCard
{
    public Guid Id { get; set; }
    public List<Session> Sessions { get; set; } = new();
    public DateTime BuyingDate { get; set; }
    public DateTime ActiveMonth { get; set; }
    public Guid OwnerId { get; set; }
    public int ClassesCount => Sessions.Count;

    public Entities.Subscriptions.SubscriptionCard ToEntitySubscriptionCard()
    {
        return new()
        { Id = Id,
          ActiveMonth = ActiveMonth,
          BuyingDate = BuyingDate,
          OwnerId = OwnerId,
          Sessions = Sessions.Select(s => s.ToEntitiesSession()).ToList() };
    }
}