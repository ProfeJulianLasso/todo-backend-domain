/* eslint-disable @typescript-eslint/no-explicit-any */
import { CompletedValueObject } from '../../src/value-objects';

describe('CompletedValueObject', () => {
  describe('when the scenario has correct data', () => {
    it('should create a valid CompletedValueObject with true value', () => {
      // Arrange
      const data = true;
      const expected = true;

      // Act
      const completed = new CompletedValueObject(data);
      const result = completed.isValid();

      // Assert
      expect(result).toBe(expected);
    });

    it('should create a valid CompletedValueObject with false value', () => {
      // Arrange
      const data = false;
      const expected = true;

      // Act
      const completed = new CompletedValueObject(data);
      const result = completed.isValid();

      // Assert
      expect(result).toBe(expected);
    });

    it('should be true when comparing two value objects', () => {
      // Arrange
      const completed1 = new CompletedValueObject(true);
      const completed2 = new CompletedValueObject(true);
      const expected = true;

      // Act
      const result = completed1.equal(completed2);

      // Assert
      expect(result).toBe(expected);
    });
  });

  describe('when the scenario has incorrect data', () => {
    it('should create an invalid CompletedValueObject with an invalid boolean value', () => {
      // Arrange
      const data = 'invalidBoolean';
      const expected = false;
      const fieldName = 'completed';
      const expectedMessage = `${fieldName} must be a boolean`;

      // Act
      const completed = new CompletedValueObject(data as any);
      const resultIsValid = completed.isValid();
      const resultError = completed.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });

    it('should create an invalid CompletedValueObject with a missing boolean value', () => {
      // Arrange
      const data = undefined;
      const expected = false;
      const fieldName = 'completed';
      const expectedMessage = `${fieldName} is required`;

      // Act
      const completed = new CompletedValueObject(data as any);
      const resultIsValid = completed.isValid();
      const resultError = completed.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });

    it('should create an invalid CompletedValueObject with an object instead of a boolean', () => {
      // Arrange
      const data = { prop: 'value' };
      const expected = false;
      const fieldName = 'completed';
      const expectedMessage = `${fieldName} must be a boolean`;

      // Act
      const completed = new CompletedValueObject(data as any);
      const resultIsValid = completed.isValid();
      const resultError = completed.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });

    it('should be false when comparing two different value objects', () => {
      // Arrange
      const completed1 = new CompletedValueObject(true);
      const completed2 = undefined;
      const expected = false;

      // Act
      const result = completed1.equal(completed2 as any);

      // Assert
      expect(result).toBe(expected);
    });
  });
});
