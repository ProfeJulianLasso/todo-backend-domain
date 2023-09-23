import { DomainException, ValueObjectExceptionInterface } from '../../../src';

describe('DomainException', () => {
  it('should get the message "invalid data"', () => {
    // Arrange
    const messageForException = 'Invalid data';
    const expectedThrowMessage = 'Invalid data';
    const exception = new DomainException(messageForException);

    // Act
    const message = exception.message;

    // Assert
    expect(message).toBe(expectedThrowMessage);
  });

  it('should get the details of the error', () => {
    // Arrange
    const messageForException = 'Invalid data';
    const details = [
      {
        field: 'userId',
        message: 'Invalid userId',
      },
    ] as ValueObjectExceptionInterface[];
    const expectedDetails = [
      {
        field: 'userId',
        message: 'Invalid userId',
      },
    ] as ValueObjectExceptionInterface[];
    const exception = new DomainException(messageForException, details);

    // Act
    const detailsFromException = exception.details;

    // Assert
    expect(detailsFromException).toEqual(expectedDetails);
  });
});
