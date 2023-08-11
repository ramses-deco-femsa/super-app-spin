import React, {useState} from 'react';
import {Image, Pressable} from 'react-native';

import {Trans, useTranslation} from 'react-i18next';

import {Text, TwoButtonModal} from '@digitaltitransversal';
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
          onPress: logout,
        }}
        secondButtonProps={{
          text: t('account.confirm_modal.cancel'),
          onPress: toggleModal,
        }}
      />
    </>
  );
};
