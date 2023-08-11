import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import {Trans, useTranslation} from 'react-i18next';

import {Text, TextInput} from '@digitaltitransversal';
import {useRedeemPointsFormCtx} from '@sas/context';
import {formatCurrency, formatNumberWithCommas} from '@sas/utils';

import {styles} from './redeem-points-input.styles';

export const RedeemPointsInput = () => {
  const {
    minAmount,
    maxAmount,
    userPoints,
    pointsToRedeem,
    setPointsToRedeem,
    insufficientPointsToRedeemError,
    userPointsMinAmountError,
    pointsToRedeemMaxAmountError,
    shortcutButtons,
    invalidPointsToRedeem,
  } = useRedeemPointsFormCtx();
  const {t} = useTranslation();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setPointsToRedeem(inputValue);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  useEffect(() => {
    const hasBeenToggled = shortcutButtons.includes(pointsToRedeem);

    if (hasBeenToggled) {
      const amount = (pointsToRedeem / 10).toString();
      setInputValue(amount);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pointsToRedeem]);

  const buildErrorMessage = () => {
    if (pointsToRedeemMaxAmountError && userPoints >= maxAmount) {
      return t('redeem_points.form.input_maximum_error', {
        amount: formatCurrency(maxAmount / 10),
      });
    }

    if (insufficientPointsToRedeemError) {
      return t('redeem_points.form.input_insufficient_points_error', {
        amount: formatCurrency(userPoints / 10),
      });
    }

    return '';
  };

  const errorMessage = buildErrorMessage();

  return (
    <View>
      {shortcutButtons.length ? (
        <Text style={styles.otherLabel}>
          <Trans i18nKey="redeem_points.form.other" />
        </Text>
      ) : null}

      <TextInput
        testID="redeem-points-input"
        leftSection={<Text>$</Text>}
        editable={!userPointsMinAmountError}
        {...(errorMessage && {
          error: errorMessage,
        })}
        label={t('redeem_points.form.input_label')}
        value={inputValue}
        onChangeText={setInputValue}
        variant="numeric"
        placeholder={t('redeem_points.form.input_label')}
      />
      {!errorMessage && (
        <Text style={styles.hint}>
          <Trans
            i18nKey="redeem_points.form.input_minimum__hint"
            values={{amount: formatCurrency(minAmount / 10)}}
          />
        </Text>
      )}
      <Text style={styles.hint}>
        <Trans
          i18nKey="redeem_points.form.amount_to_points"
          values={{
            points: invalidPointsToRedeem
              ? '0'
              : formatNumberWithCommas(pointsToRedeem),
          }}
        />
      </Text>
    </View>
  );
};
