import express, { Application } from 'express';
import { userRouter } from './api/routes/index';
import { PORT } from './common/config';
import dbInit from './db/init';

dbInit();

export const get = () => {
  const app: Application = express();

  app.use(express.json());
  app.use('/users', userRouter);

  return app;
};

export const start = () => {
  const app = get();
  try {
    app.listen(PORT, () => {
      console.log('\x1b[31m', `App is running now, http://localhost:${PORT}`, '\x1b[0m');
    });
  } catch (error: any) {
    console.log(`Error occurred: ${error.message}`);
  }
};

start();
