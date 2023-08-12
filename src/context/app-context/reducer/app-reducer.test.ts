import {BRAND_ENTITIES_DATA, USER_DATA} from '@sas/__mocks__';

import {appReducer, appInitialState} from './app-reducer';
import {ActionTypes, Types, login, logout} from '../actions';

describe('app-reducer', () => {
  it('should return default state if action not match', () => {
    const action: ActionTypes = {
      types: 'not_match_action',
    } as unknown as ActionTypes;

    const newState = appReducer(appInitialState, action);

    expect(newState).toEqual(appInitialState);
  });

  describe('user', () => {
    it('sets user on login action', () => {
      const action = login(USER_DATA) as ActionTypes;
      const newState = appReducer(appInitialState, action);

      expect(newState.user).toEqual(USER_DATA);
    });

    it('remove user on logout action', () => {
      const action = logout() as ActionTypes;
      const state = {...appInitialState, user: USER_DATA};
      const newState = appReducer(state, action);

      expect(newState.user).toBeNull();
    });

    describe('redeemPoints', () => {
      it('should do nothing when user not exists', () => {
        const action = {
          type: Types.REDEEM_POINTS,
          payload: {points: 150},
        } as ActionTypes;
        const state = {...appInitialState, user: null};
        const newState = appReducer(state, action);

        expect(newState.user).toBeNull();
      });

      it('should update user points when user exists', () => {
        const action = {
          type: Types.REDEEM_POINTS,
          payload: {points: 150},
        } as ActionTypes;
        const state = {...appInitialState, user: USER_DATA};
        const newState = appReducer(state, action);

        expect(newState.user!.points).toBe(USER_DATA.points - 150);
      });
    });
  });

  describe('brandEntities', () => {
    it('sets loading true on FETCH_BRAND_ENTITITES_REQUEST', () => {
      const action: ActionTypes = {
        type: Types.FETCH_BRAND_ENTITITES_REQUEST,
      };

      const newState = appReducer(appInitialState, action);

      expect(newState.brandEntities.loading).toBeTruthy();
    });

    it('sets data value and loading as false on FETCH_BRAND_ENTITITES_SUCCESS', () => {
      const action: ActionTypes = {
        type: Types.FETCH_BRAND_ENTITITES_SUCCESS,
        payload: {brands: BRAND_ENTITIES_DATA},
      };

      const newState = appReducer(appInitialState, action);

      expect(newState.brandEntities.loading).toBeFalsy();
      expect(newState.brandEntities.data).toEqual(BRAND_ENTITIES_DATA);
    });

    it('sets error message and loading as false on FETCH_BRAND_ENTITITES_FAILURE', () => {
      const action: ActionTypes = {
        type: Types.FETCH_BRAND_ENTITITES_FAILURE,
        payload: {error: 'some error'},
      };

      const newState = appReducer(appInitialState, action);

      expect(newState.brandEntities.loading).toBeFalsy();
      expect(newState.brandEntities.error).toBe(action.payload.error);
    });
  });
});
