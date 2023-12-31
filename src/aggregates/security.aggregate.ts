import { CreateUserInterface } from '../common';
import { User } from '../entities';
import { AggregateBase } from './base';

export class SecurityAggregate extends AggregateBase {
  createUser(data: CreateUserInterface): User {
    const user = new User(data);
    return user.create();
  }
}
