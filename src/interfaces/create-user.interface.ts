import {
  UserEmailValueObject,
  UserNameValueObject,
  UserPasswordValueObject,
} from '../value-objects';

export interface CreateUserInterface {
  name: UserNameValueObject;
  email: UserEmailValueObject;
  password: UserPasswordValueObject;
}
