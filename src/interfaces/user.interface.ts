import { ToDo } from '../entities';
import {
  StatusValueObject,
  UserEmailValueObject,
  UserIdValueObject,
  UserNameValueObject,
  UserPasswordValueObject,
} from '../value-objects';

export interface UserInterface {
  userId: UserIdValueObject;
  name: UserNameValueObject;
  email: UserEmailValueObject;
  password: UserPasswordValueObject;
  status: StatusValueObject;
  toDos?: ToDo[];
}
