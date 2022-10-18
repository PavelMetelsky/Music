using System;
using System.Threading;
using System.Threading.Tasks;
using Bogus;
using Piano.BusinessLogic.Commands.Users.CreateUser;
using Piano.Entities;
using Xunit;

namespace Piano.BusinessLogic.IntegrationTests;

public class CreateUserTests : IClassFixture<InMemorySeedDataFixture>
{
    private readonly Faker<CreateUserCommandNew> _commandFaker = new();
    private readonly InMemorySeedDataFixture _fixture;

    public CreateUserTests(InMemorySeedDataFixture fixture)
    {
        _fixture = fixture;
        ConfigureFaker();
    }

    private void ConfigureFaker()
    {
        _commandFaker
            .RuleFor(u => u.Role, _ => 1)
            .RuleFor(u => u.Country, f => f.Address.Country())
            .RuleFor(u => u.City, f => f.Person.Address.City)
            .RuleFor(u => u.Telephone, f => f.Person.Phone)
            .RuleFor(u => u.Email, f => f.Person.Email)
            .RuleFor(u => u.Username, f => f.Person.UserName)
            .RuleFor(u => u.Password, f => f.Internet.Password());
    }

    [Fact]
    public async void CreateUserCommand_CreatesUser()
    {
        var createUserCommand = GenerateCreateUserCommand();
        var (user, userId) = await SendCreateUserCommand(createUserCommand);
        Assert.True(UserMatchesRequest(user, createUserCommand, userId));
    }

    private async Task<(User, Guid)> SendCreateUserCommand(CreateUserCommandNew createUserCommand)
    {
        var handler = new CreateUserHandlerNew(_fixture._pianoContext);
        var result = await handler.Handle(createUserCommand, CancellationToken.None);
        var user = await _fixture.GetUser(createUserCommand.Username, createUserCommand.Password);
        Assert.NotNull(result.Flag);
        Assert.NotNull(user);
        return (user!, result.Flag!.Value);
    }

    private CreateUserCommandNew GenerateCreateUserCommand()
    {
        return _commandFaker.Generate();
    }

    private bool UserMatchesRequest(User user, CreateUserCommandNew command, Guid userId)
    {
        return user.UserId == userId &&
               user.Username == command.Username &&
               user.Password == command.Password &&
               user.Email == command.Email &&
               user.Role == command.Role &&
               user.Country == command.Country &&
               user.City == command.City &&
               user.Telephone == command.Telephone;
    }
}