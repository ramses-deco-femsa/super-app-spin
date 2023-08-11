import React from 'react';
import {Pressable} from 'react-native';

import {Trans, useTranslation} from 'react-i18next';

import {Text} from '@digitaltitransversal';

import {styles} from './user-profile-menu-language.styles';

export const UserProfileMenuLanguage = () => {
  const {i18n} = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  return (
    <Pressable onPress={toggleLanguage} style={styles.menuItem}>
      <Text variant="default-body">
        <Trans i18nKey="account.change_language" />
      </Text>
    </Pressable>
  );
};
