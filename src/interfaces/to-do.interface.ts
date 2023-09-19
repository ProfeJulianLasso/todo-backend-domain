import { User } from '../entities';
import {
  CompletedValueObject,
  StatusValueObject,
  ToDoDescriptionValueObject,
  ToDoIdValueObject,
  ToDoTitleValueObject,
} from '../value-objects';

export interface ToDoInterface {
  toDoId: ToDoIdValueObject;
  user: User;
  title: ToDoTitleValueObject;
  description?: ToDoDescriptionValueObject;
  completed: CompletedValueObject;
  status: StatusValueObject;
}
