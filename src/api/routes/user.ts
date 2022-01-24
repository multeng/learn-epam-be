import { Router } from 'express';
import { userValidator, userSchema } from '../middlewares/usersValidator';

import UserController from '../controllers/user';

const userRouter = Router();

userRouter
  .route('/')
  .get(UserController.getAll)
  .post(userValidator.body(userSchema), UserController.create);

userRouter
  .route('/:id')
  .get(UserController.getById)
  .put(userValidator.body(userSchema), UserController.update)
  .delete(UserController.deleteById);

export default userRouter;
