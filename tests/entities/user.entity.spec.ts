import {
  StatusValueObject,
  ToDo,
  ToDoDescriptionValueObject,
  ToDoIdValueObject,
  ToDoTitleValueObject,
  User,
  UserEmailValueObject,
  UserIdValueObject,
  UserNameValueObject,
  UserPasswordValueObject,
  UserInterface,
} from '../../src';

describe('UserEntity', () => {
  let userId: string;
  let name: string;
  let email: string;
  let password: string;
  let toDos: ToDo[];

  beforeEach(() => {
    userId = '550e8400-e29b-41d4-a716-887744331234';
    name = 'test name';
    email = 'test@domain.co';
    password = '123456';
    toDos = [];
  });

  it('should create a valid UserEntity', () => {
    // Arrange
    const data = {
      userId: new UserIdValueObject(userId),
      name: new UserNameValueObject(name),
      email: new UserEmailValueObject(email),
      password: new UserPasswordValueObject(password),
      toDos,
    } as UserInterface;

    // Act
    const user = new User(data);

    // Assert
    expect(user).toBeDefined();
  });

  describe('create', () => {
    it('should create a valid UserEntity with a valid userId', () => {
      // Arrange
      const expected = true;
      const expectedToDos = Array<ToDo>;
      const data = {
        userId: new UserIdValueObject(userId),
        name: new UserNameValueObject(name),
        email: new UserEmailValueObject(email),
        password: new UserPasswordValueObject(password),
      } as UserInterface;

      // Act
      const user = new User(data);
      user.create();

      // Assert
      expect(user.status.value).toBe(expected);
      expect(user.toDos).toBeInstanceOf(expectedToDos);
    });

    it('should create a valid UserEntity without a userId', () => {
      // Arrange
      const regex = /^[a-f0-9]{8}(-[a-f0-9]{4}){4}[a-f0-9]{8}$/i;
      const expected = true;
      const expectedToDos = Array<ToDo>;
      const data = {
        name: new UserNameValueObject(name),
        email: new UserEmailValueObject(email),
        password: new UserPasswordValueObject(password),
      } as UserInterface;

      // Act
      const user = new User(data);
      user.create();

      // Assert
      expect(user.userId.value).toMatch(regex);
      expect(user.status.value).toBe(expected);
      expect(user.toDos).toBeInstanceOf(expectedToDos);
    });
  });

  describe('update', () => {
    it('should update a valid UserEntity', () => {
      // Arrange
      const expectedName = 'updated name';
      const expectedEmail = 'new_email_test@domain.co';
      const expectedPass = 'newPass123!';
      const newName = new UserNameValueObject('updated name');
      const newEmail = new UserEmailValueObject('new_email_test@domain.co');
      const newPass = new UserPasswordValueObject('newPass123!');
      const currentData = {
        userId: new UserIdValueObject(userId),
        name: new UserNameValueObject('updated name'),
        email: new UserEmailValueObject(email),
        password: new UserPasswordValueObject(password),
      } as UserInterface;
      const newData = {
        name: newName,
        email: newEmail,
        password: newPass,
      } as UserInterface;

      // Act
      const user = new User(currentData);
      user.update(newData);

      // Assert
      expect(user.name.value).toBe(expectedName);
      expect(user.email.value).toBe(expectedEmail);
      expect(user.password.value).toBe(expectedPass);
    });
  });

  describe('enable', () => {
    it('should enable a valid UserEntity', () => {
      // Arrange
      jest
        .spyOn(ToDo.prototype, 'enable')
        .mockImplementation(() => new ToDo({}));
      const toDos = [
        new ToDo({
          toDoId: new ToDoIdValueObject('550e8400-e29b-41d4-a716-887744331234'),
          title: new ToDoTitleValueObject('test name'),
          description: new ToDoDescriptionValueObject('test description'),
          status: new StatusValueObject(false),
        }),
      ] as ToDo[];
      const expected = true;
      const currentData = {
        userId: new UserIdValueObject(userId),
        name: new UserNameValueObject(name),
        email: new UserEmailValueObject(email),
        password: new UserPasswordValueObject(password),
        toDos,
      } as UserInterface;

      // Act
      const user = new User(currentData);
      user.enable();

      // Assert
      expect(user.status.value).toBe(expected);
      expect(ToDo.prototype.enable).toHaveBeenCalled();
    });
  });

  describe('disable', () => {
    it('should disable a valid UserEntity', () => {
      // Arrange
      jest
        .spyOn(ToDo.prototype, 'disable')
        .mockImplementation(() => new ToDo({}));
      const toDos = [
        new ToDo({
          toDoId: new ToDoIdValueObject('550e8400-e29b-41d4-a716-887744331234'),
          title: new ToDoTitleValueObject('test name'),
          description: new ToDoDescriptionValueObject('test description'),
        }),
      ] as ToDo[];
      const expected = false;
      const currentData = {
        userId: new UserIdValueObject(userId),
        name: new UserNameValueObject(name),
        email: new UserEmailValueObject(email),
        password: new UserPasswordValueObject(password),
        toDos,
      } as UserInterface;

      // Act
      const user = new User(currentData);
      user.disable();

      // Assert
      expect(user.status.value).toBe(expected);
      expect(ToDo.prototype.disable).toHaveBeenCalled();
    });
  });
});
