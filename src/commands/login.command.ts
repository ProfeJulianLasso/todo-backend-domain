import {
  UserEmailValueObject,
  UserPasswordValueObject,
} from '../value-objects';

export interface LoginCommand {
  email: UserEmailValueObject;
  password: UserPasswordValueObject;
}
