import {USER_DATA} from '@sas/__mocks__';

import {setUser} from './set-user';
import {ActionTypes, Types} from '../../app-types';

it('set-user-action', () => {
  const expectedAction: ActionTypes = {
    type: Types.SET_USER,
    payload: {user: USER_DATA},
  };

  const action = setUser(USER_DATA);

  expect(action).toEqual(expectedAction);
});
