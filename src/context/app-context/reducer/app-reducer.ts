import type {Movement} from '@sas/types';

import {ActionTypes, Types} from '../actions';

export type AppState = {
  movements: Movement[];
};

export const appInitialState: AppState = {
  movements: [],
};

export const appReducer = (
  state: AppState = appInitialState,
  action: ActionTypes,
): AppState => {
  switch (action.type) {
    case Types.SET_MOVEMENTS:
      return {
        ...state,
        movements: action.payload.movements,
      };
    default:
      return state;
  }
};
