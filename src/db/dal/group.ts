import { IGroup } from '../../common/types/interfaces';
import { Group } from '../models';

export const create = async (payload: IGroup): Promise<IGroup> => {
  return await Group.create(payload);
};

export const update = async (id: string, payload: Partial<IGroup>): Promise<IGroup | null> => {
  const group = await Group.findByPk(id);
  if (!group) {
    return null;
  }
  return await group.update(payload);
};

export const getById = async (id: string): Promise<IGroup | null> => {
  const group = await Group.findByPk(id);
  if (!group) {
    return null;
  }
  return group;
};

export const deleteById = async (id: string) => {
  return await Group.destroy({ where: { id } });
};

export const getAll = async (): Promise<IGroup[]> => {
  return await Group.findAll();
};
