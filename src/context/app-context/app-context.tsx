import React, {ReactNode, createContext, useContext, useReducer} from 'react';

import {
  getBrandEntities,
  login,
  logout,
  redeemPoints,
  ActionTypes,
} from './actions';
import {appReducer, appInitialState, AppState} from './reducer';

type AppContextActions = {
  redeemPoints: ReturnType<typeof redeemPoints>;
  getBrandEntities: ReturnType<typeof getBrandEntities>;
  login: (params: Parameters<typeof login>['0']) => void;
  logout: () => void;
};

export type AppContext = AppState & AppContextActions;

const appContext = createContext<AppContext>(null as unknown as AppContext);

type AppProviderProps = {
  children: ReactNode;
  initialValue?: Partial<AppContext>;
};

export const AppProvider = ({children, initialValue}: AppProviderProps) => {
  const [state, dispatch] = useReducer(appReducer, appInitialState);

  const actions: AppContextActions = {
    getBrandEntities: getBrandEntities(dispatch),
    login: user => dispatch(login(user) as ActionTypes),
    logout: () => dispatch(logout() as ActionTypes),
    redeemPoints: redeemPoints(dispatch),
  };

  return (
    <appContext.Provider
      value={{
        ...state,
        ...actions,
        ...initialValue,
      }}>
      {children}
    </appContext.Provider>
  );
};

export const useAppCtx = () => {
  const ctxValue = useContext(appContext);

  if (!ctxValue) {
    throw new Error('appContext must be use whitin the AppProvider');
  }

  return ctxValue;
};
