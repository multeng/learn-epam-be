import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ValidatedRequest } from 'express-joi-validation';
import * as userService from './users.service';
import { CreateUserRequstSchema, UpdateUserRequstSchema } from './users.validator';

export const getAllUsers = async (req: Request, res: Response) => {
  const { limit } = req.query;
  const users = await userService.getAllUsers();
  const filtredUsers = users.filter((user, idx) => {
    if (limit && idx < Number(limit)) return !user.isDeleted;
    if (!limit) return !user.isDeleted;
  });
  return res.status(StatusCodes.OK).json(filtredUsers);
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  if (user && !user.isDeleted) {
    return res.status(StatusCodes.OK).json(user);
  }
  return res.status(StatusCodes.BAD_REQUEST).json({ error: 'User not found' });
};

export const addUser = async (req: ValidatedRequest<CreateUserRequstSchema>, res: Response) => {
  const user = await userService.addUser(req.body);
  if (!user && userService.checkUserExist(user)) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: 'User already exists' });
  }
  return res.status(StatusCodes.CREATED).json(user);
};

export const updateUser = async (req: ValidatedRequest<UpdateUserRequstSchema>, res: Response) => {
  const { id } = req.params;
  const user = await userService.updateUser(id, req.body);
  if (!user) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: 'User not found' });
  }
  return res.status(StatusCodes.OK).json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await userService.deleteUser(id);
  if (!user) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: 'User not found' });
  }
  return res.status(StatusCodes.OK).json(user);
};
