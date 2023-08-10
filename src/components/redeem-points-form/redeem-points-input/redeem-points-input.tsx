import React from 'react';
import {View} from 'react-native';

import {Trans, useTranslation} from 'react-i18next';

import {Text, TextInput} from '@digitaltitransversal';
import {useRedeemPointsFormCtx} from '@sas/context';
import {formatCurrency} from '@sas/utils';

import {styles} from './redeem-points-input.styles';

export const RedeemPointsInput = () => {
  const {minAmount, maxAmount, pointsToRedeem, userPoints, setPointsToRedeem} =
    useRedeemPointsFormCtx();
  const {t} = useTranslation();

  const hasMinError = userPoints < minAmount;
  const hasMaxError = pointsToRedeem > maxAmount;

  return (
    <View>
      <TextInput
        editable={!hasMinError}
        {...(hasMaxError && {
          error: t('redeem_points.form.input_maximum_hint', {
            amount: formatCurrency(maxAmount / 10),
          }),
        })}
        label={t('redeem_points.form.input_label')}
        value={(pointsToRedeem / 10).toString()}
        onChangeText={text => {
          // NOTE: improve mask
          if (/^\d+$/.test(text)) {
            setPointsToRedeem(text);
          }
        }}
        variant="numeric"
        placeholder={t('redeem_points.form.input_label')}
      />
      {!hasMaxError && (
        <Text style={styles.hint}>
          <Trans
            i18nKey="redeem_points.form.input_minimum__hint"
            values={{amount: formatCurrency(minAmount / 10)}}
          />
        </Text>
      )}
    </View>
  );
};
