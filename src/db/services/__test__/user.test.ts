import * as service from '../UserService';

describe('user tests', () => {
  test('get all users', async () => {
    const result = await service.getAll(0);
    expect(result).toHaveLength(7);
  });

  test('get user by id', async () => {
    const mockUser = {
      age: 41,
      deletedAt: null,
      id: 'fc440f77-34ed-4074-942e-1d5b348ee202',
      isDeleted: false,
      login: 'Harry Potter',
      password: 'asdF1234!',
    };
    const result = await service.getById(mockUser.id);
    expect(result).toMatchObject(mockUser);
  });

  test('delete by id', async () => {
    const mockUser = {
      age: 130,
      deletedAt: null,
      id: '8d95cdd0-1c04-4362-8005-c05b8910db06',
      isDeleted: false,
      login: 'Nagaina',
      password: 'asdF1234asdFA',
    };
    const result = await service.deleteById(mockUser.id);
    expect(result).not.toEqual(mockUser);
  });

  test('add user', async () => {
    const mockUser: any = {
      age: 77,
      deletedAt: null,
      isDeleted: false,
      login: 'TestUser',
      password: 'TestPassword1234',
    };

    const result = await service.create(mockUser);
    expect(result).toMatchObject(mockUser);
  });

  test('update user by id', async () => {
    const mockUser: any = {
      age: 92,
      deletedAt: null,
      id: '1dfa8320-3648-43a9-aa6d-f007fe62e1e0',
      isDeleted: false,
      login: 'Rubeus Hagrid',
      password: 'asdF1234!',
    };

    const updatedMockUser = {...mockUser, age: 99}

    const result = await service.update(mockUser.id, {age: updatedMockUser.age});

    expect(result).toMatchObject(updatedMockUser);
  });
});
