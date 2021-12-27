import { DataTypes, Model } from 'sequelize';
import sequelizeConnection from '../config';
import { IUserGroup } from '../../common/types/interfaces';
import { Group, User } from './index';

class UserGroup extends Model<IUserGroup> implements IUserGroup {
  public id!: number;
  public groupId!: string;
  public userId!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Group.belongsToMany(User, { through: 'UserGroup' });
User.belongsToMany(Group, { through: 'UserGroup' });

UserGroup.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    groupId: {
      type: DataTypes.UUID,
      references: {
        model: 'Groups',
        key: 'id',
      },
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  },
  { sequelize: sequelizeConnection }
);

export default UserGroup;
