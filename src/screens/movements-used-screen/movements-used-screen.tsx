import React, {FC} from 'react';

import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';

import {ListMovements, PrefetchLoaderNavigator} from '@sas/components';
import {useAppCtx} from '@sas/context';
import {RootStackParamList} from '@sas/navigation/navigation.types';

export type MovementsUsedScreenProps =
  MaterialTopTabScreenProps<RootStackParamList>;

export const MovementsUsedScreen: FC<MovementsUsedScreenProps> = () => {
  const {movements, getMovements} = useAppCtx();

  const movementsEarned = movements.dataFormmated.reduce((result, section) => {
    const filteredSectionData = section.data.filter(
      ({operation}) => operation === 'expended',
    );

    if (filteredSectionData.length) {
      result.push({...section, data: filteredSectionData});
    }

    return result;
  }, [] as typeof movements.dataFormmated);

  return (
    <PrefetchLoaderNavigator
      action={getMovements}
      error={movements.error}
      loading={movements.loading}>
      <ListMovements data={movementsEarned} />
    </PrefetchLoaderNavigator>
  );
};
