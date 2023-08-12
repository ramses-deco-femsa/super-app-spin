import type {Movement, MovementsFormatted} from '@sas/types';
import {formatMovementsByDate} from '@sas/utils';

import {MovementListTypeActions, MovementListTypes} from '../actions';

type MovementFilter = Movement['operation'] | 'all';

export type MovementListState = {
  loading: boolean;
  fetching: boolean;
  refresh: boolean;
  error?: string;
  totalCount: number | null;
  hasMoreData: boolean;
  data: Movement[];
  dataFormmated: MovementsFormatted[];
  page: number;
  pageSize: number;
  filter: MovementFilter;
};

export const initialState: MovementListState = {
  loading: false,
  fetching: false,
  refresh: false,
  error: undefined,
  totalCount: null,
  hasMoreData: false,
  data: [],
  dataFormmated: [],
  page: 1,
  pageSize: 10,
  filter: 'all',
};

export const movementListReducer = (
  state: MovementListState,
  action: MovementListTypeActions,
): MovementListState => {
  switch (action.type) {
    case MovementListTypes.FETCH_MOVEMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case MovementListTypes.FETCH_MOVEMENTS_SUCCESS: {
      const {movements, totalCount} = action.payload;

      const data = state.data
        .concat(movements)
        .filter(
          (item, index, self) =>
            index === self.findIndex(({id}) => id === item.id),
        );

      return {
        ...state,
        loading: false,
        fetching: false,
        refresh: false,
        totalCount,
        hasMoreData: data.length < totalCount,
        data,
        dataFormmated: formatMovementsByDate(data),
      };
    }
    case MovementListTypes.FETCH_MOVEMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        fetching: false,
        error: action.payload.error,
      };
    case MovementListTypes.PULL_TO_REFRESH:
      return {
        ...initialState,
        data: [],
        dataFormmated: [],
        refresh: true,
      };
    case MovementListTypes.LOAD_MORE_DATA:
      return {
        ...state,
        fetching: true,
        page: state.page + 1,
      };
    default:
      return state;
  }
};
