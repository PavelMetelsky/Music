using MediatR;
using Piano.Entities;
using System.ComponentModel.DataAnnotations;

namespace Piano.BusinessLogic.Commands.Users.CreateUser
{
    public class CreateUserCommand : IRequest<Unit>
    {
        //[Required]
        public int Role { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string Telephone { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        //public List<SocialLink> SocialLinks { get; set; }
    }
}
