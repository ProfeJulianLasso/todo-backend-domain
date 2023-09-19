import { ValueObjectExceptionInterface } from '../interfaces';

export class DomainException extends Error {
  constructor(
    message: string,
    readonly details?:
      | ValueObjectExceptionInterface
      | ValueObjectExceptionInterface[]
  ) {
    super(message);
  }
}
