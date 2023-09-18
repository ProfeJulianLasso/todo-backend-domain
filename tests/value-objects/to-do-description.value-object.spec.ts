/* eslint-disable @typescript-eslint/no-explicit-any */
import { ToDoDescriptionValueObject } from '../../src/value-objects';

describe('ToDoDescriptionValueObject', () => {
  describe('when the scenario has correct data', () => {
    it('should create a valid ToDoDescriptionValueObject with a valid description', () => {
      // Arrange
      const validDescription = 'This is a valid description';
      const expected = true;

      // Act
      const description = new ToDoDescriptionValueObject(validDescription);
      const resultIsValid = description.isValid();

      // Assert
      expect(resultIsValid).toBe(expected);
    });
  });

  describe('when the scenario has incorrect data', () => {
    it('should create an invalid ToDoDescriptionValueObject with an empty string', () => {
      // Arrange
      const invalidDescription = '';
      const expected = false;
      const fieldName = 'description';
      const expectedMessage = `${fieldName} has min length of 2`;

      // Act
      const description = new ToDoDescriptionValueObject(invalidDescription);
      const resultIsValid = description.isValid();
      const resultError = description.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });

    it('should create an invalid ToDoDescriptionValueObject with a string shorter than minLength', () => {
      // Arrange
      const invalidDescription = 'A';
      const expected = false;
      const fieldName = 'description';
      const expectedMessage = `${fieldName} has min length of 2`;

      // Act
      const description = new ToDoDescriptionValueObject(invalidDescription);
      const resultIsValid = description.isValid();
      const resultError = description.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });

    it('should create an invalid ToDoDescriptionValueObject with a string longer than maxLength', () => {
      // Arrange
      let invalidDescription =
        'This description is longer than the allowed maximum length.';
      const lorem =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at porta orci. Sed est nisi, blandit sit amet mauris in, euismod convallis lorem. Curabitur ornare vulputate tortor nec feugiat. Aenean eu elit sit amet erat mattis rutrum ornare ut quam. Maecenas dictum nunc magna, nec lobortis leo sagittis et. Aliquam magna felis, euismod sed tristique at, tempor ac enim. Suspendisse convallis turpis erat, a hendrerit neque euismod a.';
      for (let i = 0; i < 10; i++) {
        invalidDescription += lorem;
      }

      const expected = false;
      const fieldName = 'description';
      const expectedMessage = `${fieldName} has max length of 1024`;

      // Act
      const description = new ToDoDescriptionValueObject(invalidDescription);
      const resultIsValid = description.isValid();
      const resultError = description.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });

    it('should create an invalid ToDoDescriptionValueObject with a description that is not a string', () => {
      // Arrange
      const invalidDescription = 123;
      const expected = false;
      const fieldName = 'description';
      const expectedMessage = `${fieldName} must be a string`;

      // Act
      const description = new ToDoDescriptionValueObject(
        invalidDescription as any
      );
      const resultIsValid = description.isValid();
      const resultError = description.error;

      // Assert
      expect(resultIsValid).toBe(expected);
      expect(resultError.field).toBe(fieldName);
      expect(resultError.message).toContain(expectedMessage);
    });
  });
});
