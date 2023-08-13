import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList, RouteNames} from '@sas/navigation/navigation.types';
import {LoginScreen} from '@sas/screens';

const Stack = createStackNavigator<RootStackParamList>();
export const UnauthenticatedNavigation = () => (
  <Stack.Navigator
    initialRouteName={RouteNames.LoginScreen}
    screenOptions={{headerShown: false}}>
    <Stack.Screen name={RouteNames.LoginScreen} component={LoginScreen} />
  </Stack.Navigator>
);
