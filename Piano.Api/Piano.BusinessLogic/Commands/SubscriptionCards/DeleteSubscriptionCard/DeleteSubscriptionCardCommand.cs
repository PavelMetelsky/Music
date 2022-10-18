using MediatR;

namespace Piano.BusinessLogic.Commands.SubscriptionCards.DeleteSubscriptionCard;

public class DeleteSubscriptionCardCommand : IRequest<Unit>
{
    public Guid Id { get; set; }
}