import { IUser } from '../../common/types/interfaces';
import { query } from '../../common/types/types';
import { User } from '../models';

export const create = async (payload: IUser): Promise<IUser> => {
  try {
    return await User.create(payload);
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export const update = async (id: string, payload: Partial<IUser>): Promise<IUser | null> => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return null;
    }
    return await user.update(payload);
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export const getById = async (id: string): Promise<IUser | null> => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return null;
    }
    return user;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export const deleteById = async (id: string): Promise<IUser | null> => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return null;
    }
    return await user.update({ isDeleted: true });
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export const getAll = async (limit?: number): Promise<IUser[]> => {
  try {
    const query: query = {
      where: {
        isDeleted: false,
      },
    };

    if (limit) {
      query.limit = limit;
    }
    return User.findAll(query);
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
