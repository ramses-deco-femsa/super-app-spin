import React from 'react';
import {View, Image} from 'react-native';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';

import {Text} from '@digitaltitransversal';
import {MainContainer} from '@sas/components';
import {RootStackParamList} from '@sas/navigation/navigation.types';

export type WalletScreenProps = BottomTabScreenProps<RootStackParamList>;

export const WalletScreen = (_props: WalletScreenProps) => {
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
          style={{
            width: 40,
            height: 40,
            marginBottom: 24,
          }}
          source={require('../../ui/assets/wallet-icon.png')}
        />
        <Text>{t('walletScreen.fallback')}</Text>
      </View>
    </MainContainer>
  );
};
