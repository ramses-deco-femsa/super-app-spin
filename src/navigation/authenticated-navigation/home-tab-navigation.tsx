import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {RootStackParamList, RouteNames} from '@sas/navigation/navigation.types';
import {
  HomeScreen,
  BenefitsScreen,
  WalletScreen,
  AccountScreen,
} from '@sas/screens';

const Tab = createBottomTabNavigator<RootStackParamList>();

export const HomeTabNavigation = () => (
  <Tab.Navigator initialRouteName={RouteNames.HomeTab}>
    <Tab.Screen name={RouteNames.HomeTab} component={HomeScreen} />
    <Tab.Screen name={RouteNames.BenefitsTab} component={BenefitsScreen} />
    <Tab.Screen name={RouteNames.WalletTab} component={WalletScreen} />
    <Tab.Screen name={RouteNames.AccountTab} component={AccountScreen} />
  </Tab.Navigator>
);
