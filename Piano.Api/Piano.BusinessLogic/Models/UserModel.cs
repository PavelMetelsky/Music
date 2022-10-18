namespace Piano.BusinessLogic.Models
{
    public class UserModel
    {
        public Guid UserId { get; set; }
        public int Role {  get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string Telephone { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        //public List<string> SocialLinks { get; set; }
    }
}
