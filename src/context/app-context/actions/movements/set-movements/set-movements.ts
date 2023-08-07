import type {Movement} from '@sas/types';

import {MovementTypes} from '../movements-types';

export const setMovements = (movements: Movement[]) => ({
  type: MovementTypes.SET_MOVEMENTS,
  payload: {movements},
});
