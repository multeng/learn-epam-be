import { IUser } from '../../common/types/interfaces';
import { query } from '../../common/types/types';
import User from '../models/User';

export const create = async (payload: IUser): Promise<IUser> => {
  const user = await User.create(payload);

  return user;
};

export const update = async (id: string, payload: Partial<IUser>): Promise<IUser> => {
  const user = await User.findByPk(id);

  if (!user) {
    throw new Error('User not found');
  }

  const updatedUser = await user.update(payload);
  return updatedUser;
};

export const getById = async (id: string): Promise<IUser> => {
  const user = await User.findByPk(id);

  if (!user) {
    throw new Error('User not found');
  }

  return user;
};

export const deleteById = async (id: string): Promise<IUser> => {
  const user = await User.findByPk(id);

  if (!user) {
    throw new Error('User not found');
  }

  const deletedUser = await user.update({ isDeleted: true });

  return deletedUser;
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
