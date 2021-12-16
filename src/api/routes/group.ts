import { Router } from 'express';
import * as GroupContnroller from '../controllers/group';


const groupRouter = Router();

groupRouter
  .route('/')
  .get(GroupContnroller.getAll)
  .post(GroupContnroller.create)

groupRouter
  .route('/:id')
  .get(GroupContnroller.getById)
  .put(GroupContnroller.update)
  .delete(GroupContnroller.deleteById)


export default groupRouter;