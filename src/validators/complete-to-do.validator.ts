import { CompleteToDoCommand } from '../commands';
import { DomainException } from '../exceptions';
import { ToDoIdValueObject } from '../value-objects';
import { ValidatorBase } from './base';

export class CompleteToDoValidator extends ValidatorBase {
  toDoId: ToDoIdValueObject;

  constructor(private readonly data: CompleteToDoCommand) {
    super();
    this.toDoId = data.toDoId;
  }

  validate(): void {
    if (!this.toDoId.isValid()) this.error = this.toDoId.error;
    if (!this.isValid())
      throw new DomainException('Invalid data', this.getErrors());
  }
}
