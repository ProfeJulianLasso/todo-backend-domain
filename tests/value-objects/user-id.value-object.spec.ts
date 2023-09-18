/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserIdValueObject } from '../../src/value-objects';

describe('UserIdValueObject', () => {
  describe('when the scenario has correct data', () => {
    it('should create a valid UserIdValueObject with a valid UUID string value', () => {
      // Arrange
      const validUuid = '550e8400-e29b-41d4-a716-887744331234';
      const expected = true;

      // Act
      const todoId = new UserIdValueObject(validUuid);
      const resultIsValid = todoId.isValid();

      // Assert
      expect(resultIsValid).toBe(expected);
    });
  });

  describe('when the scenario has incorrect data', () => {
    it('should create an invalid UserIdValueObject with an invalid string value', () => {
      // Arrange
      const invalidUuid = 'not_a_uuid';
      const expected = false;
      const fieldName = 'userId';
      const expectedMessage = `${fieldName} must be a valid uuid`;

      // Act
      const todoId = new UserIdValueObject(invalidUuid);
      const resultIsValid = todoId.isValid();
      const resultError = todoId.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });

    it('should create an invalid UserIdValueObject with a missing string value', () => {
      // Arrange
      const invalidUuid = undefined;
      const expected = false;
      const fieldName = 'userId';
      const expectedMessage = `${fieldName} is required`;

      // Act
      const todoId = new UserIdValueObject(invalidUuid as any);
      const resultIsValid = todoId.isValid();
      const resultError = todoId.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });

    it('should create an invalid UserIdValueObject with a value that is not a string', () => {
      // Arrange
      const invalidUuid = 123;
      const expected = false;
      const fieldName = 'userId';
      const expectedMessage = `${fieldName} must be a string`;

      // Act
      const todoId = new UserIdValueObject(invalidUuid as any);
      const resultIsValid = todoId.isValid();
      const resultError = todoId.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });
  });
});
