import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../../.env'),
});
const config = {
  PORT: process.env.PORT ?? 3000,
  DB_HOST: process.env.DB_HOST ?? 'localhost' ,
  DB_NAME: process.env.DB_NAME ?? 'Users',
  DB_USERNAME: process.env.DB_USERNAME ?? 'multeng',
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_PORT: process.env.DB_PORT ?? 5432
};

export default config
