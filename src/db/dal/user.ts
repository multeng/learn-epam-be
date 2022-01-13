import { IUser } from '../../common/types/interfaces';
import { query } from '../../common/types/types';
import { User } from '../models';

export const create = async (payload: IUser): Promise<IUser> => {
  return await User.create(payload);
};

export const update = async (id: string, payload: Partial<IUser>): Promise<IUser | null> => {
  const user = await User.findByPk(id);
  if (!user) {
    return null;
  }
  return await user.update(payload);
};

export const getById = async (id: string): Promise<IUser | null> => {
  const user = await User.findByPk(id);
  if (!user) {
    return null;
  }
  return user;
};

export const deleteById = async (id: string): Promise<IUser | null> => {
  const user = await User.findByPk(id);
  if (!user) {
    return null;
  }
  return await user.update({ isDeleted: true });
};

export const getAll = async (limit?: number): Promise<IUser[]> => {
  const query: query = {
    where: {
      isDeleted: false,
    },
  };

  if (limit) {
    query.limit = limit;
  }
  return User.findAll(query);
};
