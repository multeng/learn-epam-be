import { IUser } from './users.interface';
import { v4 as uuidv4 } from 'uuid';

const users: IUser[] = [
  {
    id: '67360baf-ba8f-4811-9ac7-0d55e095a2ef',
    login: 'multeng',
    password: 'lolKekcheburek',
    age: 34,
    isDeleted: false,
  },
  {
    id: '6ad89d03-5fa4-4c8b-88b2-bacaf645a7a4',
    login: 'some_test',
    password: 'lolKekcheburek',
    age: 17,
    isDeleted: false,
  },
];

export const getAllUsers = async (): Promise<IUser[]> => {
  return users;
};

export const getUserById = async (id: string): Promise<IUser | null> => {
  const idx = users.findIndex((user) => user.id === id);
  if (idx === -1) return null;
  return users[idx];
};

export const addUser = async (user: IUser): Promise<IUser> => {
  const id = uuidv4();
  user.id = id;
  users.push(user);
  return user;
};

export const updateUser = async (id: string, payload: IUser): Promise<IUser | null> => {
  const idx = users.findIndex((user) => user.id === id);
  if (idx === -1) return null;
  users[idx] = {...users[idx], ...payload}
  return users[idx];
};

export const deleteUser = async (id: string): Promise<IUser | null> => {
  const idx = users.findIndex((user) => user.id === id);
  if (idx === -1) return null;
  users[idx] = {...users[idx], isDeleted: true}
  return users[idx];
};

export const checkUserExist = (newUser: IUser) => Boolean(users.find((user) => newUser.login === user.login));

