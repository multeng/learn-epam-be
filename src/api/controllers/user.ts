import * as service from '../../db/services/UserService';
import { ValidatedRequest } from 'express-joi-validation';
import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { CreateUserRequestSchema, UpdateUserRequestSchema } from '../middlewares/usersValidator';
import { catchErrorDecorator } from '../middlewares/errorMiddlewareDecorator';

class UserController {
  @catchErrorDecorator
  static async create(req: ValidatedRequest<CreateUserRequestSchema>, res: Response) {
    const user = await service.create(req.body);
    if (!user) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: 'User already exists' });
    }
    return res.status(StatusCodes.CREATED).json(user);
  }

  @catchErrorDecorator
  static async update(req: ValidatedRequest<UpdateUserRequestSchema>, res: Response) {
    const { id } = req.params;
    const user = await service.update(id, req.body);
    if (!user) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: 'User not found' });
    }
    return res.status(StatusCodes.OK).json(user);
  }

  @catchErrorDecorator
  static async getById(req: Request, res: Response) {
    const { id } = req.params;
    const user = await service.getById(id);
    if (user && !user.isDeleted) {
      return res.status(StatusCodes.OK).json(user);
    }
    return res.status(StatusCodes.BAD_REQUEST).json({ error: 'User not found' });
  }

  @catchErrorDecorator
  static async deleteById(req: Request, res: Response) {
    const { id } = req.params;
    const user = await service.deleteById(id);
    if (!user) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: 'User not found' });
    }
    return res.status(StatusCodes.OK).json(user);
  }

  @catchErrorDecorator
  static async getAll(req: Request, res: Response) {
    const { limit } = req.query;
    const users = await service.getAll(Number(limit));
    return res.status(StatusCodes.OK).json(users);
  }
}

export default UserController;
