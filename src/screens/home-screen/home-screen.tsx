import React from 'react';
import {View, Text} from 'react-native';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';

import {MainContainer} from '@sas/components';
import {RootStackParamList} from '@sas/navigation/navigation.types';

export type HomeScreenProps = BottomTabScreenProps<RootStackParamList>;

export const HomeScreen = (_props: HomeScreenProps) => {
  const {t} = useTranslation();

  return (
    <MainContainer>
      <View>
        <Text>{t('welcome')}</Text>
      </View>
    </MainContainer>
  );
};
