import express from 'express';
import usersRouter from './resources/users/users.router';


export const app = express();


app.use(express.json());
app.use('/users', usersRouter);


