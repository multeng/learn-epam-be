import { Router } from 'express';
import { userGroupValidator, userGroupSchema } from '../middlewares/userGroupValidator';
import UserGroupController from '../controllers/userGroup';
import authMiddleware from '../middlewares/authMiddleware';

const userGroupRouter = Router();

userGroupRouter
  .route('/')
  .post(authMiddleware, userGroupValidator.body(userGroupSchema), UserGroupController.addUsersToGroup);

export default userGroupRouter
