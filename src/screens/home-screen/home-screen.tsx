import React from 'react';
import {View, Text, Button} from 'react-native';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import {RootStackParamList, RouteNames} from '@sas/navigation/navigation.types';

export type HomeScreenProps = BottomTabScreenProps<RootStackParamList>;

export const HomeScreen = ({navigation}: HomeScreenProps) => (
  <View>
    <Text>HomeScreen</Text>
    <Button
      onPress={() => navigation.navigate(RouteNames.MovementsScreen)}
      title="go to history"
    />
  </View>
);
