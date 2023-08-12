import React, {ReactNode, createContext, useEffect, useReducer} from 'react';

import {MovementListTypes, getMovements} from './actions';
import {
  MovementListState,
  movementListReducer,
  initialState,
} from './reducer/movement-list-context-reducer';

type MovementListContextActions = {
  loadMoreData: () => void;
  pullToRefresh: () => void;
};

type MovementListContext = MovementListState & MovementListContextActions;

const initialContextValue = {
  ...initialState,
} as unknown as MovementListContext;

const movementListContext =
  createContext<MovementListContext>(initialContextValue);

type MovementListProviderProps = {
  children: (value: MovementListContext) => ReactNode;
  filter: MovementListState['filter'];
};

export const MovementListProvider = ({
  children,
  filter,
}: MovementListProviderProps) => {
  const [state, dispatch] = useReducer(movementListReducer, {
    ...initialState,
    filter,
  });

  useEffect(() => {
    if (!state.refresh) {
      getMovements(dispatch, state)();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.page]);

  useEffect(() => {
    if (state.refresh) {
      getMovements(dispatch, state)();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.refresh]);

  const actions: MovementListContextActions = {
    loadMoreData: () => {
      dispatch({
        type: MovementListTypes.LOAD_MORE_DATA,
      });
    },
    pullToRefresh: () => {
      dispatch({
        type: MovementListTypes.PULL_TO_REFRESH,
      });
    },
  };

  const contextValue: MovementListContext = {
    ...state,
    ...actions,
  };

  return (
    <movementListContext.Provider value={contextValue}>
      {children(contextValue)}
    </movementListContext.Provider>
  );
};
