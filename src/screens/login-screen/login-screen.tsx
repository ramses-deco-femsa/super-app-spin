import React from 'react';
import {View, Text} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParamList} from '@sas/navigation/navigation.types';

export type LoginScreenProps = StackScreenProps<RootStackParamList>;

export const LoginScreen = (_props: LoginScreenProps) => (
  <View>
    <Text>LoginScreen</Text>
  </View>
);
