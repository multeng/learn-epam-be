import sequelizeConnection from '../config';
import { UserGroup } from '../models';

export const addUsersToGroup = async (groupId: string, usersList: string[]) => {
  const transaction = await sequelizeConnection.transaction();
  for (const userId of usersList) {
    await UserGroup.create(
      {
        groupId,
        userId,
      },
      { transaction }
    );
  }
  await transaction.commit();
};
