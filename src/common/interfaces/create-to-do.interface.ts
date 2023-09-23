import { User } from '../../entities';
import {
  ToDoDescriptionValueObject,
  ToDoIdValueObject,
  ToDoTitleValueObject,
} from '../../value-objects';

export interface CreateToDoInterface {
  user: User;
  title: ToDoTitleValueObject;
  toDoId?: ToDoIdValueObject;
  description?: ToDoDescriptionValueObject;
}
