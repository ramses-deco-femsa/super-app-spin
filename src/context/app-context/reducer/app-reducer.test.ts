import {MOVEMENTS_DATA} from '@sas/__mocks__';
import {formatMovementsByDate} from '@sas/utils';

import {appReducer, appInitialState} from './app-reducer';
import {ActionTypes, Types} from '../actions';

describe('app-reducer', () => {
  describe('movements', () => {
    it('sets loading true on FETCH_MOVEMENTS_REQUEST', () => {
      const action: ActionTypes = {
        type: Types.FETCH_MOVEMENTS_REQUEST,
      };

      const newState = appReducer(appInitialState, action);

      expect(newState.movements.loading).toBeTruthy();
    });

    it('sets data value and loading as false on FETCH_MOVEMENTS_SUCCESS', () => {
      const action: ActionTypes = {
        type: Types.FETCH_MOVEMENTS_SUCCESS,
        payload: {movements: MOVEMENTS_DATA},
      };

      const newState = appReducer(appInitialState, action);

      expect(newState.movements.loading).toBeFalsy();
      expect(newState.movements.data).toEqual(MOVEMENTS_DATA);
      expect(newState.movements.dataFormmated).toEqual(
        formatMovementsByDate(MOVEMENTS_DATA),
      );
    });

    it('sets error message and loading as false on FETCH_MOVEMENTS_FAILURE', () => {
      const action: ActionTypes = {
        type: Types.FETCH_MOVEMENTS_FAILURE,
        payload: {error: 'some error'},
      };

      const newState = appReducer(appInitialState, action);

      expect(newState.movements.loading).toBeFalsy();
      expect(newState.movements.error).toBe(action.payload.error);
    });
  });
});
