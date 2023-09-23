import { BooleanValueObjectBase } from './base';

const FIELD_NAME = 'completed';

/**
 * Value object for completed
 *
 * @export
 * @class CompletedValueObject
 * @extends {BooleanValueObjectBase}
 */
export class CompletedValueObject extends BooleanValueObjectBase {
  /**
   * Configuration for value object validations
   *
   * @protected
   * @memberof CompletedValueObject
   */
  protected configure(): void {
    this.config = { fieldName: FIELD_NAME };
  }
}
