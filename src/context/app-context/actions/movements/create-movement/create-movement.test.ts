import {NEW_MOVEMENT_DATA} from '@sas/__mocks__';
import {femsaAPIMock} from '@sas/__mocks__/femsa-api-mock';

import {createMovement} from './create-movement';
import {redeemPoints} from '../../user';

describe('createMovement action', () => {
  let dispatch: jest.Mock;

  beforeEach(() => {
    dispatch = jest.fn();
  });

  it('should redeemPoints on endpoint success', async () => {
    femsaAPIMock.onPost('/history').reply(200, NEW_MOVEMENT_DATA);

    await createMovement(dispatch)(NEW_MOVEMENT_DATA);

    expect(dispatch).toHaveBeenCalledWith(
      redeemPoints(NEW_MOVEMENT_DATA.points),
    );
  });

  it('should not dispatch on endpoint fail', async () => {
    femsaAPIMock.onPost('/history').reply(404);

    await expect(
      createMovement(dispatch)(NEW_MOVEMENT_DATA),
    ).rejects.toThrowError();

    expect(dispatch).not.toHaveBeenCalled();
  });
});
