import { randomUUID } from 'node:crypto';
import {
  CompletedValueObject,
  StatusValueObject,
  ToDoDescriptionValueObject,
  ToDoIdValueObject,
  ToDoTitleValueObject,
} from '../value-objects';
import { User } from './user.entity';
import { ToDoInterface } from '../common';

export class ToDo implements ToDoInterface {
  toDoId: ToDoIdValueObject;
  user: User;
  title: ToDoTitleValueObject;
  description?: ToDoDescriptionValueObject;
  completed: CompletedValueObject;
  status: StatusValueObject;

  constructor(toDo: Partial<ToDoInterface>) {
    this.toDoId = toDo.toDoId as ToDoIdValueObject;
    this.user = toDo.user as User;
    this.title = toDo.title as ToDoTitleValueObject;
    this.description = toDo.description as ToDoDescriptionValueObject;
    this.completed = toDo.completed as CompletedValueObject;
    this.status = toDo.status as StatusValueObject;
  }

  create(user: User): this {
    if (!this.toDoId) this.toDoId = new ToDoIdValueObject(randomUUID());
    this.user = user;
    this.completed = new CompletedValueObject(false);
    this.status = new StatusValueObject(true);
    return this;
  }

  update(toDo: Partial<ToDoInterface>): this {
    if (toDo.title) this.title = toDo.title;
    if (toDo.description) this.description = toDo.description;
    if (toDo.completed) this.completed = toDo.completed;
    return this;
  }

  complete(): this {
    this.completed = new CompletedValueObject(true);
    return this;
  }

  incomplete(): this {
    this.completed = new CompletedValueObject(false);
    return this;
  }

  disable(): this {
    this.status = new StatusValueObject(false);
    return this;
  }

  enable(): this {
    this.status = new StatusValueObject(true);
    return this;
  }
}
