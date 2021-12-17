import { Router } from 'express';
import { userGroupValidator, userGroupSchema } from '../middlewares/userGroupValidator';
import * as UserGroupController from '../controllers/userGroup';

const userGroupRouter = Router();

userGroupRouter
  .route('/')
  .post(userGroupValidator.body(userGroupSchema), UserGroupController.addUsersToGroup);

export default userGroupRouter
