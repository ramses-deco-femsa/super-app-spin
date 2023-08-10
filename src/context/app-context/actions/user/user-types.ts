import type {User} from '@sas/types';

export enum UserTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  REDEEM_POINTS = 'REDEEM_POINTS',
}

type LoginAction = {
  type: UserTypes.LOGIN;
  payload: {user: User};
};

type LogoutAction = {
  type: UserTypes.LOGOUT;
};

type RedeemPointsAction = {
  type: UserTypes.REDEEM_POINTS;
  payload: {points: number};
};

export type UserActions = LoginAction | LogoutAction | RedeemPointsAction;
