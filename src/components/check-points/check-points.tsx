import React from 'react';
import {Image, View} from 'react-native';

import {useTranslation} from 'react-i18next';

import {Text} from '@digitaltitransversal';
import {useAppCtx} from '@sas/context';
import {formatCurrency, formatNumberWithCommas} from '@sas/utils';

import {s} from './check-points.styles';

export const CheckPoints = () => {
  const {user} = useAppCtx();
  const {t} = useTranslation();

  return (
    <View style={s.resumePointsContainer}>
      <View>
        <Text style={s.labelHeader}>{t('youHave')}</Text>
        <Text style={s.resumePoints}>
          {formatNumberWithCommas(user!.points)} {t('general.points')}
        </Text>
        <View style={s.pillContainer}>
          <View style={s.sparkIconContainer}>
            <Image
              style={s.iconDimensions}
              source={require('../../ui/assets/spark-premia-icon.png')}
            />
          </View>
          <Text style={s.conversionPointsText}>
            {t('score')} {formatCurrency(user!.points / 10)}
          </Text>
        </View>
      </View>
      <View>
        <Image source={require('../../ui/assets/Media/medal-points.png')} />
      </View>
    </View>
  );
};
