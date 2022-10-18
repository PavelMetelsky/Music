using MediatR;
using Piano.Database;
using Piano.Entities.Subscriptions;

namespace Piano.BusinessLogic.Commands.SubscriptionCards.CreateSubscriptionCard;

public class CreateSubscriptionCardHandler : IRequestHandler<CreateSubscriptionCardCommand, Unit>
{
    private readonly PianoContext _pianoContext;

    public CreateSubscriptionCardHandler(PianoContext pianoContext)
    {
        _pianoContext = pianoContext;
    }

    public async Task<Unit> Handle(CreateSubscriptionCardCommand request, CancellationToken cancellationToken)
    {
        await _pianoContext.SubscriptionCards.AddAsync(new SubscriptionCard
        { ActiveMonth = request.ActiveMonth,
          BuyingDate = request.BuyingDate,
          Sessions = request.Classes.Select(s => s.ToEntitiesSession()).ToList(),
          OwnerId = Guid.Parse(request.OwnerId),
          Id = Guid.NewGuid(),
        }, cancellationToken);
        return default;
    }
}