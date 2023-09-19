import { DbOrder } from '../enums';

export interface QueryOptionsInterface<Entity> {
  where?: Partial<Entity>;
  orderBy?: Partial<Entity>;
  order?: DbOrder;
}
