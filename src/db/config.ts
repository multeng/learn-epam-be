import { Sequelize } from 'sequelize';

import { DB_PASSWORD, DB_HOST } from '../common/config';

const sequelizeConnection = new Sequelize('Users', 'multeng', DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
});

export default sequelizeConnection;
