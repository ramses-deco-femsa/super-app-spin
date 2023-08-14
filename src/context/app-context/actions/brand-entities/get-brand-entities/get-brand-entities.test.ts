import {BRAND_ENTITIES_DATA} from '@sas/__mocks__';
import {femsaAPIMock} from '@sas/__mocks__/femsa-api-mock';

import {getBrandEntities} from './get-brand-entities';
import {BrandEntitiesTypes} from '../brand-entities-types';

describe('getBrandEntities action', () => {
  let dispatch: jest.Mock;

  beforeEach(() => {
    dispatch = jest.fn();
  });

  it('should dispatch FETCH_BRAND_ENTITITES_SUCCESS on endpoint success', async () => {
    femsaAPIMock.onGet('/entity').reply(200, BRAND_ENTITIES_DATA);

    await getBrandEntities(dispatch)();

    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: BrandEntitiesTypes.FETCH_BRAND_ENTITITES_REQUEST,
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: BrandEntitiesTypes.FETCH_BRAND_ENTITITES_SUCCESS,
      payload: {brands: BRAND_ENTITIES_DATA},
    });
  });

  it('should dispatch FETCH_BRAND_ENTITITES_FAILURE on endpoint fail', async () => {
    femsaAPIMock.onGet('/entity').reply(404);

    await expect(getBrandEntities(dispatch)()).rejects.toThrowError();

    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: BrandEntitiesTypes.FETCH_BRAND_ENTITITES_REQUEST,
    });

    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: BrandEntitiesTypes.FETCH_BRAND_ENTITITES_FAILURE,
      payload: {error: 'Request failed with status code 404'},
    });
  });
});
