import {
  NewUserCommand,
  NewUserValidator,
  UserEmailValueObject,
  UserIdValueObject,
  UserNameValueObject,
  UserPasswordValueObject,
} from '../../src';

describe('NewUserValidator', () => {
  let email: string;
  let invalidEmail: string;
  let name: string;
  let invalidName: string;
  let validUserId: string;
  let invalidUserId: string;
  let password: string;
  let invalidPassword: string;
  let expectedThrowMessage: string;

  beforeAll(() => {
    email = 'test@domain.co';
    invalidEmail = 'invalid-email';
    name = 'test';
    invalidName = 't';
    validUserId = '550e8400-e29b-41d4-a716-887744331234';
    invalidUserId = 'invalid-user-id';
    password = 'Password123!';
    invalidPassword = 'InvalidPassword123';
    expectedThrowMessage = 'Invalid data';
  });

  describe('when the scenario has a valid data', () => {
    it('should to be valid', () => {
      // Arrange
      const data = {
        name: new UserNameValueObject(name),
        email: new UserEmailValueObject(email),
        password: new UserPasswordValueObject(password),
      } as NewUserCommand;
      const expected = true;

      // Act
      const validator = new NewUserValidator(data);
      validator.validate();
      const result = validator.isValid();

      // Assert
      expect(result).toBe(expected);
    });

    it('should to be valid with a valid userId', () => {
      // Arrange
      const data = {
        userId: new UserIdValueObject(validUserId),
        name: new UserNameValueObject(name),
        email: new UserEmailValueObject(email),
        password: new UserPasswordValueObject(password),
      } as NewUserCommand;
      const expected = true;

      // Act
      const validator = new NewUserValidator(data);
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
        name: new UserNameValueObject(name),
        email: new UserEmailValueObject(invalidEmail),
        password: new UserPasswordValueObject(password),
      } as NewUserCommand;

      // Act
      const validator = new NewUserValidator(data);
      const exception = () => validator.validate();

      // Assert
      expect(exception).toThrow('Invalid data');
    });

    it('should to be invalid with invalid userId', () => {
      // Arrange
      const data = {
        userId: new UserIdValueObject(invalidUserId),
        name: new UserNameValueObject(name),
        email: new UserEmailValueObject(email),
        password: new UserPasswordValueObject(password),
      } as NewUserCommand;

      // Act
      const validator = new NewUserValidator(data);
      const exception = () => validator.validate();

      // Assert
      expect(exception).toThrow(expectedThrowMessage);
    });

    it('should to be invalid with invalid password', () => {
      // Arrange
      const data = {
        name: new UserNameValueObject(name),
        email: new UserEmailValueObject(email),
        password: new UserPasswordValueObject(invalidPassword),
      } as NewUserCommand;

      // Act
      const validator = new NewUserValidator(data);
      const exception = () => validator.validate();

      // Assert
      expect(exception).toThrow(expectedThrowMessage);
    });

    it('should to be invalid with invalid name', () => {
      // Arrange
      const data = {
        name: new UserNameValueObject(invalidName),
        email: new UserEmailValueObject(email),
        password: new UserPasswordValueObject(password),
      } as NewUserCommand;

      // Act
      const validator = new NewUserValidator(data);
      const exception = () => validator.validate();

      // Assert
      expect(exception).toThrow(expectedThrowMessage);
    });
  });
});
