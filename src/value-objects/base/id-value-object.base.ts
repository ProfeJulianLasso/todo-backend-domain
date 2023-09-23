import { z } from 'zod';
import { ConfigValueObjectBase } from './config-value-object.base';

/**
 * Base class for configuring id value objects
 *
 * @export
 * @abstract
 * @class IdValueObjectBase
 * @extends {ConfigValueObjectBase<string>}
 */
export abstract class IdValueObjectBase extends ConfigValueObjectBase<string> {
  /**
   * Creates an instance of IdValueObjectBase
   *
   * @param {string} value Id value
   * @param {string} fieldName Name of the field
   * @memberof IdValueObjectBase
   */
  constructor(
    public readonly value: string,
    private readonly fieldName: string
  ) {
    super(value);
  }

  /**
   * Sets the configuration of the value object for an ID
   *
   * @protected
   * @memberof IdValueObjectBase
   */
  protected configure(): void {
    this.config = { fieldName: this.fieldName };
  }

  /**
   * Gets the validation schema of the value object for an ID
   *
   * @protected
   * @template T Type of the schema
   * @return {*}  {T} Validation schema for the value object for an ID
   * @memberof IdValueObjectBase
   */
  protected getSchema<T>(): T {
    return z
      .string({
        required_error: `${this.fieldName} is required`,
        invalid_type_error: `${this.fieldName} must be a string`,
      })
      .uuid({
        message: `${this.fieldName} must be a valid uuid`,
      }) as T;
  }
}
