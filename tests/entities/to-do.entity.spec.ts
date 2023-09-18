import {
  CompletedValueObject,
  StatusValueObject,
  ToDo,
  ToDoDescriptionValueObject,
  ToDoIdValueObject,
  ToDoTitleValueObject,
  ToDoType,
  User,
  UserEmailValueObject,
  UserIdValueObject,
  UserNameValueObject,
  UserPasswordValueObject,
} from '../../src';

describe('ToDoEntity', () => {
  let toDoId: ToDoIdValueObject;
  let user: User;
  let title: ToDoTitleValueObject;
  let description: ToDoDescriptionValueObject;
  let completed: CompletedValueObject;
  let status: StatusValueObject;

  beforeEach(() => {
    toDoId = new ToDoIdValueObject('550e8400-e29b-41d4-a716-887744331234');
    user = new User({
      userId: new UserIdValueObject('550e8400-e29b-41d4-a716-887744331234'),
      name: new UserNameValueObject('test name'),
      email: new UserEmailValueObject('test@domain.co'),
      password: new UserPasswordValueObject('123456'),
    });
    title = new ToDoTitleValueObject('test title');
    description = new ToDoDescriptionValueObject('test description');
    completed = new CompletedValueObject(false);
    status = new StatusValueObject(true);
  });

  it('should create a valid ToDoEntity', () => {
    // Arrange
    const data = {
      toDoId,
      user,
      title,
      description,
      completed,
      status,
    } as ToDoType;

    // Act
    const toDo = new ToDo(data);

    // Assert
    expect(toDo).toBeDefined();
  });

  describe('create', () => {
    it('should create a valid ToDoEntity with a valid toDoId', () => {
      // Arrange
      const expected = '550e8400-e29b-41d4-a716-887744331234';
      const data = {
        toDoId,
        title,
        description,
        completed,
        status,
      } as ToDoType;

      // Act
      const toDo = new ToDo(data);
      toDo.create(user);

      // Assert
      expect(toDo.toDoId.value).toEqual(expected);
      expect(toDo.user.userId.value).toEqual(expected);
    });

    it('should create a valid ToDoEntity without a toDoId', () => {
      // Arrange
      const regex = /^[a-f0-9]{8}(-[a-f0-9]{4}){4}[a-f0-9]{8}$/i;
      const data = {
        title,
        description,
        completed,
        status,
      } as ToDoType;

      // Act
      const toDo = new ToDo(data);
      toDo.create(user);

      // Assert
      expect(toDo.toDoId.value).toMatch(regex);
      expect(toDo.user.userId.value).toMatch(regex);
    });
  });

  describe('update', () => {
    it('should update a valid ToDoEntity', () => {
      // Arrange
      const expectedTitle = 'updated title';
      const expectedDescription = 'updated description';
      const expectedCompleted = true;
      const data = {
        title,
        description,
        completed,
        status,
      } as ToDoType;
      const updatedData = {
        title: new ToDoTitleValueObject('updated title'),
        description: new ToDoDescriptionValueObject('updated description'),
        completed: new CompletedValueObject(true),
      } as ToDoType;

      // Act
      const toDo = new ToDo(data);
      toDo.update(updatedData);

      // Assert
      expect(toDo.title.value).toEqual(expectedTitle);
      if (toDo.description)
        expect(toDo.description.value).toEqual(expectedDescription);
      expect(toDo.completed.value).toEqual(expectedCompleted);
    });
  });

  describe('complete', () => {
    it('should complete a valid ToDoEntity', () => {
      // Arrange
      const expected = true;
      const data = {
        title,
        description,
        completed,
        status,
      } as ToDoType;

      // Act
      const toDo = new ToDo(data);
      toDo.complete();

      // Assert
      expect(toDo.completed.value).toEqual(expected);
    });
  });

  describe('incomplete', () => {
    it('should incomplete a valid ToDoEntity', () => {
      // Arrange
      const expected = false;
      const data = {
        title,
        description,
        completed: new CompletedValueObject(true),
        status,
      } as ToDoType;

      // Act
      const toDo = new ToDo(data);
      toDo.incomplete();

      // Assert
      expect(toDo.completed.value).toEqual(expected);
    });
  });

  describe('enable', () => {
    it('should enable a valid ToDoEntity', () => {
      // Arrange
      const expected = true;
      const data = {
        title,
        description,
        completed,
        status: new StatusValueObject(false),
      } as ToDoType;

      // Act
      const toDo = new ToDo(data);
      toDo.enable();

      // Assert
      expect(toDo.status.value).toEqual(expected);
    });
  });

  describe('disable', () => {
    it('should disable a valid ToDoEntity', () => {
      // Arrange
      const expected = false;
      const data = {
        title,
        description,
        completed,
        status,
      } as ToDoType;

      // Act
      const toDo = new ToDo(data);
      toDo.disable();

      // Assert
      expect(toDo.status.value).toEqual(expected);
    });
  });
});
