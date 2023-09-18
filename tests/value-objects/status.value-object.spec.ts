/* eslint-disable @typescript-eslint/no-explicit-any */
import { StatusValueObject } from '../../src/value-objects';

describe('StatusValueObject', () => {
  describe('when the scenario has correct data', () => {
    it('should create a valid StatusValueObject with true value', () => {
      // Arrange
      const data = true;
      const expected = true;

      // Act
      const status = new StatusValueObject(data);
      const result = status.isValid();

      // Assert
      expect(result).toBe(expected);
    });

    it('should create a valid StatusValueObject with false value', () => {
      // Arrange
      const data = false;
      const expected = true;

      // Act
      const status = new StatusValueObject(data);
      const result = status.isValid();

      // Assert
      expect(result).toBe(expected);
    });

    it('should be true when comparing two value objects', () => {
      // Arrange
      const status1 = new StatusValueObject(true);
      const status2 = new StatusValueObject(true);
      const expected = true;

      // Act
      const result = status1.equal(status2);

      // Assert
      expect(result).toBe(expected);
    });
  });

  describe('when the scenario has incorrect data', () => {
    it('should create an invalid StatusValueObject with an invalid boolean value', () => {
      // Arrange
      const data = 'invalidBoolean';
      const expected = false;
      const fieldName = 'status';
      const expectedMessage = `${fieldName} must be a boolean`;

      // Act
      const status = new StatusValueObject(data as any);
      const resultIsValid = status.isValid();
      const resultError = status.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });

    it('should create an invalid StatusValueObject with a missing boolean value', () => {
      // Arrange
      const data = undefined;
      const expected = false;
      const fieldName = 'status';
      const expectedMessage = `${fieldName} is required`;

      // Act
      const status = new StatusValueObject(data as any);
      const resultIsValid = status.isValid();
      const resultError = status.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });

    it('should create an invalid StatusValueObject with an object instead of a boolean', () => {
      // Arrange
      const data = { prop: 'value' };
      const expected = false;
      const fieldName = 'status';
      const expectedMessage = `${fieldName} must be a boolean`;

      // Act
      const status = new StatusValueObject(data as any);
      const resultIsValid = status.isValid();
      const resultError = status.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });
  });
});
