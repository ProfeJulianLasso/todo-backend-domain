import { z } from 'zod';
import { ConfigValueObjectBase } from '.';

export abstract class IdValueObjectBase extends ConfigValueObjectBase<string> {
  constructor(
    public readonly value: string,
    private readonly fieldName: string
  ) {
    super(value);
  }

  protected configure(): void {
    this.config = { fieldName: this.fieldName };
  }

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
