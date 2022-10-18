namespace Piano.BusinessLogic.Models.Cards;

public class Session
{

    public DateTime SessionDate { get; set; }
    public int State { get; set; }
    public TimeSpan Duration { get; set; }
    public Guid MentorId { get; set; }

    public Entities.Subscriptions.Session ToEntitiesSession()
    {
        return new()
        { ClassDate = SessionDate,
          Duration = Duration,
          MentorId = MentorId,
          State = (Entities.Subscriptions.Session.SessionState) State, };
    }
}