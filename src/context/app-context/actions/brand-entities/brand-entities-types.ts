import type {BrandEntity} from '@sas/types';

export enum BrandEntitiesTypes {
  FETCH_BRAND_ENTITITES_SUCCESS = 'FETCH_BRAND_ENTITITES_SUCCESS',
  FETCH_BRAND_ENTITITES_REQUEST = 'FETCH_BRAND_ENTITITES_REQUEST',
  FETCH_BRAND_ENTITITES_FAILURE = 'FETCH_BRAND_ENTITITES_FAILURE',
}

type FetchBrandEntitiesRequestAction = {
  type: BrandEntitiesTypes.FETCH_BRAND_ENTITITES_REQUEST;
};

type FetchBrandEntitiesSuccessAction = {
  type: BrandEntitiesTypes.FETCH_BRAND_ENTITITES_SUCCESS;
  payload: {brands: BrandEntity[]};
};

type FetchBrandEntitiesFailureAction = {
  type: BrandEntitiesTypes.FETCH_BRAND_ENTITITES_FAILURE;
  payload: {error: string};
};

export type BrandEntitiesActions =
  | FetchBrandEntitiesSuccessAction
  | FetchBrandEntitiesRequestAction
  | FetchBrandEntitiesFailureAction;
