import React, {ReactNode, createContext, useContext, useReducer} from 'react';

import {Types} from './actions';
import {appReducer, appInitialState, AppState} from './reducer';

type AppContextActions = {
  getMovements: () => Promise<void>;
};

type AppContext = AppState & AppContextActions;

export const appContext = createContext<AppContext>(
  null as unknown as AppContext,
);

export const AppProvider = ({children}: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(appReducer, appInitialState);

  const actions: AppContextActions = {
    getMovements: async () => {
      // TODO: add real action
      dispatch({type: Types.SET_MOVEMENTS, payload: {movements: []}});
    },
  };

  return (
    <appContext.Provider
      value={{
        ...state,
        ...actions,
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
