import React from 'react';
import {View, Text, Button} from 'react-native';

import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';

import {RootStackParamList, RouteNames} from '@sas/navigation/navigation.types';

export type MovementsListScreenProps =
  MaterialTopTabScreenProps<RootStackParamList>;

export const MovementsListScreen = ({navigation}: MovementsListScreenProps) => (
  <View>
    <Text>MovementsListScreen</Text>
    <Button
      onPress={() => navigation.navigate(RouteNames.MovementDetailScreen)}
      title="go to movement detail"
    />
  </View>
);
