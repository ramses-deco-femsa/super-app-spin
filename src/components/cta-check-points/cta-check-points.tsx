import React, {FC} from 'react';
import {Image, Platform, Text, View, useWindowDimensions} from 'react-native';

import {useTranslation} from 'react-i18next';

import BaseCard from '@sas/ui/components/Card/components/BaseCard';

import {s} from './cta-check-points.styles';

interface CheckPointProps {
  onPress: () => void;
}

export const CtaCheckPoints: FC<CheckPointProps> = ({onPress}) => {
  const {width} = useWindowDimensions();
  const cardWidth = width / 2 - 60;
  const cardWithAndroid = width / 2 - 50;
  const {t} = useTranslation();

  return (
    <View style={s.cardsCtaContainer}>
      <BaseCard
        style={{
          ...s.baseCard,
          width: Platform.OS === 'ios' ? cardWidth : cardWithAndroid,
          marginRight: 8,
        }}
        onPress={onPress}>
        <View style={s.contentCard}>
          <Image source={require('../../ui/assets/Media/history-card.png')} />
          <Text style={s.titleCard}>{t('check')}</Text>
          <Text style={s.titleCard}>{t('yourHistory')}</Text>
        </View>
      </BaseCard>
      <BaseCard
        style={{
          ...s.baseCard,
          width: Platform.OS === 'ios' ? cardWidth : cardWithAndroid,
          marginLeft: 8,
        }}
        onPress={onPress}>
        <View style={s.contentCard}>
          <Image source={require('../../ui/assets/Media/star.png')} />
          <Text style={s.titleCard}>{t('changePoints')}</Text>
        </View>
      </BaseCard>
    </View>
  );
};
