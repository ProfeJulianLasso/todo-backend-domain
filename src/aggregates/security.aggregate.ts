import { User } from '../entities';
import {
  UserEmailValueObject,
  UserNameValueObject,
  UserPasswordValueObject,
} from '../value-objects';
import { AggregateBase } from './base';

export class SecurityAggregate extends AggregateBase {
  createUser({
    name,
    email,
    password,
  }: {
    name: UserNameValueObject;
    email: UserEmailValueObject;
    password: UserPasswordValueObject;
  }): User {
    const user = new User({ name, email, password });
    return user.create();
  }
}
