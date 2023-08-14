import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';

import {
  RedeemPointsFormState,
  redeemPointsFormReducer,
  initialState,
  REDEEM_POINTS_FORM_TYPES,
} from './redeem-points-form-reducer';

type RedeemPointsFormContextActions = {
  setPointsToRedeem: (amount: string) => void;
};

type RedeemPointsFormContext = RedeemPointsFormState &
  RedeemPointsFormContextActions;

const initialContextValue: RedeemPointsFormContext = {
  ...initialState,
  setPointsToRedeem: () => null,
};

const redeemPointsFormContext =
  createContext<RedeemPointsFormContext>(initialContextValue);

type RedeemPointsFormProviderProps = {
  children: ReactNode;
  userPoints: number;
};

export const RedeemPointsFormConsumer = redeemPointsFormContext.Consumer;

export const RedeemPointsFormProvider = ({
  children,
  userPoints,
}: RedeemPointsFormProviderProps) => {
  const [state, dispatch] = useReducer(redeemPointsFormReducer, initialState);

  useEffect(() => {
    if (state.userPoints !== userPoints) {
      dispatch({
        type: REDEEM_POINTS_FORM_TYPES.SET_USER_POINTS,
        payload: {points: userPoints},
      });
    }
  }, [state, userPoints]);

  const actions: RedeemPointsFormContextActions = {
    setPointsToRedeem: amount => {
      dispatch({
        type: REDEEM_POINTS_FORM_TYPES.SET_POINTS_TO_REDEEM,
        payload: {amount},
      });
    },
  };

  return (
    <redeemPointsFormContext.Provider
      value={{
        ...state,
        ...actions,
      }}>
      {children}
    </redeemPointsFormContext.Provider>
  );
};

export const useRedeemPointsFormCtx = () => {
  const ctxValue = useContext(redeemPointsFormContext);

  if (ctxValue === initialContextValue) {
    throw new Error(
      'redeemPointsFormContext must be use whitin the RedeemPointsFormProvider',
    );
  }

  return ctxValue;
};
