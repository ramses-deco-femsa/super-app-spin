import React from 'react';
import {View, Text} from 'react-native';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import {RootStackParamList} from '@sas/navigation/navigation.types';

export type AccountScreenProps = BottomTabScreenProps<RootStackParamList>;

export const AccountScreen = (_props: AccountScreenProps) => (
  <View>
    <Text>AccountScreen</Text>
  </View>
);
