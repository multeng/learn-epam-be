import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import config from '../../common/config';
import jwt from 'jsonwebtoken';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (token) {
    jwt.verify(token, config.SECRET_KEY, (error: any) => {
      if (error) {
        return res.status(StatusCodes.FORBIDDEN).json({ message: 'auth failed' });
      } else {
        next();
      }
    });
  } else {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'check login or pswd' });
  }
};

export default authMiddleware;
