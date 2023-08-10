import {Dispatch} from 'react';

import {AxiosError} from 'axios';

import {femsaAPI} from '@sas/api';
import type {Movement} from '@sas/types';

import {MovementsActions, MovementTypes} from '../movements-types';

export const getMovements =
  (dispatch: Dispatch<MovementsActions>) => async () => {
    dispatch({type: MovementTypes.FETCH_MOVEMENTS_REQUEST});

    try {
      const {data} = await femsaAPI.request<Movement[]>({
        method: 'GET',
        url: '/history',
        params: {
          _sort: 'id,date',
          _order: 'desc',
        },
      });

      dispatch({
        type: MovementTypes.FETCH_MOVEMENTS_SUCCESS,
        payload: {movements: data},
      });
    } catch (err) {
      if (err instanceof AxiosError || err instanceof Error) {
        dispatch({
          type: MovementTypes.FETCH_MOVEMENTS_FAILURE,
          payload: {error: err.message},
        });
      }
      throw err;
    }
  };
