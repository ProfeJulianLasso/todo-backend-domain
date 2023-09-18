/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserNameValueObject } from '../../src/value-objects';

describe('UserNameValueObject', () => {
  describe('when the scenario has correct data', () => {
    it('should create a valid UserNameValueObject with a valid name', () => {
      // Arrange
      const validName = 'This is a valid name';
      const expected = true;

      // Act
      const name = new UserNameValueObject(validName);
      const resultIsValid = name.isValid();

      // Assert
      expect(resultIsValid).toBe(expected);
    });
  });

  describe('when the scenario has incorrect data', () => {
    it('should create an invalid UserNameValueObject with a undefined name', () => {
      // Arrange
      const invalidName = undefined;
      const expected = false;
      const fieldName = 'name';
      const expectedMessage = `${fieldName} is required`;

      // Act
      const name = new UserNameValueObject(invalidName as any);
      const resultIsValid = name.isValid();
      const resultError = name.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });

    it('should create an invalid UserNameValueObject with an empty string', () => {
      // Arrange
      const invalidName = '';
      const expected = false;
      const fieldName = 'name';
      const expectedMessage = `${fieldName} has min length of 4`;

      // Act
      const name = new UserNameValueObject(invalidName);
      const resultIsValid = name.isValid();
      const resultError = name.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });

    it('should create an invalid UserNameValueObject with a string shorter than minLength', () => {
      // Arrange
      const invalidName = 'A';
      const expected = false;
      const fieldName = 'name';
      const expectedMessage = `${fieldName} has min length of 4`;

      // Act
      const name = new UserNameValueObject(invalidName);
      const resultIsValid = name.isValid();
      const resultError = name.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });

    it('should create an invalid UserNameValueObject with a string longer than maxLength', () => {
      // Arrange
      let invalidName = 'This name is longer than the allowed maximum length';
      const lorem = 'Lorem ipsum dolor sit amet';
      for (let i = 0; i < 20; i++) {
        invalidName += lorem;
      }

      const expected = false;
      const fieldName = 'name';
      const expectedMessage = `${fieldName} has max length of 500`;

      // Act
      const name = new UserNameValueObject(invalidName);
      const resultIsValid = name.isValid();
      const resultError = name.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });

    it('should create an invalid UserNameValueObject with a name that is not a string', () => {
      // Arrange
      const invalidName = 123;
      const expected = false;
      const fieldName = 'name';
      const expectedMessage = `${fieldName} must be a string`;

      // Act
      const name = new UserNameValueObject(invalidName as any);
      const resultIsValid = name.isValid();
      const resultError = name.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });

    it('should create an invalid UserNameValueObject with a name that does not match the regex', () => {
      // Arrange
      const invalidName = 'This name is invalid because it has numbers 123';
      const expected = false;
      const fieldName = 'name';
      const expectedMessage = `${fieldName} must match regex /^[a-zA-Z\\s]+$/`;

      // Act
      const name = new UserNameValueObject(invalidName);
      const resultIsValid = name.isValid();
      const resultError = name.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });
  });
});
