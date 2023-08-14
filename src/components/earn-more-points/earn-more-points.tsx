import React from 'react';
import {Image, View} from 'react-native';

import {useTranslation} from 'react-i18next';

import {Text} from '@digitaltitransversal';

import {s} from './earn-more-points.styles';

export const EarnMorePoints = () => {
  const {t} = useTranslation();
  return (
    <View
      style={{
        marginTop: 40,
        justifyContent: 'center',
      }}>
      <Text style={s.title}>{t('earnMorePoints')}</Text>
      <Text style={s.description}>
        {t('verySoonYouWillBeAbleToEarnMorePointsInTheTotalOfYourPurchase')}
      </Text>
      <Image
        style={{alignSelf: 'center', marginTop: 15}}
        source={require('../../ui/assets/Media/star-points.png')}
      />
    </View>
  );
};
