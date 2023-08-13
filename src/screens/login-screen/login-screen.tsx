import React, {FC, useState} from 'react';
import {Image, View} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';
import {Trans, useTranslation} from 'react-i18next';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Button, SnackBar, Text, TextInput} from '@digitaltitransversal';
import {ASSETS_MAPPER} from '@sas/constants';
import {useAppCtx} from '@sas/context';
import {RootStackParamList} from '@sas/navigation/navigation.types';

import {styles} from './login-screen.styles';

export type LoginScreenProps = StackScreenProps<RootStackParamList>;

export const LoginScreen: FC<LoginScreenProps> = () => {
  const {login} = useAppCtx();
  const {t} = useTranslation();
  const [phone, setPhone] = useState('');
  const [loading, setloading] = useState(false);

  const handleSubmit = async () => {
    try {
      setloading(true);
      await login(phone);
    } catch (err) {
      SnackBar.show({
        text: (err as Error).message,
        variant: 'error',
        withIcon: true,
        iconName: 'icon-close',
        duration: 4000,
      });
    } finally {
      setloading(false);
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.scrollContentContainer}>
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
            testID="login-input-phone-number"
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
            disabled={loading}
            variant="primary"
            onPress={handleSubmit}
            text={t('login.submit')}
            size="medium"
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
