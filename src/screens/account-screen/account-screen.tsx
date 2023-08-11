import React from 'react';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import {MainContainer, UserProfile} from '@sas/components';
import {RootStackParamList} from '@sas/navigation/navigation.types';

export type AccountScreenProps = BottomTabScreenProps<RootStackParamList>;

export const AccountScreen = (_props: AccountScreenProps) => (
  <MainContainer>
    <UserProfile>
      <UserProfile.Header />
      <UserProfile.Menu>
        <UserProfile.Menu.Language />
        <UserProfile.Menu.Logout />
      </UserProfile.Menu>
    </UserProfile>
  </MainContainer>
);
