/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Trans} from 'react-i18next';

import {Text} from '@digitaltitransversal';
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
      options={{
        tabBarLabel: () => (
          <Text>
            <Trans i18nKey="movements.tabs.all" />
          </Text>
        ),
      }}
    />
    <Tab.Screen
      name={RouteNames.MovementsEarnedTab}
      component={MovementsEarnedScreen}
      options={{
        tabBarLabel: () => (
          <Text>
            <Trans i18nKey="movements.tabs.earned" />
          </Text>
        ),
      }}
    />
    <Tab.Screen
      name={RouteNames.MovementsUsedTab}
      component={MovementsUsedScreen}
      options={{
        tabBarLabel: () => (
          <Text>
            <Trans i18nKey="movements.tabs.used" />
          </Text>
        ),
      }}
    />
  </Tab.Navigator>
);
