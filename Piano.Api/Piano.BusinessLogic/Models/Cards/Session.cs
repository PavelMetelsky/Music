﻿namespace Piano.BusinessLogic.Models.Cards;

public class Session
{

    public DateTime SessionDate { get; set; }
    public int State { get; set; }
    public TimeSpan Duration { get; set; }
    public Guid MentorId { get; set; }

}