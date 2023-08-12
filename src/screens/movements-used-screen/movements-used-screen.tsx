import React, {FC} from 'react';

import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';

import {ListMovements, PrefetchLoaderNavigator} from '@sas/components';
import {MovementListProvider} from '@sas/context';
import {RootStackParamList} from '@sas/navigation/navigation.types';

export type MovementsUsedScreenProps =
  MaterialTopTabScreenProps<RootStackParamList>;

export const MovementsUsedScreen: FC<MovementsUsedScreenProps> = () => (
  <MovementListProvider filter="expended">
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
