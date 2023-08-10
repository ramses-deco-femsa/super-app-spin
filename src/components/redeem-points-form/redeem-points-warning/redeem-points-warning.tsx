import React from 'react';

import {useTranslation} from 'react-i18next';

import {Disclaimer} from '@digitaltitransversal';
import {useRedeemPointsFormCtx} from '@sas/context';
import {COLORS} from '@sas/theme';
import {formatCurrency} from '@sas/utils';

export const RedeemPointsWarning = () => {
  const {minAmount, userPoints} = useRedeemPointsFormCtx();
  const {t} = useTranslation();

  if (userPoints >= minAmount) {
    return null;
  }

  return (
    <Disclaimer
      variant="custom"
      text={t('redeem_points.form.warning_minimum_amount', {
        currency: formatCurrency(minAmount / 10),
      })}
      icon={require('../../../ui/assets/Alert.png')}
      iconColor={COLORS.contextual_paused_content}
      backgroundColor={COLORS.contextual_paused_surface}
      textColor={COLORS.content_primary}
    />
  );
};
