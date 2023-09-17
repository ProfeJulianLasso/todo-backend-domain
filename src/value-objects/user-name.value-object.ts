import { StringValueObjectBase } from './base';

const FIELD_NAME = 'name';
const MIN_LENGTH = 4;
const MAX_LENGTH = 500;
const NAME_REGEX = /^[a-zA-Z\s]+$/;

export class UserNameValueObject extends StringValueObjectBase {
  protected configure(): void {
    this.config = {
      fieldName: FIELD_NAME,
      minLength: MIN_LENGTH,
      maxLength: MAX_LENGTH,
      regex: NAME_REGEX,
    };
  }
}
