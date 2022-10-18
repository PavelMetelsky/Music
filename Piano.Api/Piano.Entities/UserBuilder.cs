namespace Piano.Entities
{
    public class UserBuilder
    {
        private User _user;

        public UserBuilder()
        {
            _user = new User();
            _user.UserId = Guid.NewGuid();
        }

        public UserBuilder WithUsername(string username)
        {
            _user.Username = username;
            return this;
        }

        public UserBuilder HasRole(int role)
        {
            _user.Role = role;
            return this;
        }

        public UserBuilder From(string country, string city)
        {
            _user.Country = country;
            _user.City = city;
            return this;
        }

        public UserBuilder HasTelephoneNumber(string number)
        {
            _user.Telephone = number;
            return this;
        }

        public UserBuilder HasEmail(string email)
        {
            _user.Email = email;
            return this;
        }

        public UserBuilder HasPassword(string password)
        {
            _user.Password = password;
            return this;
        }

        public UserBuilder HasSocialLinks(List<string> socialLinks)
        {
            _user.SocialLinks = new List<SocialLink>();
            foreach (var link in socialLinks)
            {
                _user.SocialLinks.Add(new SocialLink
                {
                    Link = link,
                    UserId = _user.UserId
                });
            }
            return this;
        }

        public User GetUser()
        {
            return _user;
        }
    }
}
