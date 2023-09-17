import {
  ToDoDescriptionValueObject,
  ToDoIdValueObject,
  ToDoTitleValueObject,
  UserIdValueObject,
} from '../value-objects';

export interface CreateToDoCommand {
  toDoId?: ToDoIdValueObject;
  userId: UserIdValueObject;
  title: ToDoTitleValueObject;
  description?: ToDoDescriptionValueObject;
}
