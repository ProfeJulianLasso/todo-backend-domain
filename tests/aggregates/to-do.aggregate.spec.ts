import {
  ToDo,
  ToDoAggregate,
  ToDoDescriptionValueObject,
  ToDoIdValueObject,
  ToDoTitleValueObject,
  User,
} from '../../src';

jest.mock('../../src/entities/to-do.entity.ts');

describe('ToDoAggregate', () => {
  let toDoId: ToDoIdValueObject;
  let title: ToDoTitleValueObject;
  let description: ToDoDescriptionValueObject;
  let user: User;
  let toDoAggregate: ToDoAggregate;

  beforeAll(() => {
    toDoId = new ToDoIdValueObject('550e8400-e29b-41d4-a716-887744331234');
    title = new ToDoTitleValueObject('title');
    description = new ToDoDescriptionValueObject('description');
    user = new User({});
  });

  describe('createToDo', () => {
    it('should create a ToDo with all props', () => {
      // Arrange
      const data = {
        toDoId,
        title,
        description,
        user,
      };
      const expectedData = {
        toDoId,
        title,
        description,
      };
      jest.spyOn(ToDo.prototype, 'create').mockImplementationOnce(() => {
        return new ToDo({});
      });
      toDoAggregate = new ToDoAggregate();

      // Act
      toDoAggregate.createToDo(data);

      // Assert
      expect(ToDo).toHaveBeenCalledWith(expectedData);
      expect(ToDo.prototype.create).toHaveBeenCalledWith(user);
    });

    it('should create a ToDo with minimal props', () => {
      // Arrange
      const data = {
        title,
        user,
      };
      const expectedData = {
        title,
      };
      jest.spyOn(ToDo.prototype, 'create').mockImplementationOnce(() => {
        return new ToDo({});
      });
      toDoAggregate = new ToDoAggregate();

      // Act
      toDoAggregate.createToDo(data);

      // Assert
      expect(ToDo).toHaveBeenCalledWith(expectedData);
      expect(ToDo.prototype.create).toHaveBeenCalledWith(user);
    });
  });

  describe('completeToDo', () => {
    it('should complete a ToDo', () => {
      // Arrange
      const data = {
        toDoId,
      };
      const expectedData = {
        toDoId,
      };
      jest.spyOn(ToDo.prototype, 'complete').mockImplementationOnce(() => {
        return new ToDo({});
      });
      toDoAggregate = new ToDoAggregate();

      // Act
      toDoAggregate.completeToDo(data);

      // Assert
      expect(ToDo).toHaveBeenCalledWith(expectedData);
      expect(ToDo.prototype.complete).toHaveBeenCalled();
    });
  });
});
