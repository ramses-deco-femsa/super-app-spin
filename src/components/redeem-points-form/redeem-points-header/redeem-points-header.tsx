import React from 'react';
import {Image, View} from 'react-native';

import {Trans, useTranslation} from 'react-i18next';

import {PointsTag, Text} from '@digitaltitransversal';
import {ASSETS_MAPPER} from '@sas/constants';
import {useRedeemPointsFormCtx} from '@sas/context';
import {formatCurrency, formatNumberWithCommas} from '@sas/utils';

import {styles} from './redeem-points-header.styles';

export const RedeemPointsHeader = () => {
  const {userPoints, shortcutButtons} = useRedeemPointsFormCtx();
  const {t} = useTranslation();

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsText}>
            <Trans
              i18nKey="redeem_points.form.points"
              values={{points: formatNumberWithCommas(userPoints)}}
            />
          </Text>
          <Image source={ASSETS_MAPPER.info_icon} style={styles.infoIcon} />
        </View>
      </View>
      <PointsTag
        size="large"
        leftIcon={ASSETS_MAPPER.spark_premia_icon}
        text={t('redeem_points.form.score', {
          amount: formatCurrency(userPoints / 10),
        })}
      />
      <View style={styles.divider} />
      <Text>
        <Trans
          i18nKey={`redeem_points.form.${
            shortcutButtons.length === 0
              ? 'description'
              : 'description_with_shortcuts'
          }`}
        />
      </Text>
    </View>
  );
};
