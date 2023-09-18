import {
  CompleteToDoCommand,
  CompleteToDoValidator,
  DomainException,
  ToDoIdValueObject,
} from '../../src';

describe('CompleteToDoValidator', () => {
  describe('when the scenario has a valid data', () => {
    it('should to be valid', () => {
      // Arrange
      const validUUID = 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11';
      const data = {
        toDoId: new ToDoIdValueObject(validUUID),
      } as CompleteToDoCommand;
      const expected = true;

      // Act
      const validator = new CompleteToDoValidator(data);
      validator.validate();
      const result = validator.isValid();

      // Assert
      expect(result).toBe(expected);
    });
  });

  describe('when the scenario has an invalid data', () => {
    it('should to be invalid', () => {
      // Arrange
      const invalidUUID = 'invalid-uuid';
      const data = {
        toDoId: new ToDoIdValueObject(invalidUUID),
      } as CompleteToDoCommand;

      // Act
      const validator = new CompleteToDoValidator(data);
      const exception = () => validator.validate();

      // Assert
      expect(exception).toThrow(DomainException);
      expect(exception).toThrow('Invalid data');
    });
  });
});
