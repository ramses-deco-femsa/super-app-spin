import {MOVEMENTS_DATA} from '@sas/__mocks__';

import {setMovements} from './set-movements';
import {ActionTypes, Types} from '../../app-types';

it('set-movements-action', () => {
  const expectedAction: ActionTypes = {
    type: Types.SET_MOVEMENTS,
    payload: {movements: MOVEMENTS_DATA},
  };

  const action = setMovements(MOVEMENTS_DATA);

  expect(action).toEqual(expectedAction);
});
