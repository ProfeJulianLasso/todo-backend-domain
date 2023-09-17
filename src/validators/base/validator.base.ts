import { ValueObjectExceptionType } from '../../types';

export abstract class ValidatorBase {
  private _errors: ValueObjectExceptionType[];

  constructor() {
    this._errors = new Array<ValueObjectExceptionType>();
  }

  getErrors(): ValueObjectExceptionType[] {
    return this._errors;
  }

  protected set error(error: ValueObjectExceptionType) {
    this._errors.push(error);
  }

  isValid(): boolean {
    return this._errors.length === 0;
  }
}
