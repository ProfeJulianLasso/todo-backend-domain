import { BooleanValueObjectBase } from './base';

const FIELD_NAME = 'completed';

export class CompletedValueObject extends BooleanValueObjectBase {
  protected configure(): void {
    this.config = { fieldName: FIELD_NAME };
  }
}
