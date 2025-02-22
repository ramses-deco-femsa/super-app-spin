import {
  redeemPointsFormReducer,
  initialState,
  REDEEM_POINTS_FORM_TYPES,
  RedeemPointsFormTypeActions,
} from './redeem-points-form-reducer';

describe('redeem-points-form-reducer', () => {
  it('should return default state if action not match', () => {
    const action = {
      types: 'not_match_action',
    } as unknown as RedeemPointsFormTypeActions;

    const newState = redeemPointsFormReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });

  describe('SET_USER_POINTS', () => {
    const action = (points: number) =>
      ({
        type: REDEEM_POINTS_FORM_TYPES.SET_USER_POINTS,
        payload: {points},
      } as RedeemPointsFormTypeActions);

    it('should return userPointsMinAmountError if user points are lest than 200 points', () => {
      const newState = redeemPointsFormReducer(initialState, action(150));

      expect(newState.userPoints).toBe(150);
      expect(newState.userPointsMinAmountError).toBeTruthy();
      expect(newState.shortcutButtons).toHaveLength(0);
    });

    it('should only sets user points when are lower than 1,000 and higher than 200', () => {
      const newState = redeemPointsFormReducer(initialState, action(250));

      expect(newState.userPoints).toBe(250);
      expect(newState.userPointsMinAmountError).toBeFalsy();
      expect(newState.shortcutButtons).toHaveLength(0);
    });

    it('should return 2 shortcut buttons when user points are higher than 1,000 and lower than 10,000', () => {
      const newState = redeemPointsFormReducer(initialState, action(1200));

      expect(newState.userPoints).toBe(1200);
      expect(newState.userPointsMinAmountError).toBeFalsy();
      expect(newState.shortcutButtons).toHaveLength(2);
    });

    it('should return 4 shortcut buttons when user points are higher than 10,000', () => {
      const newState = redeemPointsFormReducer(initialState, action(15000));

      expect(newState.userPoints).toBe(15000);
      expect(newState.userPointsMinAmountError).toBeFalsy();
      expect(newState.shortcutButtons).toHaveLength(4);
    });
  });

  describe('SET_POINTS_TO_REDEEM', () => {
    const action = (amount: string) =>
      ({
        type: REDEEM_POINTS_FORM_TYPES.SET_POINTS_TO_REDEEM,
        payload: {amount},
      } as RedeemPointsFormTypeActions);

    it('should converts the amount "200" to  "2,000" points', () => {
      const newState = redeemPointsFormReducer(initialState, action('200'));

      expect(newState.pointsToRedeem).toBe(2000);
      expect(newState.invalidPointsToRedeem).toBeFalsy();
    });

    it('should return pointsToRedeemMaxAmountError truthy if the amount exceed "1000"', () => {
      const newState = redeemPointsFormReducer(initialState, action('1001'));

      expect(newState.pointsToRedeemMaxAmountError).toBeTruthy();
    });

    it('should return invalidPointsToRedeem truthy if the amount is NaN', () => {
      const newState = redeemPointsFormReducer(initialState, action('12ds'));

      expect(newState.pointsToRedeem).toBe(NaN);
      expect(newState.invalidPointsToRedeem).toBeTruthy();
    });
  });
});
