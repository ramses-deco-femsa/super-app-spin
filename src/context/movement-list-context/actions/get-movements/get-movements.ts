import {Dispatch} from 'react';

import {AxiosError} from 'axios';

import {femsaAPI} from '@sas/api';
import type {Movement} from '@sas/types';

import {MovementListState} from '../../reducer/movement-list-context-reducer';
import {
  MovementListTypeActions,
  MovementListTypes,
} from '../movements-list-types';

export const getMovements =
  (dispatch: Dispatch<MovementListTypeActions>, state: MovementListState) =>
  async () => {
    if (state.page === 1) {
      dispatch({type: MovementListTypes.FETCH_MOVEMENTS_REQUEST});
    }

    try {
      const {data, headers} = await femsaAPI.request<Movement[]>({
        method: 'GET',
        url: '/history',
        params: {
          ...(state.filter !== 'all' && {operation: state.filter}),
          _sort: 'id,date',
          _order: 'desc',
          _limit: state.pageSize,
          _page: state.page,
        },
      });

      dispatch({
        type: MovementListTypes.FETCH_MOVEMENTS_SUCCESS,
        payload: {
          movements: data,
          totalCount: headers['x-total-count'],
        },
      });
    } catch (err) {
      if (err instanceof AxiosError || err instanceof Error) {
        dispatch({
          type: MovementListTypes.FETCH_MOVEMENTS_FAILURE,
          payload: {error: err.message},
        });
      }
      throw err;
    }
  };
