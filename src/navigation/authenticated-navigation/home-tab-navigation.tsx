/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {RootStackParamList, RouteNames} from '@sas/navigation/navigation.types';
import {
  HomeScreen,
  BenefitsScreen,
  WalletScreen,
  AccountScreen,
} from '@sas/screens';
import {ICONS} from '@sas/theme/iconsDimensions';

const Tab = createBottomTabNavigator<RootStackParamList>();

export const HomeTabNavigation = () => (
  <Tab.Navigator
    initialRouteName={RouteNames.HomeTab}
    sceneContainerStyle={{
      backgroundColor: 'white',
      paddingHorizontal: 16,
      alignItems: 'center',
    }}
    screenOptions={{
      headerShown: false,
    }}>
    <Tab.Screen
      name={RouteNames.HomeTab}
      options={{
        tabBarIcon: () => (
          <Image
            style={{
              height: ICONS.ICON_DIMENSIONS,
              width: ICONS.ICON_DIMENSIONS,
            }}
            source={require('../../ui/assets/home-icon.png')}
          />
        ),
      }}
      component={HomeScreen}
    />
    <Tab.Screen
      name={RouteNames.BenefitsTab}
      options={{
        tabBarIcon: () => (
          <Image
            style={{
              height: ICONS.ICON_DIMENSIONS,
              width: ICONS.ICON_DIMENSIONS,
            }}
            source={require('../../ui/assets/sparks-icon.png')}
          />
        ),
      }}
      component={BenefitsScreen}
    />
    <Tab.Screen
      name={RouteNames.WalletTab}
      options={{
        tabBarIcon: () => (
          <Image
            style={{
              height: ICONS.ICON_DIMENSIONS,
              width: ICONS.ICON_DIMENSIONS,
            }}
            source={require('../../ui/assets/wallet-icon.png')}
          />
        ),
      }}
      component={WalletScreen}
    />
    <Tab.Screen
      name={RouteNames.AccountTab}
      options={{
        tabBarIcon: () => (
          <Image
            style={{
              height: 24,
              width: 24,
            }}
            source={require('../../ui/assets/profile-icon.png')}
          />
        ),
      }}
      component={AccountScreen}
    />
  </Tab.Navigator>
);
