import { CreateToDoCommand } from '../commands';
import { DomainException } from '../exceptions';
import {
  ToDoDescriptionValueObject,
  ToDoIdValueObject,
  ToDoTitleValueObject,
  UserIdValueObject,
} from '../value-objects';
import { ValidatorBase } from './base';

export class CreateToDoValidator extends ValidatorBase {
  toDoId?: ToDoIdValueObject;
  userId: UserIdValueObject;
  title: ToDoTitleValueObject;
  description?: ToDoDescriptionValueObject;

  constructor(private readonly data: CreateToDoCommand) {
    super();
    this.toDoId = data.toDoId;
    this.userId = data.userId;
    this.title = data.title;
    this.description = data.description;
  }

  validate(): void {
    if (this.toDoId && !this.toDoId.isValid()) this.error = this.toDoId.error;
    if (!this.userId.isValid()) this.error = this.userId.error;
    if (!this.title.isValid()) this.error = this.title.error;
    if (this.description && !this.description.isValid())
      this.error = this.description.error;
    if (!this.isValid())
      throw new DomainException('Invalid data', this.getErrors());
  }
}
