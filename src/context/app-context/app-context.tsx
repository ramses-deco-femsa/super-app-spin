import React, {ReactNode, createContext, useContext, useReducer} from 'react';

import {getMovements, getBrandEntities} from './actions';
import {appReducer, appInitialState, AppState} from './reducer';

type AppContextActions = {
  getMovements: () => ReturnType<typeof getMovements>;
  getBrandEntities: () => ReturnType<typeof getBrandEntities>;
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
    getMovements: async () => getMovements(dispatch),
    getBrandEntities: async () => getBrandEntities(dispatch),
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
