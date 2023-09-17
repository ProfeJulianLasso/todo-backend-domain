import { IdValueObjectBase } from './base';

const FIELD_NAME = 'toDoId';

export class ToDoIdValueObject extends IdValueObjectBase {
  constructor(value: string) {
    super(value, FIELD_NAME);
  }
}
