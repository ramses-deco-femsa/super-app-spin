import type {BrandEntity, Movement, MovementsFormatted} from '@sas/types';
import {formatMovementsByDate} from '@sas/utils';

import {ActionTypes, Types} from '../actions';

export type AppState = {
  movements: {
    data: Movement[];
    dataFormmated: MovementsFormatted[];
    loading: boolean;
    error?: string;
  };
  brandEntities: {
    data: BrandEntity[];
    loading: boolean;
    error?: string;
  };
};

export const appInitialState: AppState = {
  movements: {
    dataFormmated: [],
    data: [],
    loading: false,
    error: undefined,
  },
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
    case Types.FETCH_MOVEMENTS_REQUEST:
      return {
        ...state,
        movements: {
          ...state.movements,
          loading: true,
          error: undefined,
        },
      };
    case Types.FETCH_MOVEMENTS_SUCCESS:
      return {
        ...state,
        movements: {
          data: action.payload.movements,
          dataFormmated: formatMovementsByDate(action.payload.movements),
          loading: false,
          error: undefined,
        },
      };
    case Types.FETCH_MOVEMENTS_FAILURE:
      return {
        ...state,
        movements: {
          ...state.movements,
          loading: false,
          error: action.payload.error,
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
