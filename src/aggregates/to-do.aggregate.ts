import { ToDo, User } from '../entities';
import {
  ToDoDescriptionValueObject,
  ToDoIdValueObject,
  ToDoTitleValueObject,
} from '../value-objects';
import { AggregateBase } from './base';

export class ToDoAggregate extends AggregateBase {
  createToDo({
    toDoId,
    title,
    description,
    user,
  }: {
    toDoId?: ToDoIdValueObject;
    title: ToDoTitleValueObject;
    description?: ToDoDescriptionValueObject;
    user: User;
  }): ToDo {
    const toDo = new ToDo({ toDoId, title, description });
    return toDo.create(user);
  }

  completeToDo({ toDoId }: { toDoId: ToDoIdValueObject }): ToDo {
    const toDo = new ToDo({ toDoId });
    return toDo.complete();
  }
}
