import React, {FC, useState} from 'react';
import {Image, View} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';
import {Trans, useTranslation} from 'react-i18next';

import {Button, Text, TextInput} from '@digitaltitransversal';
import {ASSETS_MAPPER} from '@sas/constants';
import {RootStackParamList} from '@sas/navigation/navigation.types';

import {styles} from './login-screen.styles';

export type LoginScreenProps = StackScreenProps<RootStackParamList>;

export const LoginScreen: FC<LoginScreenProps> = () => {
  const {t} = useTranslation();
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      <Image source={ASSETS_MAPPER.splash_bg} style={styles.splash} />
      <View style={styles.textContainer}>
        <Image
          source={ASSETS_MAPPER.splin_plus_logo}
          style={styles.spinPlusLogo}
        />
        <Text style={styles.title}>
          <Trans i18nKey="login.title" />
        </Text>
      </View>
      <View style={styles.formCard}>
        <TextInput
          variant="mask"
          maskType="phone"
          value={phone}
          onChangeText={setPhone}
          leftSection={<Text>🇲🇽</Text>}
          label={t('login.phone_number')}
          placeholder={t('login.phone_number')}
        />
        <Text style={styles.terms}>
          <Trans i18nKey="login.terms_and_conditions" />
        </Text>
        <Button
          variant="primary"
          onPress={() => console.log('login')}
          text={t('login.submit')}
          size="medium"
        />
      </View>
    </View>
  );
};
