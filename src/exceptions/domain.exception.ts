import { ValueObjectExceptionType } from '../types';

export class DomainException extends Error {
  constructor(
    message: string,
    readonly details?: ValueObjectExceptionType | ValueObjectExceptionType[]
  ) {
    super(message);
  }
}
