import { IdValueObjectBase } from './base';

const FIELD_NAME = 'toDoId';

/**
 * Value object for toDoId
 *
 * @export
 * @class ToDoIdValueObject
 * @extends {IdValueObjectBase}
 */
export class ToDoIdValueObject extends IdValueObjectBase {
  /**
   * Creates an instance of ToDoIdValueObject
   *
   * @param {string} value Id value
   * @memberof ToDoIdValueObject
   */
  constructor(value: string) {
    super(value, FIELD_NAME);
  }
}
