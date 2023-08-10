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

    it('should return showWarning if user points are lest than 200 points', () => {
      const newState = redeemPointsFormReducer(initialState, action(150));

      expect(newState.userPoints).toBe(150);
      expect(newState.showWarning).toBeTruthy();
      expect(newState.shortcutButtons).toHaveLength(0);
    });

    it('should only sets user points when are lower than 1,000 and higher than 200', () => {
      const newState = redeemPointsFormReducer(initialState, action(250));

      expect(newState.userPoints).toBe(250);
      expect(newState.showWarning).toBeFalsy();
      expect(newState.shortcutButtons).toHaveLength(0);
    });

    it('should return 2 shortcut buttons when user points are higher than 1,000 and lower than 10,000', () => {
      const newState = redeemPointsFormReducer(initialState, action(1200));

      expect(newState.userPoints).toBe(1200);
      expect(newState.showWarning).toBeFalsy();
      expect(newState.shortcutButtons).toHaveLength(2);
    });

    it('should return 4 shortcut buttons when user points are higher than 10,000', () => {
      const newState = redeemPointsFormReducer(initialState, action(15000));

      expect(newState.userPoints).toBe(15000);
      expect(newState.showWarning).toBeFalsy();
      expect(newState.shortcutButtons).toHaveLength(4);
    });
  });

  describe('SET_POINTS_TO_REDEEM', () => {
    const action = (amount: string) =>
      ({
        type: REDEEM_POINTS_FORM_TYPES.SET_POINTS_TO_REDEEM,
        payload: {amount},
      } as RedeemPointsFormTypeActions);

    it('should return showWarning if user points are lest than 200 points', () => {
      const newState = redeemPointsFormReducer(initialState, action('200'));

      expect(newState.pointsToRedeem).toBe(2000);
    });
  });
});
