import express, { Application } from 'express';
import cors from 'cors';
import { userRouter, groupRouter, userGroupRouter, authRouter } from './api/routes/index';
import config from './common/config';
import dbInit from './db/init';

dbInit();

export const get = () => {
  const app: Application = express();

  app.use(express.json());
  app.use(cors());
  app.use('/login', authRouter);
  app.use('/users', userRouter);
  app.use('/groups', groupRouter);
  app.use('/usergroups', userGroupRouter);

  return app;
};

export const start = () => {
  const app = get();
  try {
    app.listen(config.PORT, () => {
      console.log('\x1b[31m', `App is running now, http://localhost:${config.PORT}`, '\x1b[0m');
    });
  } catch (error: any) {
    console.log(`Error occurred: ${error.message}`);
  }
};

start();
