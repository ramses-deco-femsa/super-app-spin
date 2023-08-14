import React from 'react';
import {Image, Text, View} from 'react-native';

import {useTranslation} from 'react-i18next';

import {s} from './accumulate-points.styles';

export const AccumulatePoints = () => {
  const {t} = useTranslation();
  return (
    <View
      style={{
        marginTop: 40,
        justifyContent: 'center',
      }}>
      <Text style={s.title}>{t('accumulatePoints')}</Text>
      <Text style={s.description}>
        {t('verySoonYoWillBeAbleToAccumulateYouPoints')}
      </Text>
      <Text style={{...s.description, marginTop: 0}}>
        {t('winFreeProducts')}
      </Text>
      <Image
        style={{alignSelf: 'center', marginTop: 15}}
        source={require('../../ui/assets/Media/gift-points.png')}
      />
    </View>
  );
};
