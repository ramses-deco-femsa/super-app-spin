import {USER_DATA} from '@sas/__mocks__';
import {femsaAPIMock} from '@sas/__mocks__/femsa-api-mock';

import {getUser} from './get-user';
import {UserTypes} from '../user-types';

describe('get-user-action', () => {
  let dispatch: jest.Mock;

  beforeEach(() => {
    dispatch = jest.fn();
  });

  it('should dispatch user when user exists', async () => {
    femsaAPIMock.onGet(`/user/${USER_DATA.id}`).reply(200, USER_DATA);

    await getUser(dispatch)(USER_DATA.id);

    expect(dispatch).lastCalledWith({
      type: UserTypes.SET_USER,
      payload: {user: USER_DATA},
    });
  });

  it('should throw error if endpoints dont response with the user', async () => {
    femsaAPIMock.onGet(`/user/${USER_DATA.id}`).reply(200, {});

    await expect(getUser(dispatch)(USER_DATA.id)).rejects.toThrowError(
      'Invalid User',
    );
  });
});
