import { DbOrder } from '../enums';

export type QueryOptionsType<Entity> = {
  where?: Partial<Entity>;
  orderBy?: Partial<Entity>;
  order?: DbOrder;
};
