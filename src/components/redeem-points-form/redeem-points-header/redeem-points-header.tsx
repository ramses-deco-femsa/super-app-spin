import React from 'react';
import {Image, View} from 'react-native';

import {Trans, useTranslation} from 'react-i18next';

import {Chip, Text} from '@digitaltitransversal';
import {useRedeemPointsFormCtx} from '@sas/context';
import {COLORS} from '@sas/theme';
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
          <Image
            source={require('../../../ui/assets/info.png')}
            style={styles.infoIcon}
          />
        </View>
      </View>
      <Chip
        text={t('redeem_points.form.score', {
          amount: formatCurrency(userPoints / 10),
        })}
        disabled
        backgroundColor={COLORS.contextual_points_surface}
        borderColor={COLORS.contextual_points_surface}
        textStyle={styles.chipText}
        leftIcon={require('../../../ui/assets/spark-premia-icon.png')}
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
