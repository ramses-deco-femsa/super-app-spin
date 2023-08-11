import React, {useState} from 'react';
import {Image, Pressable} from 'react-native';

import {Trans, useTranslation} from 'react-i18next';

import {SnackBar, Text, TwoButtonModal} from '@digitaltitransversal';
import {ASSETS_MAPPER} from '@sas/constants';
import {useAppCtx} from '@sas/context';

import {styles} from './user-profile-menu-logout.styles';

export const UserProfileMenuLogout = () => {
  const {logout} = useAppCtx();
  const {t} = useTranslation();

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleLogout = () => {
    logout();
    SnackBar.show({
      text: t('account.logout_success_message'),
      variant: 'success',
      withIcon: true,
      iconName: 'icon-send',
      duration: 4000,
    });
  };

  return (
    <>
      <Pressable onPress={toggleModal} style={styles.menuItem}>
        <Image style={styles.icon} source={ASSETS_MAPPER.logout} />
        <Text variant="default-body">
          <Trans i18nKey="general.logout" />
        </Text>
      </Pressable>

      <TwoButtonModal
        title={t('account.confirm_modal.title')}
        subtitle={t('account.confirm_modal.subtitle')}
        visible={showModal}
        showCloseBtn
        onCallbackClose={toggleModal}
        firstButtonProps={{
          text: t('account.confirm_modal.confirm'),
          onPress: handleLogout,
        }}
        secondButtonProps={{
          text: t('account.confirm_modal.cancel'),
          onPress: toggleModal,
        }}
      />
    </>
  );
};
