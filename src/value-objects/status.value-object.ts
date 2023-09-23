import { BooleanValueObjectBase } from './base';

const FIELD_NAME = 'status';

/**
 * Value object for status
 *
 * @export
 * @class StatusValueObject
 * @extends {BooleanValueObjectBase}
 */
export class StatusValueObject extends BooleanValueObjectBase {
  /**
   * Configuration for value object validations
   *
   * @protected
   * @memberof StatusValueObject
   */
  protected configure(): void {
    this.config = { fieldName: FIELD_NAME };
  }
}
