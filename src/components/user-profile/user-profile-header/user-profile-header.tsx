import React from 'react';
import {View, Image} from 'react-native';

import {useTranslation} from 'react-i18next';

import {Text} from '@digitaltitransversal';
import {ASSETS_MAPPER} from '@sas/constants';
import {useAppCtx} from '@sas/context';
import PointsTag from '@sas/ui/components/atoms/Tag/PointsTag';
import {formatNumberWithCommas} from '@sas/utils';

import {styles} from './user-profile-header.styles';

export const UserProfileHeader = () => {
  const {user} = useAppCtx();
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Text variant="headline-large">{user!.name}</Text>
        <PointsTag
          size="small"
          leftIcon={ASSETS_MAPPER.spark_premia_icon}
          text={t('redeem_points.form.points', {
            points: formatNumberWithCommas(user!.points / 10),
          })}
        />
      </View>
      <Image style={styles.handIcon} source={ASSETS_MAPPER.spin_plus_hand} />
    </View>
  );
};
