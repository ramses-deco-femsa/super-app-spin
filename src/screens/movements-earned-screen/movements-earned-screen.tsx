import React, {FC} from 'react';

import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';

import {ListMovements, PrefetchLoaderNavigator} from '@sas/components';
import {MovementListProvider} from '@sas/context';
import {RootStackParamList} from '@sas/navigation/navigation.types';

export type MovementsEarnedScreenProps =
  MaterialTopTabScreenProps<RootStackParamList>;

export const MovementsEarnedScreen: FC<MovementsEarnedScreenProps> = () => (
  <MovementListProvider filter="earned">
    {({
      dataFormmated,
      loading,
      fetching,
      error,
      hasMoreData,
      pullToRefresh,
      loadMoreData,
    }) => (
      <PrefetchLoaderNavigator loading={loading} error={error}>
        <ListMovements
          fetching={fetching}
          loadMoreData={loadMoreData}
          pullToRefresh={pullToRefresh}
          hasMoreData={hasMoreData}
          data={dataFormmated}
        />
      </PrefetchLoaderNavigator>
    )}
  </MovementListProvider>
);
