import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {ScreenTitle} from '@sas/components';
import {RootStackParamList, RouteNames} from '@sas/navigation/navigation.types';
import {
  ChooseBrandEntityScreen,
  MovementDetailScreen,
  RedeemPointsScreen,
  TicketScreen,
} from '@sas/screens';
import {COLORS} from '@sas/theme';

import {HomeTabNavigation} from './home-tab-navigation';
import {MovementsTabNavigation} from './movements-tab-navigation';

const Stack = createStackNavigator<RootStackParamList>();

export const AuthenticatedNavigation = () => (
  <Stack.Navigator
    initialRouteName={RouteNames.HomeScreen}
    screenOptions={{
      cardStyle: {
        backgroundColor: COLORS.surface_primary,
      },
      headerLeftContainerStyle: {
        paddingLeft: 20,
      },
      headerStyle: {
        elevation: 0,
        shadowColor: 'transparent',
      },
      headerBackTitle: ' ',
      headerTitleAlign: 'left',
      headerTitle: ScreenTitle,
      headerTitleContainerStyle: ScreenTitle.styles,
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
    <Stack.Screen
      name={RouteNames.RedeemPointsScreen}
      component={RedeemPointsScreen}
    />
    <Stack.Screen
      options={{
        headerTintColor: COLORS.surface_primary,
        headerStyle: {
          backgroundColor: '#087D6F',
          shadowColor: 'transparent',
          elevation: 0,
        },
      }}
      name={RouteNames.TicketScreen}
      component={TicketScreen}
    />
  </Stack.Navigator>
);
