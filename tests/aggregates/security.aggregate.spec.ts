import {
  SecurityAggregate,
  User,
  UserEmailValueObject,
  UserNameValueObject,
  UserPasswordValueObject,
} from '../../src';

jest.mock('../../src/entities/user.entity.ts');

describe('SecurityAggregate', () => {
  describe('createUser', () => {
    let name: UserNameValueObject;
    let email: UserEmailValueObject;
    let password: UserPasswordValueObject;
    let securityAggregate: SecurityAggregate;

    beforeAll(() => {
      name = new UserNameValueObject('John Doe');
      email = new UserEmailValueObject('jhon.doe@domain.co');
      password = new UserPasswordValueObject('Password123!');
      securityAggregate = new SecurityAggregate();
    });

    it('should create a new user', () => {
      // Arrange
      const data = { name, email, password };
      const expectedData = { name, email, password };
      jest.spyOn(User.prototype, 'create').mockImplementationOnce(() => {
        return new User({});
      });

      // Act
      securityAggregate.createUser(data);

      // Assert
      expect(User).toHaveBeenCalledWith(expectedData);
      expect(User.prototype.create).toHaveBeenCalled();
    });
  });
});
