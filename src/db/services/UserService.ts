import * as userDal from '../dal/user';
import { IUser } from '../../common/types/interfaces';


export const create = async (payload: IUser): Promise<IUser> => {
  return userDal.create(payload)
}

export const update = async (id: string, payload: Partial<IUser>): Promise<IUser> => {
  return userDal.update(id, payload)
}

export const getById = (id: string): Promise<IUser> => {
  return userDal.getById(id)
}

export const deleteById = (id: string): Promise<IUser> => {
  return userDal.deleteById(id)
}

export const getAll = (limit?: number): Promise<IUser[]> => {
  return userDal.getAll(limit);
}