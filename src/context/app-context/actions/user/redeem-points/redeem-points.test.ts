import {MOVEMENTS_DATA, NEW_MOVEMENT_DATA} from '@sas/__mocks__';
import {femsaAPIMock} from '@sas/__mocks__/femsa-api-mock';

import {redeemPoints} from './redeem-points';
import {ActionTypes, Types} from '../../app-types';

describe('redeemPoints action', () => {
  let dispatch: jest.Mock;

  beforeEach(() => {
    dispatch = jest.fn();
  });

  it('should redeemPoints on endpoint success', async () => {
    const movementResponse = {
      ...MOVEMENTS_DATA[0],
      ...NEW_MOVEMENT_DATA,
    };
    femsaAPIMock.onPost('/history').reply(200, movementResponse);

    const movement = await redeemPoints(dispatch)(NEW_MOVEMENT_DATA);

    const expectedAction: ActionTypes = {
      type: Types.REDEEM_POINTS,
      payload: {points: movementResponse.points},
    };
    expect(dispatch).toHaveBeenCalledWith(expectedAction);
    expect(movement).toEqual(movementResponse);
  });

  it('should not dispatch on endpoint fail', async () => {
    femsaAPIMock.onPost('/history').reply(404);

    await expect(
      redeemPoints(dispatch)(NEW_MOVEMENT_DATA),
    ).rejects.toThrowError();

    expect(dispatch).not.toHaveBeenCalled();
  });
});
