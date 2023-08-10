/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';

import {ScreenTitle} from '@sas/components';
import {RootStackParamList, RouteNames} from '@sas/navigation/navigation.types';
import {
  HomeScreen,
  BenefitsScreen,
  WalletScreen,
  AccountScreen,
} from '@sas/screens';
import {COLORS} from '@sas/theme';
import {ICONS} from '@sas/theme/iconsDimensions';

const Tab = createBottomTabNavigator<RootStackParamList>();

export const HomeTabNavigation = () => {
  const {t} = useTranslation();

  return (
    <Tab.Navigator
      initialRouteName={RouteNames.HomeTab}
      sceneContainerStyle={{
        backgroundColor: COLORS.surface_primary,
        paddingHorizontal: 16,
      }}
      screenOptions={{
        headerTitleAlign: 'left',
        headerTitle: ScreenTitle,
      }}>
      <Tab.Screen
        name={RouteNames.HomeTab}
        options={{
          headerShown: false,
          tabBarLabel: t('navigation.tabs.home'),
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
          tabBarLabel: t('navigation.tabs.benefits'),
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
          headerShown: false,
          tabBarLabel: t('navigation.tabs.wallet'),
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
          headerShown: false,
          tabBarLabel: t('navigation.tabs.account'),
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
};
