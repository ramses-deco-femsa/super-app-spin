import React, {ReactNode} from 'react';
import {View} from 'react-native';

import {useTranslation} from 'react-i18next';
import DeviceInfo from 'react-native-device-info';

import {Text} from '@digitaltitransversal';

import {UserProfileHeader} from './user-profile-header';
import {UserProfileMenu} from './user-profile-menu';
import {styles} from './user-profile.styles';

type UserProfileProps = {
  children: ReactNode;
};

export const UserProfile = ({children}: UserProfileProps) => {
  const {t} = useTranslation();

  return (
    <View testID="user-profile" style={styles.container}>
      <View style={styles.content}>{children}</View>
      <Text variant="label-small" style={styles.version}>
        {t('general.version')} {DeviceInfo.getVersion()}
      </Text>
    </View>
  );
};
UserProfile.Header = UserProfileHeader;
UserProfile.Menu = UserProfileMenu;
