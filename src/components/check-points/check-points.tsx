import React from 'react';
import {Image, Text, View} from 'react-native';

import {useTranslation} from 'react-i18next';

import {s} from './check-points.styles';

export const CheckPoints = () => {
  const {t} = useTranslation();

  return (
    <View style={s.resumePointsContainer}>
      <View>
        <Text style={s.labelHeader}>{t('youHave')}</Text>
        <Text style={s.resumePoints}>
          10,657 {t('points').toLocaleLowerCase()}
        </Text>
        <View style={s.pillContainer}>
          <View style={s.sparkIconContainer}>
            <Image
              style={s.iconDimensions}
              source={require('../../ui/assets/spark-premia-icon.png')}
            />
          </View>
          <Text style={s.conversionPointsText}>{t('score')} $156.00</Text>
        </View>
      </View>
      <View>
        <Image source={require('../../ui/assets/Media/medal-points.png')} />
      </View>
    </View>
  );
};
