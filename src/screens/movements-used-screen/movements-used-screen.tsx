import React from 'react';
import {View, Text} from 'react-native';

import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';

import {PrefetchLoaderNavigator} from '@sas/components';
import {useAppCtx} from '@sas/context';
import {RootStackParamList} from '@sas/navigation/navigation.types';

export type MovementsUsedScreenProps =
  MaterialTopTabScreenProps<RootStackParamList>;

export const MovementsUsedScreen = (_props: MovementsUsedScreenProps) => {
  const {movements} = useAppCtx();

  return (
    <PrefetchLoaderNavigator loading={movements.loading}>
      <View>
        <Text>{movements.data.length}</Text>
      </View>
    </PrefetchLoaderNavigator>
  );
};
