import {
  DomainException,
  LoginCommand,
  LoginValidator,
  UserEmailValueObject,
  UserPasswordValueObject,
} from '../../src';

describe('LoginValidator', () => {
  describe('when the scenario has a valid data', () => {
    it('should to be valid', () => {
      // Arrange
      const data = {
        email: new UserEmailValueObject('test@domain.com'),
        password: new UserPasswordValueObject('Password123!'),
      } as LoginCommand;
      const expected = true;

      // Act
      const validator = new LoginValidator(data);
      validator.validate();
      const result = validator.isValid();

      // Assert
      expect(result).toBe(expected);
    });
  });

  describe('when the scenario has an invalid data', () => {
    it('should to be invalid with invalid email', () => {
      // Arrange
      const data = {
        email: new UserEmailValueObject('invalid-email'),
        password: new UserPasswordValueObject('Password123!'),
      } as LoginCommand;

      // Act
      const validator = new LoginValidator(data);
      const exception = () => validator.validate();

      // Assert
      expect(exception).toThrow(DomainException);
      expect(exception).toThrow('Invalid data');
    });
  });
});
