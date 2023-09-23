import { z } from 'zod';
import { ValueObjectBase } from './value-object.base';

/**
 * Base class for configuring value objects
 *
 * @export
 * @abstract
 * @class ConfigValueObjectBase
 * @extends {ValueObjectBase<Type>}
 * @template Type
 */
export abstract class ConfigValueObjectBase<
  Type,
> extends ValueObjectBase<Type> {
  /**
   * Configuration object
   *
   * @private
   * @type {object}
   * @memberof ConfigValueObjectBase
   */
  private _config!: object;

  /**
   * Getter for configuration object
   *
   * @protected
   * @type {object} Configuration object
   * @memberof ConfigValueObjectBase
   */
  protected get config(): object {
    return this._config;
  }

  /**
   * Setter for configuration object
   *
   * @protected
   * @memberof ConfigValueObjectBase
   */
  protected set config(config: object) {
    this._config = config;
  }

  /**
   * Sets the configuration of a value object
   *
   * @protected
   * @abstract
   * @memberof ConfigValueObjectBase
   */
  protected abstract configure(): void;

  /**
   * Gets the validation schema of the value object
   *
   * @protected
   * @abstract
   * @template T Type of the schema
   * @return {*}  {T} Validation schema for the value object
   * @memberof ConfigValueObjectBase
   */
  protected abstract getSchema<T>(): T;

  /**
   * Validates the value object
   *
   * @protected
   * @memberof ConfigValueObjectBase
   */
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
