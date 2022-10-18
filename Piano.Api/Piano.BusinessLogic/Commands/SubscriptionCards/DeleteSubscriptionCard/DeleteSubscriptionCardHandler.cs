using MediatR;
using Piano.Database;
using Piano.Entities.Subscriptions;

namespace Piano.BusinessLogic.Commands.SubscriptionCards.DeleteSubscriptionCard;

public class DeleteSubscriptionCardHandler : IRequestHandler<DeleteSubscriptionCardCommand, Unit>
{
    private readonly PianoContext _pianoContext;

    public DeleteSubscriptionCardHandler(PianoContext pianoContext)
    {
        _pianoContext = pianoContext;
    }

    public async Task<Unit> Handle(DeleteSubscriptionCardCommand request, CancellationToken cancellationToken)
    {
        var entity = await _pianoContext.FindAsync<SubscriptionCard>(request.Id);
        if (entity is not null)
            _pianoContext.SubscriptionCards.Remove(entity);

        return default;
    }
}