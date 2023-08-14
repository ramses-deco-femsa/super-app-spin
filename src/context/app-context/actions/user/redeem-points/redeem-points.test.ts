import {MOVEMENTS_DATA, NEW_MOVEMENT_DATA, USER_DATA} from '@sas/__mocks__';
import {femsaAPIMock} from '@sas/__mocks__/femsa-api-mock';
import {AppState, appInitialState} from '@sas/context/app-context/reducer';

import {redeemPoints} from './redeem-points';
import {ActionTypes, Types} from '../../app-types';

describe('redeemPoints action', () => {
  let dispatch: jest.Mock;
  let state: AppState;

  beforeEach(() => {
    dispatch = jest.fn();
    state = {
      ...appInitialState,
      user: USER_DATA,
    };
  });

  it('should set updated user on endpoint success', async () => {
    const movementResponse = {
      ...MOVEMENTS_DATA[0],
      ...NEW_MOVEMENT_DATA,
    };
    femsaAPIMock.onPost('/history').reply(200, movementResponse);
    femsaAPIMock.onPatch(`/user/${USER_DATA.id}`).reply(200, USER_DATA);

    const movement = await redeemPoints(dispatch, state)(NEW_MOVEMENT_DATA);

    const expectedAction: ActionTypes = {
      type: Types.SET_USER,
      payload: {user: USER_DATA},
    };
    expect(dispatch).toHaveBeenCalledWith(expectedAction);
    expect(movement).toEqual(movementResponse);
  });

  it('should not dispatch on endpoint fail', async () => {
    femsaAPIMock.onPost('/history').reply(404);

    await expect(
      redeemPoints(dispatch, state)(NEW_MOVEMENT_DATA),
    ).rejects.toThrowError();

    expect(dispatch).not.toHaveBeenCalled();
  });
});
