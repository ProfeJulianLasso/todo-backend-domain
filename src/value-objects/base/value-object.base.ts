import { ValueObjectExceptionType } from '../../types';

export abstract class ValueObjectBase<Type> {
  protected _error!: ValueObjectExceptionType;

  constructor(public readonly value: Type) {}

  get error(): ValueObjectExceptionType {
    return this._error;
  }

  equal(valueObject?: ValueObjectBase<Type>): boolean {
    if (!valueObject) return false;
    return this.value === valueObject.value;
  }

  protected set error(error: ValueObjectExceptionType) {
    this._error = error;
  }

  isValid(): boolean {
    this.validate();
    return !this.error;
  }

  protected abstract validate(): void;
}
