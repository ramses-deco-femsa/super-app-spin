import React from 'react';
import {View, Text} from 'react-native';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import {RootStackParamList} from '@sas/navigation/navigation.types';

export type WalletScreenProps = BottomTabScreenProps<RootStackParamList>;

export const WalletScreen = (_props: WalletScreenProps) => (
  <View>
    <Text>WalletScreen</Text>
  </View>
);
