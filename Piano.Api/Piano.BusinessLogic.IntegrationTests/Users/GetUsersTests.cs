using Piano.BusinessLogic.Models;
using Piano.BusinessLogic.Queries.Users.GetUsers;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Xunit;

namespace Piano.BusinessLogic.IntegrationTests
{
    public class GetUsersTests : IClassFixture<InMemorySeedDataFixture>
    {
        private readonly InMemorySeedDataFixture _fixture;

        public GetUsersTests(InMemorySeedDataFixture fixture)
        {
            _fixture = fixture;
        }

        [Fact]
        public async Task GetUsers_ReturnUsers()
        {
            // Arrange
            _fixture.AddUser("test", "test", Guid.NewGuid(), "test");

            // Act
            var result = await GetUsers();

            // Assert
            Assert.NotEmpty(result);
        }

        private async Task<List<User>> GetUsers()
        {
            var request = new GetUsersQuery();
            var handler = new GetUsersHandler(_fixture._pianoContext);

            return await handler.Handle(request, CancellationToken.None);
        }
    }
}