import { ValueObjectExceptionInterface } from '../../interfaces';

export abstract class ValidatorBase {
  private _errors: ValueObjectExceptionInterface[];

  constructor() {
    this._errors = new Array<ValueObjectExceptionInterface>();
  }

  getErrors(): ValueObjectExceptionInterface[] {
    return this._errors;
  }

  protected set error(error: ValueObjectExceptionInterface) {
    this._errors.push(error);
  }

  isValid(): boolean {
    return this._errors.length === 0;
  }
}
