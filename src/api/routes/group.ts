import { Router } from 'express';
import { groupValidator, groupSchema } from '../middlewares/groupValidator';
import GroupContnroller from '../controllers/group';
import authMiddleware from '../middlewares/authMiddleware';


const groupRouter = Router();

groupRouter
  .route('/')
  .get(GroupContnroller.getAll)
  .post(authMiddleware, groupValidator.body(groupSchema), GroupContnroller.create)

groupRouter
  .route('/:id')
  .get(GroupContnroller.getById)
  .put(authMiddleware, groupValidator.body(groupSchema), GroupContnroller.update)
  .delete(authMiddleware, GroupContnroller.deleteById)


export default groupRouter;