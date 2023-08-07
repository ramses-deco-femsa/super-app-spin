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

const Tab = createBottomTabNavigator<RootStackParamList>();

export const HomeTabNavigation = () => (
  <Tab.Navigator
    initialRouteName={RouteNames.HomeTab}
    sceneContainerStyle={{
      backgroundColor: 'white',
    }}
    screenOptions={{
      headerShown: false,
    }}>
    <Tab.Screen
      name={RouteNames.HomeTab}
      options={{
        tabBarIcon: () => (
          <Image source={require('../../ui/assets/home-icon.png')} />
        ),
      }}
      component={HomeScreen}
    />
    <Tab.Screen
      name={RouteNames.BenefitsTab}
      options={{
        tabBarIcon: () => (
          <Image source={require('../../ui/assets/sparks-icon.png')} />
        ),
      }}
      component={BenefitsScreen}
    />
    <Tab.Screen
      name={RouteNames.WalletTab}
      options={{
        tabBarIcon: () => (
          <Image source={require('../../ui/assets/wallet-icon.png')} />
        ),
      }}
      component={WalletScreen}
    />
    <Tab.Screen
      name={RouteNames.AccountTab}
      options={{
        tabBarIcon: () => (
          <Image source={require('../../ui/assets/profile-icon.png')} />
        ),
      }}
      component={AccountScreen}
    />
  </Tab.Navigator>
);
