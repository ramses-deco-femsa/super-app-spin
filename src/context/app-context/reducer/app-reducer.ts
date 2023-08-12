import {USER_DATA} from '@sas/__mocks__';
import type {BrandEntity, User} from '@sas/types';

import {ActionTypes, Types} from '../actions';

export type AppState = {
  user: User | null;
  brandEntities: {
    data: BrandEntity[];
    loading: boolean;
    error?: string;
  };
};

export const appInitialState: AppState = {
  // NOTE: use mock user until login screen
  user: USER_DATA,
  brandEntities: {
    data: [],
    loading: false,
    error: undefined,
  },
};

export const appReducer = (
  state: AppState = appInitialState,
  action: ActionTypes,
): AppState => {
  switch (action.type) {
    case Types.LOGIN:
      return {
        ...state,
        user: action.payload.user,
      };
    case Types.LOGOUT:
      return {
        ...appInitialState,
        user: null,
      };
    case Types.REDEEM_POINTS:
      if (!state.user) {
        return state;
      }

      return {
        ...state,
        user: {
          ...state.user,
          points: state.user.points - action.payload.points,
        },
      };
    case Types.FETCH_BRAND_ENTITITES_REQUEST:
      return {
        ...state,
        brandEntities: {
          ...state.brandEntities,
          loading: true,
          error: undefined,
        },
      };
    case Types.FETCH_BRAND_ENTITITES_SUCCESS:
      return {
        ...state,
        brandEntities: {
          data: action.payload.brands,
          loading: false,
          error: undefined,
        },
      };
    case Types.FETCH_BRAND_ENTITITES_FAILURE:
      return {
        ...state,
        brandEntities: {
          ...state.brandEntities,
          loading: false,
          error: action.payload.error,
        },
      };
    default:
      return state;
  }
};
