import type {Movement, MovementsFormatted} from '@sas/types';
import {formatMovementsByDate} from '@sas/utils';

import {ActionTypes, Types} from '../actions';

export type AppState = {
  movements: {
    data: Movement[];
    dataFormmated: MovementsFormatted[];
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
    default:
      return state;
  }
};
