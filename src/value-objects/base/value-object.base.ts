import { ValueObjectExceptionInterface } from '../../common';

/**
 * Base class for value objects
 *
 * @export
 * @abstract
 * @class ValueObjectBase
 * @template Type Type of the value object
 */
export abstract class ValueObjectBase<Type> {
  /**
   * Error object
   *
   * @protected
   * @type {ValueObjectExceptionInterface}
   * @memberof ValueObjectBase
   */
  protected _error!: ValueObjectExceptionInterface;

  /**
   * Creates an instance of ValueObjectBase
   *
   * @param {Type} value Value of the value object
   * @memberof ValueObjectBase
   */
  constructor(public readonly value: Type) {}

  /**
   * Getter for error
   *
   * @type {ValueObjectExceptionInterface}
   * @memberof ValueObjectBase
   */
  get error(): ValueObjectExceptionInterface {
    return this._error;
  }

  /**
   * Checks if two value objects are equal
   *
   * @param {ValueObjectBase<Type>} [valueObject]
   * @return {*}  {boolean} True if equal, false otherwise
   * @memberof ValueObjectBase
   */
  equal(valueObject?: ValueObjectBase<Type>): boolean {
    if (!valueObject) return false;
    return this.value === valueObject.value;
  }

  /**
   * Setter for error
   *
   * @protected
   * @memberof ValueObjectBase
   */
  protected set error(error: ValueObjectExceptionInterface) {
    this._error = error;
  }

  /**
   * Checks if the value object is valid
   *
   * @return {*}  {boolean} True if valid, false otherwise
   * @memberof ValueObjectBase
   */
  isValid(): boolean {
    this.validate();
    return !this.error;
  }

  /**
   * Validates the value object
   *
   * @protected
   * @abstract
   * @memberof ValueObjectBase
   */
  protected abstract validate(): void;
}
