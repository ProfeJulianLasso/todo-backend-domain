/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserPasswordValueObject } from '../../src/value-objects';

describe('UserPasswordValueObject', () => {
  describe('when the scenario has correct data', () => {
    it('should create a valid UserPasswordValueObject with a valid password', () => {
      // Arrange
      const validPassword = 'Password123!';
      const expected = true;
      const expectedHash =
        'a109e36947ad56de1dca1cc49f0ef8ac9ad9a7b1aa0df41fb3c4cb73c1ff01ea';

      // Act
      const password = new UserPasswordValueObject(validPassword);
      const resultIsValid = password.isValid();

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(password.hashed).toBe(expectedHash);
    });
  });

  describe('when the scenario has incorrect data', () => {
    it('should create an invalid UserPasswordValueObject with an empty password', () => {
      // Arrange
      const invalidPassword = '';
      const expected = false;
      const fieldName = 'password';
      const expectedMessage = `${fieldName} has min length of 8`;

      // Act
      const password = new UserPasswordValueObject(invalidPassword);
      const resultIsValid = password.isValid();
      const resultError = password.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });

    it('should create an invalid UserPasswordValueObject with an undefined password', () => {
      // Arrange
      const invalidPassword = undefined;
      const expected = false;
      const fieldName = 'password';
      const expectedMessage = `${fieldName} is required`;

      // Act
      const password = new UserPasswordValueObject(invalidPassword as any);
      const resultIsValid = password.isValid();
      const resultError = password.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });

    it('should create an invalid UserPasswordValueObject with a password that does not meet the minimum length', () => {
      // Arrange
      const invalidPassword = 'Pass1!'; // Less than 8 characters
      const expected = false;
      const fieldName = 'password';
      const expectedMessage = `${fieldName} has min length of 8`;

      // Act
      const password = new UserPasswordValueObject(invalidPassword);
      const resultIsValid = password.isValid();
      const resultError = password.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });

    it('should create an invalid UserPasswordValueObject with a password that does not match the regex pattern', () => {
      // Arrange
      const invalidPassword = 'InvalidPassword123'; // Missing special character
      const expected = false;
      const fieldName = 'password';
      const expectedMessage = `${fieldName} must match regex /^(?=.*[a-zA-Z\\d])(?=.*[\\W_])`;

      // Act
      const password = new UserPasswordValueObject(invalidPassword);
      const resultIsValid = password.isValid();
      const resultError = password.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });
  });
});
