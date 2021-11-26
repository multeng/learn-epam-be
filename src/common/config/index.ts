import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../../.env'),
});

export const { PORT, DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;
