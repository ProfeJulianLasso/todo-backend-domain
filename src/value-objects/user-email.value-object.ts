import { z } from 'zod';
import { ConfigValueObjectBase } from './base';

const FIELD_NAME = 'email';
const MAX_LENGTH = 500;

export class UserEmailValueObject extends ConfigValueObjectBase<string> {
  protected configure(): void {
    this.config = { fieldName: FIELD_NAME };
  }

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
