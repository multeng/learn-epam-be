import { IGroup } from '../../common/types/interfaces';
import { Group } from '../models';

export const create = async (payload: IGroup): Promise<IGroup> => {
  try {
    return await Group.create(payload);
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export const update = async (id: string, payload: Partial<IGroup>): Promise<IGroup | null> => {
  try {
    const group = await Group.findByPk(id);
    if (!group) {
      return null;
    }
    return await group.update(payload);
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export const getById = async (id: string): Promise<IGroup | null> => {
  try {
    const group = await Group.findByPk(id);
    if (!group) {
      return null;
    }
    return group;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export const deleteById = async (id: string) => {
  try {
    return await Group.destroy({ where: { id } });
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export const getAll = async (): Promise<IGroup[]> => {
  try {
    return await Group.findAll();
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
