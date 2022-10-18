using System.Collections.ObjectModel;

namespace Piano.Entities
{
    public class User
    {
        public Guid UserId { get; set; }
        public int Role { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string Telephone { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public List<SocialLink> SocialLinks { get; set; }
    }
}