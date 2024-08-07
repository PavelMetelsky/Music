﻿using MediatR;
using Microsoft.EntityFrameworkCore;
using Piano.BusinessLogic.Models;
using Piano.Database;
using System.Threading.Tasks;

namespace Piano.BusinessLogic.Queries.Users.GetUsers
{
    public class GetUsersHandler : IRequestHandler<GetUsersQuery, List<User>>
    {
        private readonly PianoContext _pianoContext;

        public GetUsersHandler(PianoContext pianoContext)
        {
            _pianoContext = pianoContext;
        }

        public Task<List<User>> Handle(GetUsersQuery request, CancellationToken cancellationToken)
        {
            return _pianoContext.Users
                .Select(u => new User
                {
                    Username = u.Login,
                    Email = u.Email,
                    Password = u.Password,
                    UserId = u.Id,
                    City = u.City,
                    Country = u.Country,
                    Telephone = u.PhoneNumber,
                    SocialLinks = u.SocialLinks.Select(u => u.Link).ToList()
                })
                .ToListAsync(cancellationToken: cancellationToken);
        }
    }
}
