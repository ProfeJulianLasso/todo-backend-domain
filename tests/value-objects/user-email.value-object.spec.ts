/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserEmailValueObject } from '../../src/value-objects';

describe('UserEmailValueObject', () => {
  describe('when the scenario has correct data', () => {
    it('should create a valid UserEmailValueObject with a valid email address', () => {
      // Arrange
      const validEmail = 'test@example.com';
      const expected = true;

      // Act
      const email = new UserEmailValueObject(validEmail);
      const resultIsValid = email.isValid();

      // Assert
      expect(resultIsValid).toBe(expected);
    });
  });

  describe('when the scenario has incorrect data', () => {
    it('should create an invalid UserEmailValueObject with an undefined email address', () => {
      // Arrange
      const invalidEmail = undefined;
      const expected = false;
      const fieldName = 'email';
      const expectedMessage = `${fieldName} is required`;

      // Act
      const email = new UserEmailValueObject(invalidEmail as any);
      const resultIsValid = email.isValid();
      const resultError = email.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });

    it('should create an invalid UserEmailValueObject with a null email address', () => {
      // Arrange
      const invalidEmail = null;
      const expected = false;
      const fieldName = 'email';
      const expectedMessage = `${fieldName} must be a string`;

      // Act
      const email = new UserEmailValueObject(invalidEmail as any);
      const resultIsValid = email.isValid();
      const resultError = email.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });

    it('should create an invalid UserEmailValueObject with an empty email address', () => {
      // Arrange
      const invalidEmail = '';
      const expected = false;
      const fieldName = 'email';
      const expectedMessage = `${fieldName} must be a valid email`;

      // Act
      const email = new UserEmailValueObject(invalidEmail as any);
      const resultIsValid = email.isValid();
      const resultError = email.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });

    it('should create an invalid UserEmailValueObject with a string that is not an email', () => {
      // Arrange
      const invalidEmail = 'not_an_email';
      const expected = false;
      const fieldName = 'email';
      const expectedMessage = `${fieldName} must be a valid email`;

      // Act
      const email = new UserEmailValueObject(invalidEmail);
      const resultIsValid = email.isValid();
      const resultError = email.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });

    it('should create an invalid UserEmailValueObject with an invalid email', () => {
      // Arrange
      const invalidEmail = 'test@';
      const expected = false;
      const fieldName = 'email';
      const expectedMessage = `${fieldName} must be a valid email`;

      // Act
      const email = new UserEmailValueObject(invalidEmail);
      const resultIsValid = email.isValid();
      const resultError = email.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });

    it('should create an invalid UserEmailValueObject with an email longer than the allowed maximum length', () => {
      // Arrange
      const invalidEmail = 'toolongemail@example.com'.repeat(25); // This will create a string longer than 500 characters
      const expected = false;
      const fieldName = 'email';
      const expectedMessage = `${fieldName} has max length of 500`;

      // Act
      const email = new UserEmailValueObject(invalidEmail);
      const resultIsValid = email.isValid();
      const resultError = email.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });
  });
});
