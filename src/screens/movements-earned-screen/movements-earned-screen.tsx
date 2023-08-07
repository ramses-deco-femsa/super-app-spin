import React from 'react';
import {View, Text} from 'react-native';

import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';

import {RootStackParamList} from '@sas/navigation/navigation.types';

export type MovementsEarnedScreenProps =
  MaterialTopTabScreenProps<RootStackParamList>;

export const MovementsEarnedScreen = (_props: MovementsEarnedScreenProps) => (
  <View>
    <Text>MovementsEarnedScreen</Text>
  </View>
);
