import { v4 as uuidv4 } from 'uuid';
import { IUser, IGroup } from '../common/types/interfaces';

export const users: IUser[] = [
  {
    id: uuidv4(),
    login: 'Harry Potter',
    password: 'asdF1234!',
    age: 41,
    isDeleted: false,
  },
  {
    id: uuidv4(),
    login: 'Ron Weasley',
    password: 'asdF1234!',
    age: 41,
    isDeleted: false,
  },
  {
    id: uuidv4(),
    login: 'Hermione Granger',
    password: 'asdF1234!',
    age: 42,
    isDeleted: false,
  },
  {
    id: uuidv4(),
    login: 'Severus Snape',
    password: 'asdF1234!',
    age: 61,
    isDeleted: false,
  },
  {
    id: uuidv4(),
    login: 'Rubeus Hagrid',
    password: 'asdF1234!',
    age: 92,
    isDeleted: false,
  },
];

export const groups: IGroup[] = [
  {
    id: uuidv4(),
    name: 'admins',
    permissions: ['READ', 'WRITE', 'DELETE', 'SHARE', 'UPLOAD_FILES'],
  },
  {
    id: uuidv4(),
    name: 'users',
    permissions: ['READ', 'WRITE', 'SHARE', 'UPLOAD_FILES'],
  },
  {
    id: uuidv4(),
    name: 'guests',
    permissions: ['READ'],
  },
];
