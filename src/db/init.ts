import User from './models/User';
import { users } from './seeders';

const dbInit = () => {
  User.sync().catch((error) => console.log(error));
  // users.forEach(user => User.create(user));
};
export default dbInit;
