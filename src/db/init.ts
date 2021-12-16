import { User, Group } from './models';
import { users, groups } from './seeders';

const dbInit = () => {
  User.sync().catch((error) => console.log(error));
  Group.sync().catch((error) => console.log(error));
  users.forEach((user) => User.create(user));
  groups.forEach((group) => Group.create(group));
};
export default dbInit;
