import * as userGroupServiceDal from '../dal/usergGroup';

export const addUsersToGroup = async (groupId: string, usersList: string[]) => {
  return userGroupServiceDal.addUsersToGroup(groupId, usersList);
};
