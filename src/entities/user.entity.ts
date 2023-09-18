import { randomUUID } from 'node:crypto';
import { UserType } from '../types';
import {
  StatusValueObject,
  UserEmailValueObject,
  UserIdValueObject,
  UserNameValueObject,
  UserPasswordValueObject,
} from '../value-objects';
import { ToDo } from './to-do.entity';

export class User implements UserType {
  userId: UserIdValueObject;
  name: UserNameValueObject;
  email: UserEmailValueObject;
  password: UserPasswordValueObject;
  status: StatusValueObject;
  toDos?: ToDo[];

  constructor(user: Partial<UserType>) {
    this.userId = user.userId as UserIdValueObject;
    this.name = user.name as UserNameValueObject;
    this.email = user.email as UserEmailValueObject;
    this.password = user.password as UserPasswordValueObject;
    this.status = user.status as StatusValueObject;
    this.toDos = user.toDos as ToDo[];
  }

  create(): this {
    if (!this.userId) this.userId = new UserIdValueObject(randomUUID());
    this.status = new StatusValueObject(true);
    this.toDos = [];
    return this;
  }

  update(user: Partial<UserType>): this {
    if (user.name) this.name = user.name;
    if (user.email) this.email = user.email;
    if (user.password) this.password = user.password;
    return this;
  }

  disable(): this {
    this.status = new StatusValueObject(false);
    this.toDos?.forEach(toDo => toDo.disable());
    return this;
  }

  enable(): this {
    this.status = new StatusValueObject(true);
    this.toDos?.forEach(toDo => toDo.enable());
    return this;
  }
}
