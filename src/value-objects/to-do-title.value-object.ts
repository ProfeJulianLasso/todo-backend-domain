import { StringValueObjectBase } from './base';

const FIELD_NAME = 'title';
const MIN_LENGTH = 4;
const MAX_LENGTH = 100;
const NAME_REGEX = /^.*$/;

/**
 * Value object for title
 *
 * @export
 * @class ToDoTitleValueObject
 * @extends {StringValueObjectBase}
 */
export class ToDoTitleValueObject extends StringValueObjectBase {
  /**
   * Configuration for value object validations
   *
   * @protected
   * @memberof ToDoTitleValueObject
   */
  protected configure(): void {
    this.config = {
      fieldName: FIELD_NAME,
      minLength: MIN_LENGTH,
      maxLength: MAX_LENGTH,
      regex: NAME_REGEX,
    };
  }
}
