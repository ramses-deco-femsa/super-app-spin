import {MOVEMENTS_DATA} from '@sas/__mocks__';
import {femsaAPIMock} from '@sas/__mocks__/femsa-api-mock';

import {getMovements} from './get-movements';
import {MovementTypes} from '../movements-types';

describe('getMovements action', () => {
  let dispatch: jest.Mock;

  beforeEach(() => {
    dispatch = jest.fn();
  });

  it('should dispatch FETCH_MOVEMENTS_SUCCESS on endpoint success', async () => {
    femsaAPIMock.onGet('/history').reply(200, MOVEMENTS_DATA);

    await getMovements(dispatch);

    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: MovementTypes.FETCH_MOVEMENTS_REQUEST,
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: MovementTypes.FETCH_MOVEMENTS_SUCCESS,
      payload: {movements: MOVEMENTS_DATA},
    });
  });

  it('should dispatch FETCH_MOVEMENTS_FAILURE on endpoint fail', async () => {
    femsaAPIMock.onGet('/history').reply(404);

    await expect(getMovements(dispatch)).rejects.toThrowError();

    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: MovementTypes.FETCH_MOVEMENTS_REQUEST,
    });

    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: MovementTypes.FETCH_MOVEMENTS_FAILURE,
      payload: {error: 'Request failed with status code 404'},
    });
  });
});
