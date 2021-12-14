import { Sequelize } from 'sequelize';
import config from '../common/config';

const { DB_PASSWORD, DB_HOST, DB_NAME, DB_USERNAME, DB_PORT } = config;

const sequelizeConnection = new Sequelize(DB_NAME, DB_USERNAME , DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
  port: +DB_PORT
});

export default sequelizeConnection;
