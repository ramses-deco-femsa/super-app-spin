import React from 'react';
import {View, Text, Button} from 'react-native';

import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';

import {PrefetchLoaderNavigator} from '@sas/components';
import {useAppCtx} from '@sas/context';
import {RootStackParamList, RouteNames} from '@sas/navigation/navigation.types';

export type MovementsListScreenProps =
  MaterialTopTabScreenProps<RootStackParamList>;

export const MovementsListScreen = ({navigation}: MovementsListScreenProps) => {
  const {movements, getMovements} = useAppCtx();

  return (
    <PrefetchLoaderNavigator
      action={getMovements}
      error={movements.error}
      loading={movements.loading}>
      <View>
        <Text>{movements.data.length}</Text>
        <Button
          onPress={() => navigation.navigate(RouteNames.MovementDetailScreen)}
          title="go to movement detail"
        />
      </View>
    </PrefetchLoaderNavigator>
  );
};
