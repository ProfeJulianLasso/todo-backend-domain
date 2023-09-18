/* eslint-disable @typescript-eslint/no-explicit-any */
import { ToDoTitleValueObject } from '../../src/value-objects';

describe('ToDoTitleValueObject', () => {
  describe('when the scenario has correct data', () => {
    it('should create a valid ToDoTitleValueObject with a valid title', () => {
      // Arrange
      const validTitle = 'This is a valid title';
      const expected = true;

      // Act
      const title = new ToDoTitleValueObject(validTitle);
      const resultIsValid = title.isValid();

      // Assert
      expect(resultIsValid).toBe(expected);
    });
  });

  describe('when the scenario has incorrect data', () => {
    it('should create an invalid ToDoTitleValueObject with a undefined title', () => {
      // Arrange
      const invalidTitle = undefined;
      const expected = false;
      const fieldName = 'title';
      const expectedMessage = `${fieldName} is required`;

      // Act
      const title = new ToDoTitleValueObject(invalidTitle as any);
      const resultIsValid = title.isValid();
      const resultError = title.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });

    it('should create an invalid ToDoTitleValueObject with an empty string', () => {
      // Arrange
      const invalidTitle = '';
      const expected = false;
      const fieldName = 'title';
      const expectedMessage = `${fieldName} has min length of 4`;

      // Act
      const title = new ToDoTitleValueObject(invalidTitle);
      const resultIsValid = title.isValid();
      const resultError = title.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });

    it('should create an invalid ToDoTitleValueObject with a string shorter than minLength', () => {
      // Arrange
      const invalidTitle = 'A';
      const expected = false;
      const fieldName = 'title';
      const expectedMessage = `${fieldName} has min length of 4`;

      // Act
      const title = new ToDoTitleValueObject(invalidTitle);
      const resultIsValid = title.isValid();
      const resultError = title.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });

    it('should create an invalid ToDoTitleValueObject with a string longer than maxLength', () => {
      // Arrange
      let invalidTitle =
        'This title is longer than the allowed maximum length.';
      const lorem =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at porta orci. Sed est nisi, blandit sit amet mauris in, euismod convallis lorem.';
      for (let i = 0; i < 2; i++) {
        invalidTitle += lorem;
      }

      const expected = false;
      const fieldName = 'title';
      const expectedMessage = `${fieldName} has max length of 100`;

      // Act
      const title = new ToDoTitleValueObject(invalidTitle);
      const resultIsValid = title.isValid();
      const resultError = title.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });

    it('should create an invalid ToDoTitleValueObject with a title that is not a string', () => {
      // Arrange
      const invalidTitle = 123;
      const expected = false;
      const fieldName = 'title';
      const expectedMessage = `${fieldName} must be a string`;

      // Act
      const title = new ToDoTitleValueObject(invalidTitle as any);
      const resultIsValid = title.isValid();
      const resultError = title.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });
  });
});
