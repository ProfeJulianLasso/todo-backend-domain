import { z } from 'zod';
import { ValueObjectBase } from './value-object.base';

export abstract class ConfigValueObjectBase<
  Type,
> extends ValueObjectBase<Type> {
  private _config!: object;

  protected get config(): object {
    return this._config;
  }

  protected set config(config: object) {
    this._config = config;
  }

  protected abstract configure(): void;

  protected abstract getSchema<T>(): T;

  protected validate(): void {
    this.configure();
    const schema = this.getSchema<z.ZodString>();
    const validation = schema.safeParse(this.value);
    if (validation.success === false)
      this.error = {
        field: (this.config as { fieldName: string }).fieldName,
        message: validation.error.issues[0].message,
      };
  }
}
