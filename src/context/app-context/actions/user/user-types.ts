import type {User} from '@sas/types';

export enum UserTypes {
  SET_USER = 'SET_USER',
  LOGOUT = 'LOGOUT',
  REDEEM_POINTS = 'REDEEM_POINTS',
}

type SetUserAction = {
  type: UserTypes.SET_USER;
  payload: {user: User};
};

type LogoutAction = {
  type: UserTypes.LOGOUT;
};

type RedeemPointsAction = {
  type: UserTypes.REDEEM_POINTS;
  payload: {points: number};
};

export type UserActions = SetUserAction | LogoutAction | RedeemPointsAction;
