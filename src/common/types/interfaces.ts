export interface IUser {
  id?: string;
  login: string;
  password: string,
  age: number,
  isDeleted: boolean,
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}


