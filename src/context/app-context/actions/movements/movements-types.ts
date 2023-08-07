import type {Movement} from '@sas/types';

export enum MovementTypes {
  SET_MOVEMENTS = 'SET_MOVEMENTS',
}

type SetMovementsAction = {
  type: MovementTypes.SET_MOVEMENTS;
  payload: {movements: Movement[]};
};

export type MovementsActions = SetMovementsAction;
