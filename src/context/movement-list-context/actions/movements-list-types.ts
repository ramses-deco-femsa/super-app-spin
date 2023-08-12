import type {Movement} from '@sas/types';

export enum MovementListTypes {
  FETCH_MOVEMENTS_REQUEST = 'FETCH_MOVEMENTS_REQUEST',
  FETCH_MOVEMENTS_SUCCESS = 'FETCH_MOVEMENTS_SUCCESS',
  FETCH_MOVEMENTS_FAILURE = 'FETCH_MOVEMENTS_FAILURE',
  PULL_TO_REFRESH = 'PULL_TO_REFRESH',
  LOAD_MORE_DATA = 'LOAD_MORE_DATA',
}

type FetchMovementListRequestAction = {
  type: MovementListTypes.FETCH_MOVEMENTS_REQUEST;
};

type FetchMovementListSuccessAction = {
  type: MovementListTypes.FETCH_MOVEMENTS_SUCCESS;
  payload: {movements: Movement[]; totalCount: number};
};

type FetchMovementListFailureAction = {
  type: MovementListTypes.FETCH_MOVEMENTS_FAILURE;
  payload: {error: string};
};

type PullToRefreshAction = {
  type: MovementListTypes.PULL_TO_REFRESH;
};

type LoadMoreDataAction = {
  type: MovementListTypes.LOAD_MORE_DATA;
};

export type MovementListTypeActions =
  | FetchMovementListRequestAction
  | FetchMovementListSuccessAction
  | FetchMovementListFailureAction
  | PullToRefreshAction
  | LoadMoreDataAction;
