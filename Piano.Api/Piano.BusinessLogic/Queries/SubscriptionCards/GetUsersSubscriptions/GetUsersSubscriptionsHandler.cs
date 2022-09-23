﻿using System.Data.Entity;
using MediatR;
using Piano.BusinessLogic.Models.Cards;
using Piano.Database;

namespace Piano.BusinessLogic.Queries.SubscriptionCards;

public class GetUsersSubscriptionsHandler : IRequestHandler<GetUsersSubscriptionsQuery, List<SubscriptionCard>>
{
    private readonly PianoContext _pianoContext;

    public GetUsersSubscriptionsHandler(PianoContext pianoContext)
    {
        _pianoContext = pianoContext;
    }

    public async Task<List<SubscriptionCard>> Handle(GetUsersSubscriptionsQuery request,
        CancellationToken cancellationToken)
    {
        return await _pianoContext.SubscriptionCards.Where(
                e => e.Owner.UserId == Guid.Parse(request.UserId))
            .Select(s => new SubscriptionCard
            { Classes = s.Classes.Select(c => new Class
              { ClassDate = c.ClassDate,
                Duration = c.Duration,
                MentorId = c.Mentor.UserId,
                State = (int) c.State }).ToList(),
              BuyingDate = s.BuyingDate,
              ActiveMonth = s.ActiveMonth }).ToListAsync(cancellationToken);
    }
}