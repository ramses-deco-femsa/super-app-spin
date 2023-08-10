import {logout} from './logout';
import {ActionTypes, Types} from '../../app-types';

it('logout-action', () => {
  const expectedAction: ActionTypes = {
    type: Types.LOGOUT,
  };

  const action = logout();

  expect(action).toEqual(expectedAction);
});
