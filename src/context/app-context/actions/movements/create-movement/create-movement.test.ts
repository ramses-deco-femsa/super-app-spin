import {MOVEMENTS_DATA, NEW_MOVEMENT_DATA} from '@sas/__mocks__';
import {femsaAPIMock} from '@sas/__mocks__/femsa-api-mock';

import {createMovement} from './create-movement';
import {redeemPoints} from '../../user';

describe('createMovement action', () => {
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

    const movement = await createMovement(dispatch)(NEW_MOVEMENT_DATA);

    expect(dispatch).toHaveBeenCalledWith(
      redeemPoints(movementResponse.points),
    );
    expect(movement).toEqual(movementResponse);
  });

  it('should not dispatch on endpoint fail', async () => {
    femsaAPIMock.onPost('/history').reply(404);

    await expect(
      createMovement(dispatch)(NEW_MOVEMENT_DATA),
    ).rejects.toThrowError();

    expect(dispatch).not.toHaveBeenCalled();
  });
});
