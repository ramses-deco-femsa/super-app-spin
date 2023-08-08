import React from 'react';
import {View, Text} from 'react-native';

import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';

import {PrefetchLoaderNavigator} from '@sas/components';
import {useAppCtx} from '@sas/context';
import {RootStackParamList} from '@sas/navigation/navigation.types';

export type MovementsEarnedScreenProps =
  MaterialTopTabScreenProps<RootStackParamList>;

export const MovementsEarnedScreen = (_props: MovementsEarnedScreenProps) => {
  const {movements} = useAppCtx();

  return (
    <PrefetchLoaderNavigator loading={movements.loading}>
      <View>
        <Text>{movements.data.length}</Text>
      </View>
    </PrefetchLoaderNavigator>
  );
};
