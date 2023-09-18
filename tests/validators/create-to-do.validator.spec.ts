import {
  CreateToDoCommand,
  CreateToDoValidator,
  ToDoDescriptionValueObject,
  ToDoTitleValueObject,
  UserIdValueObject,
} from '../../src';

describe('CreateToDoValidator', () => {
  let validUUID: string;

  beforeAll(() => {
    validUUID = 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11';
  });

  describe('when the scenario has a valid data', () => {
    it('should to be valid', () => {
      // Arrange
      const data = {
        userId: new UserIdValueObject(validUUID),
        title: new ToDoTitleValueObject('title'),
      } as CreateToDoCommand;
      const expected = true;

      // Act
      const validator = new CreateToDoValidator(data);
      validator.validate();
      const result = validator.isValid();

      // Assert
      expect(result).toBe(expected);
    });

    it('should to be valid with description', () => {
      // Arrange
      const data = {
        userId: new UserIdValueObject(validUUID),
        title: new ToDoTitleValueObject('title'),
        description: new ToDoDescriptionValueObject('description'),
      } as CreateToDoCommand;
      const expected = true;

      // Act
      const validator = new CreateToDoValidator(data);
      validator.validate();
      const result = validator.isValid();

      // Assert
      expect(result).toBe(expected);
    });

    it('should to be valid with toDoId', () => {
      // Arrange
      const data = {
        toDoId: new UserIdValueObject(validUUID),
        userId: new UserIdValueObject(validUUID),
        title: new ToDoTitleValueObject('title'),
      } as CreateToDoCommand;
      const expected = true;

      // Act
      const validator = new CreateToDoValidator(data);
      validator.validate();
      const result = validator.isValid();

      // Assert
      expect(result).toBe(expected);
    });
  });

  describe('when the scenario has an invalid data', () => {
    it('should to be invalid with invalid userId', () => {
      // Arrange
      const data = {
        userId: new UserIdValueObject('invalid-uuid'),
        title: new ToDoTitleValueObject('title'),
      } as CreateToDoCommand;

      // Act
      const validator = new CreateToDoValidator(data);
      const exception = () => validator.validate();

      // Assert
      expect(exception).toThrow('Invalid data');
    });

    it('should to be invalid with invalid title', () => {
      // Arrange
      const data = {
        userId: new UserIdValueObject(validUUID),
        title: new ToDoTitleValueObject(''),
      } as CreateToDoCommand;

      // Act
      const validator = new CreateToDoValidator(data);
      const exception = () => validator.validate();

      // Assert
      expect(exception).toThrow('Invalid data');
    });

    it('should to be invalid with invalid description', () => {
      // Arrange
      const data = {
        userId: new UserIdValueObject(validUUID),
        title: new ToDoTitleValueObject('title'),
        description: new ToDoDescriptionValueObject(''),
      } as CreateToDoCommand;

      // Act
      const validator = new CreateToDoValidator(data);
      const exception = () => validator.validate();

      // Assert
      expect(exception).toThrow('Invalid data');
    });

    it('should to be invalid with invalid toDoId', () => {
      // Arrange
      const data = {
        toDoId: new UserIdValueObject('invalid-uuid'),
        userId: new UserIdValueObject(validUUID),
        title: new ToDoTitleValueObject('title'),
      } as CreateToDoCommand;

      // Act
      const validator = new CreateToDoValidator(data);
      const exception = () => validator.validate();

      // Assert
      expect(exception).toThrow('Invalid data');
    });
  });
});
