import { ToDoIdValueObject } from '../value-objects';

export interface CompleteToDoCommand {
  toDoId: ToDoIdValueObject;
}
