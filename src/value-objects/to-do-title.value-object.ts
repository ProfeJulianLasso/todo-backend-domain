import { StringValueObjectBase } from './base';

const FIELD_NAME = 'title';
const MIN_LENGTH = 4;
const MAX_LENGTH = 100;
const NAME_REGEX = /^.*$/;

export class ToDoTitleValueObject extends StringValueObjectBase {
  protected configure(): void {
    this.config = {
      fieldName: FIELD_NAME,
      minLength: MIN_LENGTH,
      maxLength: MAX_LENGTH,
      regex: NAME_REGEX,
    };
  }
}
