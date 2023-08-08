import React, {FC} from 'react';

import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';

import {ListMovements, PrefetchLoaderNavigator} from '@sas/components';
import {useAppCtx} from '@sas/context';
import {RootStackParamList} from '@sas/navigation/navigation.types';

export type MovementsListScreenProps =
  MaterialTopTabScreenProps<RootStackParamList>;

export const MovementsListScreen: FC<MovementsListScreenProps> = () => {
  const {movements, getMovements} = useAppCtx();

  return (
    <PrefetchLoaderNavigator
      action={getMovements}
      error={movements.error}
      loading={movements.loading}>
      <ListMovements data={movements.dataFormmated} />
    </PrefetchLoaderNavigator>
  );
};
