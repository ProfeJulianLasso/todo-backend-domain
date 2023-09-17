import { ToDo } from '../entities';
import {
  StatusValueObject,
  UserEmailValueObject,
  UserIdValueObject,
  UserNameValueObject,
  UserPasswordValueObject,
} from '../value-objects';

export type UserType = {
  userId: UserIdValueObject;
  name: UserNameValueObject;
  email: UserEmailValueObject;
  password: UserPasswordValueObject;
  status: StatusValueObject;
  toDos?: ToDo[];
};
