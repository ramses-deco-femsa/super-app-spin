import React from 'react';
import {View, Text} from 'react-native';

import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';

import {RootStackParamList} from '@sas/navigation/navigation.types';

export type MovementsUsedScreenProps =
  MaterialTopTabScreenProps<RootStackParamList>;

export const MovementsUsedScreen = (_props: MovementsUsedScreenProps) => (
  <View>
    <Text>MovementsUsedScreen</Text>
  </View>
);
