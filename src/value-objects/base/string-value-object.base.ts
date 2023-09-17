import { z } from 'zod';
import { ConfigValueObjectBase } from './config-value-object.base';

export abstract class StringValueObjectBase extends ConfigValueObjectBase<string> {
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
