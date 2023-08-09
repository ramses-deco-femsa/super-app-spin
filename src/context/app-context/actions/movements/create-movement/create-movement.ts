import {Dispatch} from 'react';

import {femsaAPI} from '@sas/api';
import type {Movement} from '@sas/types';

import type {ActionTypes} from '../../app-types';
import {redeemPoints} from '../../user';

export const createMovement =
  (dispatch: Dispatch<ActionTypes>) =>
  async (newMovement: Omit<Movement, 'id'>) => {
    try {
      const {data} = await femsaAPI.post<Movement>('/history', {
        data: newMovement,
      });

      dispatch(redeemPoints(data.points) as ActionTypes);
    } catch (err) {
      throw err;
    }
  };
