import {USER_DATA} from '@sas/__mocks__';
import {femsaAPIMock} from '@sas/__mocks__/femsa-api-mock';

import {login} from './login';
import {UserTypes} from '../user-types';

describe('login action', () => {
  let dispatch: jest.Mock;

  beforeEach(() => {
    dispatch = jest.fn();
  });

  it('should dispatch user when user exists]', async () => {
    femsaAPIMock.onGet('/user').reply(200, [USER_DATA]);

    await login(dispatch)(USER_DATA.phone);

    expect(dispatch).lastCalledWith({
      type: UserTypes.SET_USER,
      payload: {user: USER_DATA},
    });
  });

  it('should throw error if endpoints dont response with the [user]', async () => {
    femsaAPIMock.onGet('/user').reply(200, [USER_DATA, USER_DATA]);

    await expect(login(dispatch)(USER_DATA.phone)).rejects.toThrowError(
      'Invalid Credentials',
    );
  });
});
