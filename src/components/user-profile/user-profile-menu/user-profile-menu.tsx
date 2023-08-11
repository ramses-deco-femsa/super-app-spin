import React, {ReactNode} from 'react';
import {View} from 'react-native';

import {useTranslation} from 'react-i18next';

import {Text} from '@digitaltitransversal';

import {styles} from './user-profile-menu.styles';
import {UserProfileMenuLanguage} from '../user-profile-menu-language';
import {UserProfileMenuLogout} from '../user-profile-menu-logout';

type UserProfileMenuProps = {
  children: ReactNode;
};

export const UserProfileMenu = ({children}: UserProfileMenuProps) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text variant="headline-small">{t('account.other_actions')}</Text>

      <View>
        {React.Children.map(children, child => (
          <View style={styles.menutItem}>{child}</View>
        ))}
      </View>
    </View>
  );
};

UserProfileMenu.Language = UserProfileMenuLanguage;
UserProfileMenu.Logout = UserProfileMenuLogout;
