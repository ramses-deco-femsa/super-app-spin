import {USER_DATA} from '@sas/__mocks__';

import {login} from './login';
import {ActionTypes, Types} from '../../app-types';

it('login-action', () => {
  const expectedAction: ActionTypes = {
    type: Types.LOGIN,
    payload: {user: USER_DATA},
  };

  const action = login(USER_DATA);

  expect(action).toEqual(expectedAction);
});
