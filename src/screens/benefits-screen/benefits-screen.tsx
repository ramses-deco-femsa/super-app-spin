import React from 'react';
import {View, Text} from 'react-native';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import {RootStackParamList} from '@sas/navigation/navigation.types';

export type BenefitsScreenProps = BottomTabScreenProps<RootStackParamList>;

export const BenefitsScreen = (_props: BenefitsScreenProps) => (
  <View>
    <Text>BenefitsScreen</Text>
  </View>
);
