import { NewUserCommand } from '../commands';
import { DomainException } from '../exceptions';
import {
  UserEmailValueObject,
  UserIdValueObject,
  UserNameValueObject,
  UserPasswordValueObject,
} from '../value-objects';
import { ValidatorBase } from './base';

export class NewUserValidator extends ValidatorBase {
  userId?: UserIdValueObject;
  name: UserNameValueObject;
  email: UserEmailValueObject;
  password: UserPasswordValueObject;

  constructor(private readonly data: NewUserCommand) {
    super();
    this.userId = data.userId ? data.userId : undefined;
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
  }

  validate(): void {
    if (this.userId && !this.userId.isValid()) this.error = this.userId.error;
    if (!this.name.isValid()) this.error = this.name.error;
    if (!this.email.isValid()) this.error = this.email.error;
    if (!this.password.isValid()) this.error = this.password.error;
    if (!this.isValid())
      throw new DomainException('Invalid data', this.getErrors());
  }
}
