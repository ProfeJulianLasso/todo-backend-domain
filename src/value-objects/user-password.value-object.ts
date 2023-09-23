import { createHash } from 'node:crypto';
import { z } from 'zod';
import { ConfigValueObjectBase } from './base';

const FIELD_NAME = 'password';
const MIN_LENGTH = 8;
const HASH = 'sha256';
const REGEX = /^(?=.*[a-zA-Z\d])(?=.*[\W_]).{8,}$/;

/**
 * Value object for password
 *
 * @export
 * @class UserPasswordValueObject
 * @extends {ConfigValueObjectBase<string>}
 */
export class UserPasswordValueObject extends ConfigValueObjectBase<string> {
  get hashed(): string {
    return createHash(HASH).update(this.value).digest('hex');
  }

  /**
   * Configuration for value object validations
   *
   * @protected
   * @memberof UserPasswordValueObject
   */
  protected configure(): void {
    this.config = { fieldName: FIELD_NAME };
  }

  /**
   * Get schema for password value object validations
   *
   * @protected
   * @template T Type of the schema
   * @return {*}  {T} Schema for password value object validations
   * @memberof UserPasswordValueObject
   */
  protected getSchema<T>(): T {
    return z
      .string({
        required_error: `${FIELD_NAME} is required`,
        invalid_type_error: `${FIELD_NAME} must be a string`,
      })
      .min(MIN_LENGTH, `${FIELD_NAME} has min length of ${MIN_LENGTH}`)
      .regex(REGEX, `${FIELD_NAME} must match regex ${REGEX}`) as T;
  }
}
