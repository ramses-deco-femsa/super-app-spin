import React from 'react';
import {View, Text} from 'react-native';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import {Button} from '@digitaltitransversal';
import {RootStackParamList, RouteNames} from '@sas/navigation/navigation.types';

export type HomeScreenProps = BottomTabScreenProps<RootStackParamList>;

export const HomeScreen = ({navigation}: HomeScreenProps) => (
  <View>
    <Text>HomeScreen</Text>
    <Button
      onPress={() => navigation.navigate(RouteNames.MovementsScreen)}
      text="go to history"
    />
  </View>
);
