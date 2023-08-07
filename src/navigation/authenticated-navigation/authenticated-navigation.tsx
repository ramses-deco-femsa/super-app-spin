import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList, RouteNames} from '@sas/navigation/navigation.types';
import {MovementDetailScreen} from '@sas/screens';

import {HomeTabNavigation} from './home-tab-navigation';
import {MovementsTabNavigation} from './movements-tab-navigation';

const Stack = createStackNavigator<RootStackParamList>();

export const AuthenticatedNavigation = () => (
  <Stack.Navigator initialRouteName={RouteNames.HomeScreen}>
    <Stack.Screen
      name={RouteNames.HomeScreen}
      options={{headerShown: false}}
      component={HomeTabNavigation}
    />
    <Stack.Screen
      name={RouteNames.MovementsScreen}
      component={MovementsTabNavigation}
    />
    <Stack.Screen
      name={RouteNames.MovementDetailScreen}
      component={MovementDetailScreen}
    />
  </Stack.Navigator>
);
