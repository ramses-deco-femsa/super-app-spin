import React from 'react';
import {Platform} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {AuthenticatedNavigation} from './authenticated-navigation';
import {UnauthenticatedNavigation} from './unauthenticated-navigation';

export const RootNavigation = () => {
  // NOTE: this flag shoud be getted from an state
  const isAuthenticated = Platform.OS === 'ios' || Platform.OS === 'android';

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <AuthenticatedNavigation />
      ) : (
        <UnauthenticatedNavigation />
      )}
    </NavigationContainer>
  );
};
