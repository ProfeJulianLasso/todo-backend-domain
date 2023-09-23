import { StringValueObjectBase } from './base';

const FIELD_NAME = 'description';
const MIN_LENGTH = 2;
const MAX_LENGTH = 1024;
const NAME_REGEX = /^.*$/;

/**
 * Value object for description
 *
 * @export
 * @class ToDoDescriptionValueObject
 * @extends {StringValueObjectBase}
 */
export class ToDoDescriptionValueObject extends StringValueObjectBase {
  /**
   * Configuration for value object validations
   *
   * @protected
   * @memberof ToDoDescriptionValueObject
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
