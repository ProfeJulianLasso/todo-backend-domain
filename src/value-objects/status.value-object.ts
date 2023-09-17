import { BooleanValueObjectBase } from './base';

const FIELD_NAME = 'status';

export class StatusValueObject extends BooleanValueObjectBase {
  protected configure(): void {
    this.config = { fieldName: FIELD_NAME };
  }
}
