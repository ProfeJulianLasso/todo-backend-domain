import { IdValueObjectBase } from './base';

const FIELD_NAME = 'userId';

export class UserIdValueObject extends IdValueObjectBase {
  constructor(value: string) {
    super(value, FIELD_NAME);
  }
}
