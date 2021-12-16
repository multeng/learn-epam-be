import { Router } from 'express';
import { groupValidator, groupSchema } from '../middlewares/groupValidator';
import * as GroupContnroller from '../controllers/group';


const groupRouter = Router();

groupRouter
  .route('/')
  .get(GroupContnroller.getAll)
  .post(groupValidator.body(groupSchema), GroupContnroller.create)

groupRouter
  .route('/:id')
  .get(GroupContnroller.getById)
  .put(groupValidator.body(groupSchema), GroupContnroller.update)
  .delete(GroupContnroller.deleteById)


export default groupRouter;