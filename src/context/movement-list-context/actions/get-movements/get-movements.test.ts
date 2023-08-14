import {MOVEMENTS_DATA} from '@sas/__mocks__';
import {femsaAPIMock} from '@sas/__mocks__/femsa-api-mock';

import {getMovements} from './get-movements';
import {
  MovementListState,
  initialState,
} from '../../reducer/movement-list-context-reducer';
import {MovementListTypes} from '../movements-list-types';

describe('getMovements action', () => {
  let dispatch: jest.Mock;
  let state: MovementListState;

  beforeEach(() => {
    dispatch = jest.fn();
    state = initialState;
  });

  it('should dispatch FETCH_MOVEMENTS_REQUEST only when page is 1', async () => {
    femsaAPIMock.onGet('/history').reply(200, MOVEMENTS_DATA);

    await getMovements(dispatch, state)();

    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: MovementListTypes.FETCH_MOVEMENTS_REQUEST,
    });
  });

  it('should dispatch FETCH_MOVEMENTS_SUCCESS on endpoint success', async () => {
    femsaAPIMock.onGet('/history').reply(200, MOVEMENTS_DATA);

    await getMovements(dispatch, state)();

    expect(dispatch).lastCalledWith({
      type: MovementListTypes.FETCH_MOVEMENTS_SUCCESS,
      payload: {movements: MOVEMENTS_DATA},
    });
  });

  it('should dispatch FETCH_MOVEMENTS_FAILURE on endpoint fail', async () => {
    femsaAPIMock.onGet('/history').reply(404);

    await expect(getMovements(dispatch, state)()).rejects.toThrowError();

    expect(dispatch).lastCalledWith({
      type: MovementListTypes.FETCH_MOVEMENTS_FAILURE,
      payload: {error: 'Request failed with status code 404'},
    });
  });
});
