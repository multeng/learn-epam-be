import * as service from '../../db/services/GroupService';
import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';

export const create = async (req: Request, res: Response) => {
  const group = service.create(req.body);
  if (!group) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Group already exists' });
  }
  return res.status(StatusCodes.CREATED).json(group);
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const group = service.update(id, req.body);
  if (!group) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Group not found' });
  }
  return res.status(StatusCodes.OK).json(group);
};

export const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const group = service.getById(id);
  if (!group) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Group not found' });
  }
  return res.status(StatusCodes.OK).json(group);
};

export const deleteById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const success = service.deleteById(id);
  if (!success) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Group not found' });
  }
  return res.status(StatusCodes.OK).json({ message: 'Group was deleted' });
};

export const getAll = async (req: Request, res: Response) => {
  const groups = service.getAll();
  return res.status(StatusCodes.OK).json(groups);
};
