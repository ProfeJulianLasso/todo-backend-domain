import { LoginCommand } from '../commands';
import { DomainException } from '../exceptions';
import {
  UserEmailValueObject,
  UserPasswordValueObject,
} from '../value-objects';
import { ValidatorBase } from './base';

export class LoginValidator extends ValidatorBase {
  email: UserEmailValueObject;
  password: UserPasswordValueObject;

  constructor(private readonly data: LoginCommand) {
    super();
    this.email = data.email;
    this.password = data.password;
  }

  validate(): void {
    if (!this.email.isValid()) this.error = this.email.error;
    if (!this.isValid())
      throw new DomainException('Invalid data', this.getErrors());
  }
}
