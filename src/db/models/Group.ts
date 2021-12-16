import { DataTypes, Model } from 'sequelize/dist';
import { IGroup } from '../../common/types/interfaces';
import { Permission } from '../../common/types/types';
import sequelizeConnection from '../config';

class Group extends Model<IGroup> implements IGroup {
  public id!: string;
  public name!: string;
  public permissions!: Permission[];

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Group.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: true,
    },
    permissions: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  },
  {
    sequelize: sequelizeConnection,
    paranoid: true,
  }
);

export default Group;
