import React from 'react';
import {Image, View} from 'react-native';

import {useTranslation} from 'react-i18next';

import {Text} from '@digitaltitransversal';

import {s} from './rewards-points.styles';

export const RewardsPoints = () => {
  const {t} = useTranslation();
  return (
    <View
      style={{
        marginTop: 40,
        justifyContent: 'center',
      }}>
      <Text style={s.title}>{t('addToBuying')}</Text>
      <Text style={s.description}>
        {t('verySoonYouWillBeAbleToAccumulatePurchasesAndTakeGiftProducts')}
      </Text>
      <Image
        style={{alignSelf: 'center', marginTop: 15}}
        source={require('../../ui/assets/Media/rewards-points.png')}
      />
    </View>
  );
};
