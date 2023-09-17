import { StringValueObjectBase } from './base';

const FIELD_NAME = 'description';
const MIN_LENGTH = 2;
const MAX_LENGTH = 1024;
const NAME_REGEX = /^.*$/;

export class ToDoDescriptionValueObject extends StringValueObjectBase {
  protected configure(): void {
    this.config = {
      fieldName: FIELD_NAME,
      minLength: MIN_LENGTH,
      maxLength: MAX_LENGTH,
      regex: NAME_REGEX,
    };
  }
}
