import * as service from '../../db/services/UserService';
import { ValidatedRequest } from 'express-joi-validation';
import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { CreateUserRequestSchema, UpdateUserRequestSchema } from '../middlewares/usersValidator';

export const create = async (req: ValidatedRequest<CreateUserRequestSchema>, res: Response) => {
  const user = await service.create(req.body);
  if (!user) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: 'User already exists' });
  }
  return res.status(StatusCodes.CREATED).json(user);
};

export const update = async (req: ValidatedRequest<UpdateUserRequestSchema>, res: Response) => {
  const { id } = req.params;
  const user = await service.update(id, req.body);
  if (!user) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: 'User not found' });
  }
  return res.status(StatusCodes.OK).json(user);
};

export const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await service.getById(id);
  if (user && !user.isDeleted) {
    return res.status(StatusCodes.OK).json(user);
  }
  return res.status(StatusCodes.BAD_REQUEST).json({ error: 'User not found' });
};

export const deleteById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await service.deleteById(id);
  if (!user) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: 'User not found' });
  }
  return res.status(StatusCodes.OK).json(user);
};

export const getAll = async (req: Request, res: Response) => {
  const { limit } = req.query;
  const users = await service.getAll(Number(limit));
  return res.status(StatusCodes.OK).json(users);
};
