import React from 'react';
import {View, Text, Image} from 'react-native';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';

import {MainContainer} from '@sas/components';
import {RootStackParamList} from '@sas/navigation/navigation.types';

export type HomeScreenProps = BottomTabScreenProps<RootStackParamList>;

export const HomeScreen = (_props: HomeScreenProps) => {
  const {t} = useTranslation();

  return (
    <MainContainer>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{width: 40, height: 40, marginBottom: 24}}
          source={require('../../ui/assets/mobile-icon.png')}
        />
        <Text>
          <Text>{t('homeScreen.fallback')}</Text>
        </Text>
      </View>
    </MainContainer>
  );
};
