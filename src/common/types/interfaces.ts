import { Permission } from './types';

export interface IUser {
  id?: string;
  login: string;
  password: string;
  age: number;
  isDeleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface IGroup {
  id?: string;
  name: string;
  permissions: Permission[];
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
