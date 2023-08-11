import React from 'react';

import {useTranslation} from 'react-i18next';

import {Disclaimer} from '@digitaltitransversal';
import {ASSETS_MAPPER} from '@sas/constants';
import {useRedeemPointsFormCtx} from '@sas/context';
import {COLORS} from '@sas/theme';
import {formatCurrency} from '@sas/utils';

export const RedeemPointsWarning = () => {
  const {userPointsMinAmountError, minAmount} = useRedeemPointsFormCtx();
  const {t} = useTranslation();

  if (!userPointsMinAmountError) {
    return null;
  }

  return (
    <Disclaimer
      testID="redeem-points-warning"
      variant="custom"
      text={t('redeem_points.form.warning_minimum_amount', {
        currency: formatCurrency(minAmount / 10),
      })}
      icon={ASSETS_MAPPER.alert_icon}
      iconColor={COLORS.contextual_paused_content}
      backgroundColor={COLORS.contextual_paused_surface}
      textColor={COLORS.content_primary}
    />
  );
};
