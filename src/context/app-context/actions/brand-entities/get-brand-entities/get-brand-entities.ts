import {Dispatch} from 'react';

import {AxiosError} from 'axios';

import {femsaAPI} from '@sas/api';
import type {BrandEntity} from '@sas/types';

import {
  BrandEntitiesActions,
  BrandEntitiesTypes,
} from '../brand-entities-types';

export const getBrandEntities =
  (dispatch: Dispatch<BrandEntitiesActions>) => async () => {
    dispatch({type: BrandEntitiesTypes.FETCH_BRAND_ENTITITES_REQUEST});

    try {
      const {data} = await femsaAPI.get<BrandEntity[]>('/entity');

      dispatch({
        type: BrandEntitiesTypes.FETCH_BRAND_ENTITITES_SUCCESS,
        payload: {brands: data},
      });
    } catch (err) {
      if (err instanceof AxiosError || err instanceof Error) {
        dispatch({
          type: BrandEntitiesTypes.FETCH_BRAND_ENTITITES_FAILURE,
          payload: {error: err.message},
        });
      }
      throw err;
    }
  };
