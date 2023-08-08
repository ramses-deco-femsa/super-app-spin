import React from 'react';
import {View, Text} from 'react-native';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import {MainContainer} from '@sas/components';
import {RootStackParamList} from '@sas/navigation/navigation.types';

export type HomeScreenProps = BottomTabScreenProps<RootStackParamList>;

export const HomeScreen = (_props: HomeScreenProps) => (
  <MainContainer>
    <View>
      <Text>HomeScreen</Text>
    </View>
  </MainContainer>
);
