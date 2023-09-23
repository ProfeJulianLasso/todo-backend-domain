import { IdValueObjectBase } from './base';

const FIELD_NAME = 'userId';

/**
 * Value object for userId
 *
 * @export
 * @class UserIdValueObject
 * @extends {IdValueObjectBase}
 */
export class UserIdValueObject extends IdValueObjectBase {
  /**
   * Creates an instance of UserIdValueObject
   *
   * @param {string} value Id value
   * @memberof UserIdValueObject
   */
  constructor(value: string) {
    super(value, FIELD_NAME);
  }
}
