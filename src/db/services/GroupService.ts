import * as groupDal from '../dal/group';
import { IGroup } from '../../common/types/interfaces';

export const create = async (payload: IGroup): Promise<IGroup> => {
  return groupDal.create(payload);
};

export const update = async (id: string, payload: IGroup): Promise<IGroup | null> => {
  return groupDal.update(id, payload);
};

export const getById = async (id: string): Promise<IGroup | null> => {
  return groupDal.getById(id);
};

export const deleteById = async (id: string) => {
  return groupDal.deleteById(id);
};

export const getAll = async (): Promise<IGroup[]> => {
  return groupDal.getAll();
};
