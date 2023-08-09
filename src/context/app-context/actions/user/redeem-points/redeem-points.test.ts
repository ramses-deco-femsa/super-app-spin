import {redeemPoints} from './redeem-points';
import {ActionTypes, Types} from '../../app-types';

it('update-balance-action', () => {
  const expectedAction: ActionTypes = {
    type: Types.REDEEM_POINTS,
    payload: {points: 100},
  };

  const action = redeemPoints(100);

  expect(action).toEqual(expectedAction);
});
