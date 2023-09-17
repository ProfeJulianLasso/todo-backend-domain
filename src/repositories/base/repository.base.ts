import { QueryOptionsType } from '../../types';

export interface IRepositoryBase<Entity> {
  findAll(options?: QueryOptionsType<Entity>): Promise<Entity[]>;
  findBy(options: QueryOptionsType<Entity>): Promise<Entity>;
  create(entity: Entity): Promise<Entity>;
  update(id: string, entity: Entity): Promise<Entity>;
  delete(id: string, soft?: boolean): Promise<boolean>;
}
