import { z } from 'zod';
import { ConfigValueObjectBase } from './config-value-object.base';

/**
 * Base class for configuring boolean value objects
 *
 * @export
 * @abstract
 * @class BooleanValueObjectBase
 * @extends {ConfigValueObjectBase<boolean>}
 */
export abstract class BooleanValueObjectBase extends ConfigValueObjectBase<boolean> {
  /**
   * Getter for the validation schema of the value object
   *
   * @protected
   * @template T Type of the schema
   * @return {*}  {T} Validation schema for the value object
   * @memberof BooleanValueObjectBase
   */
  protected getSchema<T>(): T {
    this.configure();
    const { fieldName } = this.config as { fieldName: string };
    return z.boolean({
      required_error: `${fieldName} is required`,
      invalid_type_error: `${fieldName} must be a boolean`,
    }) as T;
  }
}
