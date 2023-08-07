import React from 'react';
import {View, Text} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParamList} from '@sas/navigation/navigation.types';

export type OnboardingScreenProps = StackScreenProps<RootStackParamList>;

export const OnboardingScreen = (_props: OnboardingScreenProps) => (
  <View>
    <Text>OnboardingScreen</Text>
  </View>
);
