import { z } from 'zod';
import { ConfigValueObjectBase } from './config-value-object.base';

export abstract class BooleanValueObjectBase extends ConfigValueObjectBase<boolean> {
  protected getSchema<T>(): T {
    this.configure();
    const { fieldName } = this.config as { fieldName: string };
    return z.boolean({
      required_error: `${fieldName} is required`,
      invalid_type_error: `${fieldName} must be a boolean`,
    }) as T;
  }
}
