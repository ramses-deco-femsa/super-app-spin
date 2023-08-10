export type RedeemPointsFormState = {
  userPoints: number;
  minAmount: number;
  maxAmount: number;
  pointsToRedeem: number;
  shortcutButtons: number[];
  pointsToRedeemMaxAmountError: boolean;
  userPointsMinAmountError: boolean;
  invalidPointsToRedeem: boolean;
};

export const initialState: RedeemPointsFormState = {
  userPoints: 0,
  minAmount: 200,
  maxAmount: 10000,
  pointsToRedeem: 0,
  shortcutButtons: [],
  pointsToRedeemMaxAmountError: false,
  userPointsMinAmountError: false,
  invalidPointsToRedeem: false,
};

export enum REDEEM_POINTS_FORM_TYPES {
  SET_USER_POINTS = 'SET_USER_POINTS',
  SET_POINTS_TO_REDEEM = 'SET_POINTS_TO_REDEEM',
}

type SetUserPointsAction = {
  type: REDEEM_POINTS_FORM_TYPES.SET_USER_POINTS;
  payload: {points: number};
};

type SetPointsToRedeemAction = {
  type: REDEEM_POINTS_FORM_TYPES.SET_POINTS_TO_REDEEM;
  payload: {amount: string};
};

export type RedeemPointsFormTypeActions =
  | SetUserPointsAction
  | SetPointsToRedeemAction;

const BASIC_POINTS_SHORTCUTS = [500, 1000];
const ADVANCED_POINTS_SHORTCUTS = [...BASIC_POINTS_SHORTCUTS, 2000, 5000];

export const redeemPointsFormReducer = (
  state: RedeemPointsFormState,
  action: RedeemPointsFormTypeActions,
): RedeemPointsFormState => {
  switch (action.type) {
    case REDEEM_POINTS_FORM_TYPES.SET_USER_POINTS: {
      const userPoints = action.payload.points;

      if (userPoints < state.minAmount) {
        return {
          ...initialState,
          userPoints,
          userPointsMinAmountError: true,
        };
      }

      if (userPoints < 1000) {
        return {
          ...initialState,
          userPoints,
        };
      }

      if (userPoints > 10000) {
        return {
          ...initialState,
          userPoints,
          shortcutButtons: ADVANCED_POINTS_SHORTCUTS,
        };
      }

      return {
        ...initialState,
        userPoints,
        shortcutButtons: BASIC_POINTS_SHORTCUTS,
      };
    }
    case REDEEM_POINTS_FORM_TYPES.SET_POINTS_TO_REDEEM: {
      const pointsToRedeem = +action.payload.amount * 10;

      return {
        ...state,
        pointsToRedeem,
        pointsToRedeemMaxAmountError: pointsToRedeem > state.maxAmount,
        invalidPointsToRedeem: isNaN(pointsToRedeem),
      };
    }
    default:
      return state;
  }
};
