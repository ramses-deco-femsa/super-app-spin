import type {Movement} from '@sas/types';

export enum MovementTypes {
  FETCH_MOVEMENTS_SUCCESS = 'FETCH_MOVEMENTS_SUCCESS',
  FETCH_MOVEMENTS_REQUEST = 'FETCH_MOVEMENTS_REQUEST',
  FETCH_MOVEMENTS_FAILURE = 'FETCH_MOVEMENTS_FAILURE',
}

type FetchMovementsRequestAction = {
  type: MovementTypes.FETCH_MOVEMENTS_REQUEST;
};

type FetchMovementsSuccessAction = {
  type: MovementTypes.FETCH_MOVEMENTS_SUCCESS;
  payload: {movements: Movement[]};
};

type FetchMovementsFailureAction = {
  type: MovementTypes.FETCH_MOVEMENTS_FAILURE;
  payload: {error: string};
};

export type MovementsActions =
  | FetchMovementsSuccessAction
  | FetchMovementsRequestAction
  | FetchMovementsFailureAction;
