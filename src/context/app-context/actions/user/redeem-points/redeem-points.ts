import {UserTypes} from '../user-types';

export const redeemPoints = (points: number) => ({
  type: UserTypes.REDEEM_POINTS,
  payload: {points},
});
