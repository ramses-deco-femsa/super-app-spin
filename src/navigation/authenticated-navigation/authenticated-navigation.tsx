import React from 'react';
import {Platform} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList, RouteNames} from '@sas/navigation/navigation.types';
import {ChooseBrandEntityScreen, MovementDetailScreen} from '@sas/screens';

import {HomeTabNavigation} from './home-tab-navigation';
import {MovementsTabNavigation} from './movements-tab-navigation';

const Stack = createStackNavigator<RootStackParamList>();

export const AuthenticatedNavigation = () => (
  <Stack.Navigator
    initialRouteName={RouteNames.HomeScreen}
    screenOptions={{
      headerLeftContainerStyle: {
        paddingLeft: 20,
      },
      headerStyle: {
        elevation: 0,
        shadowColor: 'transparent',
      },
      headerBackTitle: 'Movimientos',
      headerTitle: Platform.OS === 'ios' ? '' : 'Movimientos',
      headerTitleStyle: {
        left: -25,
      },
      headerTitleAlign: 'left',
      headerBackTitleStyle: {
        marginLeft: Platform.OS === 'ios' ? 12 : 0,
      },
      headerTintColor: 'black',
    }}>
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
    <Stack.Screen
      name={RouteNames.ChooseBrandEntityScreen}
      component={ChooseBrandEntityScreen}
    />
  </Stack.Navigator>
);
