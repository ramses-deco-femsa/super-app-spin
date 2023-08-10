import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {useAppCtx} from '@sas/context';

import {AuthenticatedNavigation} from './authenticated-navigation';
import {UnauthenticatedNavigation} from './unauthenticated-navigation';

export const RootNavigation = () => {
  const {user} = useAppCtx();

  return (
    <NavigationContainer>
      {user ? <AuthenticatedNavigation /> : <UnauthenticatedNavigation />}
    </NavigationContainer>
  );
};
