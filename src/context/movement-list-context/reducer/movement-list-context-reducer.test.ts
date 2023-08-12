import {MOVEMENTS_DATA} from '@sas/__mocks__';
import {formatMovementsByDate} from '@sas/utils';

import {
  movementListReducer,
  initialState,
} from './movement-list-context-reducer';
import {MovementListTypeActions, MovementListTypes} from '../actions';

describe('movement-list-reducer', () => {
  let action: MovementListTypeActions;

  it('should return default state if action not match', () => {
    action = {
      types: 'not_match_action',
    } as unknown as MovementListTypeActions;

    const newState = movementListReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });

  it('sets loading true on FETCH_MOVEMENTS_REQUEST', () => {
    action = {
      type: MovementListTypes.FETCH_MOVEMENTS_REQUEST,
    };
    const newState = movementListReducer(initialState, action);
    expect(newState.loading).toBeTruthy();
  });

  it('sets error message and loading as false on FETCH_MOVEMENTS_FAILURE', () => {
    action = {
      type: MovementListTypes.FETCH_MOVEMENTS_FAILURE,
      payload: {error: 'some error'},
    };

    const newState = movementListReducer(initialState, action);

    expect(newState.loading).toBeFalsy();
    expect(newState.error).toBe(action.payload.error);
  });

  it('sets data empty and refresh true on PULL_TO_REFRESH', () => {
    action = {
      type: MovementListTypes.PULL_TO_REFRESH,
    };

    const newState = movementListReducer(initialState, action);

    expect(newState.data).toHaveLength(0);
    expect(newState.dataFormmated).toHaveLength(0);
    expect(newState.refresh).toBeTruthy();
  });

  it('sets fetch as true an page as page + 1on LOAD_MORE_DATA', () => {
    action = {
      type: MovementListTypes.LOAD_MORE_DATA,
    };

    const newState = movementListReducer(initialState, action);

    expect(newState.fetching).toBeTruthy();
    expect(newState.page).toBe(initialState.page + 1);
  });

  describe('on FETCH_MOVEMENTS_SUCCESS', () => {
    it('sets loading, fetching and refresh as false always', () => {
      action = {
        type: MovementListTypes.FETCH_MOVEMENTS_SUCCESS,
        payload: {movements: [], totalCount: 0},
      };

      const newState = movementListReducer(
        {
          ...initialState,
          loading: true,
          fetching: true,
          refresh: true,
        },
        action,
      );

      expect(newState.loading).toBeFalsy();
      expect(newState.fetching).toBeFalsy();
      expect(newState.refresh).toBeFalsy();
    });

    it('sets hasMoreData as falsy if totalCount is equals to data.lenght', () => {
      action = {
        type: MovementListTypes.FETCH_MOVEMENTS_SUCCESS,
        payload: {movements: MOVEMENTS_DATA, totalCount: MOVEMENTS_DATA.length},
      };

      const newState = movementListReducer(
        {
          ...initialState,
          loading: true,
          fetching: true,
          refresh: true,
        },
        action,
      );

      expect(newState.hasMoreData).toBeFalsy();
      expect(newState.totalCount).toBe(MOVEMENTS_DATA.length);
      expect(newState.data).toEqual(MOVEMENTS_DATA);
      expect(newState.dataFormmated).toEqual(
        formatMovementsByDate(MOVEMENTS_DATA),
      );
    });
  });
});
