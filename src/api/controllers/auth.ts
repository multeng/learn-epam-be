import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';
import User from '../../db/models/User';
import config from '../../common/config';
import { catchErrorDecorator } from '../middlewares/errorMiddlewareDecorator';

class AuthController {
  @catchErrorDecorator
  async auth(req: Request, res: Response) {
    const { login, password } = req.body;
    const user = await User.findOne({
      where: {
        login,
        password,
      },
    });
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'user not found' });
    }
    const token = jwt.sign({ id: user.id, login: user.login }, config.SECRET_KEY, { expiresIn: '1h' });
    return res.status(StatusCodes.OK).json({ token });
  }
}

export default AuthController;
