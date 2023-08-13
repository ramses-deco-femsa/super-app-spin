import React, {ReactNode, createContext, useContext, useReducer} from 'react';

import {useStorage} from '@sas/hooks';
import {SplashScreen} from '@sas/screens';

import {
  getBrandEntities,
  setUser,
  logout,
  redeemPoints,
  ActionTypes,
  login,
  getUser,
} from './actions';
import {appReducer, appInitialState, AppState} from './reducer';

type AppContextActions = {
  login: ReturnType<typeof login>;
  redeemPoints: ReturnType<typeof redeemPoints>;
  getBrandEntities: ReturnType<typeof getBrandEntities>;
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
  const {isLoading} = useStorage({
    key: 'user',
    value: state.user,
    callback: async user => {
      try {
        await getUser(dispatch)(user!.id);
      } catch (err) {
        // NOTE: this is only if user is not founded in DB
        dispatch(setUser(undefined!) as ActionTypes);
      }

      // NOTE: force splash screen
      await new Promise(resolve => {
        setTimeout(resolve, 1000);
      });
    },
  });

  const actions: AppContextActions = {
    login: login(dispatch),
    redeemPoints: redeemPoints(dispatch, state),
    getBrandEntities: getBrandEntities(dispatch),
    logout: () => dispatch(logout() as ActionTypes),
  };

  return (
    <appContext.Provider
      value={{
        ...state,
        ...actions,
        ...initialValue,
      }}>
      {isLoading ? <SplashScreen /> : children}
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
