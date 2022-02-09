import { Router } from 'express';
import AuthController from '../controllers/auth';

const authRouter = Router();

const authContoller = new AuthController();

authRouter
  .route('/')
  .post(authContoller.auth);


export default authRouter;
