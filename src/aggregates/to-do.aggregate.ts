import { ToDo } from '../entities';
import { CompleteToDoInterface, CreateToDoInterface } from '../interfaces';
import { AggregateBase } from './base';

export class ToDoAggregate extends AggregateBase {
  createToDo(data: CreateToDoInterface): ToDo {
    const toDo = new ToDo({
      toDoId: data.toDoId,
      title: data.title,
      description: data.description,
    });
    return toDo.create(data.user);
  }

  completeToDo(data: CompleteToDoInterface): ToDo {
    const toDo = new ToDo(data);
    return toDo.complete();
  }
}
