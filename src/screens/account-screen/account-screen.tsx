import React from 'react';
import {View, Text} from 'react-native';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import {MainContainer} from '@sas/components';
import {RootStackParamList} from '@sas/navigation/navigation.types';

export type AccountScreenProps = BottomTabScreenProps<RootStackParamList>;

export const AccountScreen = (_props: AccountScreenProps) => (
  <MainContainer>
    <View>
      <Text>AccountScreen</Text>
    </View>
  </MainContainer>
);
