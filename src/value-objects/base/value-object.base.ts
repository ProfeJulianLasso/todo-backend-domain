import { ValueObjectExceptionInterface } from '../../interfaces';

export abstract class ValueObjectBase<Type> {
  protected _error!: ValueObjectExceptionInterface;

  constructor(public readonly value: Type) {}

  get error(): ValueObjectExceptionInterface {
    return this._error;
  }

  equal(valueObject?: ValueObjectBase<Type>): boolean {
    if (!valueObject) return false;
    return this.value === valueObject.value;
  }

  protected set error(error: ValueObjectExceptionInterface) {
    this._error = error;
  }

  isValid(): boolean {
    this.validate();
    return !this.error;
  }

  protected abstract validate(): void;
}
