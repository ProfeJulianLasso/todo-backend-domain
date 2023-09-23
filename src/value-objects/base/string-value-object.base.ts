import { z } from 'zod';
import { ConfigValueObjectBase } from './config-value-object.base';

/**
 * Base class for configuring string value objects
 *
 * @export
 * @abstract
 * @class StringValueObjectBase
 * @extends {ConfigValueObjectBase<string>}
 */
export abstract class StringValueObjectBase extends ConfigValueObjectBase<string> {
  /**
   * Getting the validation schema of a string type value object
   *
   * @protected
   * @template T Type of the schema
   * @return {*}  {T} Validation schema for a string type value object
   * @memberof StringValueObjectBase
   */
  protected getSchema<T>(): T {
    this.configure();
    const { fieldName, minLength, maxLength, regex } = this.config as {
      fieldName: string;
      minLength: number;
      maxLength: number;
      regex: RegExp;
    };
    return z
      .string({
        required_error: `${fieldName} is required`,
        invalid_type_error: `${fieldName} must be a string`,
      })
      .min(minLength, `${fieldName} has min length of ${minLength}`)
      .max(maxLength, `${fieldName} has max length of ${maxLength}`)
      .regex(regex, `${fieldName} must match regex ${regex}`) as T;
  }
}
