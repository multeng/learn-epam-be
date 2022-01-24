import * as service from '../../db/services/UserGroupService';
import { ValidatedRequest } from 'express-joi-validation';
import { StatusCodes } from 'http-status-codes';
import { Response } from 'express';
import { UserGroupRequestSchema } from '../middlewares/userGroupValidator';
import { catchErrorDecorator } from '../middlewares/errorMiddlewareDecorator';

class UserGroupController {
  @catchErrorDecorator
  static async addUsersToGroup(req: ValidatedRequest<UserGroupRequestSchema>, res: Response) {
    const { groupId, usersList } = req.body;
    await service.addUsersToGroup(groupId, usersList);
    return res.status(StatusCodes.OK).json({ message: 'User added in group' });
  }
}

export default UserGroupController;
