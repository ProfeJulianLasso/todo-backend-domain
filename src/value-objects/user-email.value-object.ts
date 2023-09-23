import { z } from 'zod';
import { ConfigValueObjectBase } from './base';

const FIELD_NAME = 'email';
const MAX_LENGTH = 500;

/**
 * Value object for email
 *
 * @export
 * @class UserEmailValueObject
 * @extends {ConfigValueObjectBase<string>}
 */
export class UserEmailValueObject extends ConfigValueObjectBase<string> {
  /**
   * Configuration for value object validations
   *
   * @protected
   * @memberof UserEmailValueObject
   */
  protected configure(): void {
    this.config = { fieldName: FIELD_NAME };
  }

  /**
   * Getting the validation scheme of a value object of type email
   *
   * @protected
   * @template T Type of the schema
   * @return {*}  {T} Validation scheme of a value object of type email
   * @memberof UserEmailValueObject
   */
  protected getSchema<T>(): T {
    return z
      .string({
        required_error: `${FIELD_NAME} is required`,
        invalid_type_error: `${FIELD_NAME} must be a string`,
      })
      .max(MAX_LENGTH, `${FIELD_NAME} has max length of ${MAX_LENGTH}`)
      .email(`${FIELD_NAME} must be a valid email`) as T;
  }
}
