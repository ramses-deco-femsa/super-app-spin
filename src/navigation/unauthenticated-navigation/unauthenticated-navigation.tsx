import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList, RouteNames} from '@sas/navigation/navigation.types';
import {OnboardingScreen} from '@sas/screens';

const Stack = createStackNavigator<RootStackParamList>();
export const UnauthenticatedNavigation = () => (
  <Stack.Navigator initialRouteName={RouteNames.OnboardingScreen}>
    <Stack.Screen
      name={RouteNames.OnboardingScreen}
      component={OnboardingScreen}
    />
  </Stack.Navigator>
);
