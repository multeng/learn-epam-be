import { Router } from 'express';
import { userValidator, userSchema } from '../middlewares/usersValidator';

import UserController from '../controllers/user';
import authMiddleware from '../middlewares/authMiddleware';

const userRouter = Router();

userRouter
  .route('/')
  .get(UserController.getAll)
  .post(authMiddleware, userValidator.body(userSchema), UserController.create);

userRouter
  .route('/:id')
  .get(UserController.getById)
  .put(authMiddleware, userValidator.body(userSchema), UserController.update)
  .delete(authMiddleware, UserController.deleteById);

export default userRouter;
