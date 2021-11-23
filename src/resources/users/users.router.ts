import { Router } from 'express';
import {userValidator, userSchema} from './users.validator';

import * as UsersController from './users.controller';

const router = Router();

router
  .route('/')
  .get(UsersController.getAllUsers)
  .post(userValidator.body(userSchema), UsersController.addUser);

router
  .route('/:id')
  .get(UsersController.getUserById)
  .put(userValidator.body(userSchema),UsersController.updateUser)
  .delete(UsersController.deleteUser);

export default router;