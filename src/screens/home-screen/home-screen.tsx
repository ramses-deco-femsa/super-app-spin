import React from 'react';
import {View, Text} from 'react-native';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {Trans} from 'react-i18next';

import {MainContainer} from '@sas/components';
import {RootStackParamList} from '@sas/navigation/navigation.types';

export type HomeScreenProps = BottomTabScreenProps<RootStackParamList>;

export const HomeScreen = (_props: HomeScreenProps) => {
  return (
    <MainContainer>
      <View>
        <Text>
          <Trans i18nKey="welcome" />
        </Text>
      </View>
    </MainContainer>
  );
};
