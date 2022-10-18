namespace Piano.BusinessLogic.Models
{
    public class User
    {
        public int Role {  get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string Telephone { get; set; }
        public Guid UserId { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public List<string> SocialLinks { get; set; }
    }
}
