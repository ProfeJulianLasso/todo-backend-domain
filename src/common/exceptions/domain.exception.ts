export class DomainException extends Error {
  constructor(
    message: string,
    readonly details?: Record<string, unknown> | Record<string, unknown>[]
  ) {
    super(message);
  }
}
