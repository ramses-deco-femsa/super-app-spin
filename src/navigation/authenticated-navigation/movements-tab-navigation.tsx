/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {RootStackParamList, RouteNames} from '@sas/navigation/navigation.types';
import {
  MovementsEarnedScreen,
  MovementsListScreen,
  MovementsUsedScreen,
} from '@sas/screens';

const Tab = createMaterialTopTabNavigator<RootStackParamList>();

export const MovementsTabNavigation = () => (
  <Tab.Navigator
    initialRouteName={RouteNames.MovementsListTab}
    sceneContainerStyle={{
      backgroundColor: 'white',
    }}
    style={{
      paddingHorizontal: 20,
      backgroundColor: 'white',
    }}
    screenOptions={{
      tabBarStyle: {
        elevation: 0,
      },
    }}>
    <Tab.Screen
      name={RouteNames.MovementsListTab}
      component={MovementsListScreen}
    />
    <Tab.Screen
      name={RouteNames.MovementsEarnedTab}
      component={MovementsEarnedScreen}
    />
    <Tab.Screen
      name={RouteNames.MovementsUsedTab}
      component={MovementsUsedScreen}
    />
  </Tab.Navigator>
);
