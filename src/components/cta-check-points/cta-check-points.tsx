import React from 'react';
import {Image, View, useWindowDimensions} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {Trans, useTranslation} from 'react-i18next';

import {Text} from '@digitaltitransversal';
import {
  RouteNames,
  StackNavigationProps,
} from '@sas/navigation/navigation.types';
import BaseCard from '@sas/ui/components/Card/components/BaseCard';

import {s} from './cta-check-points.styles';

export const CtaCheckPoints = () => {
  const {navigate} = useNavigation<StackNavigationProps>();
  const {t} = useTranslation();

  const {width} = useWindowDimensions();
  const cardWidth = width / 2 - 24;

  return (
    <View style={s.cardsCtaContainer}>
      <BaseCard
        style={{
          ...s.baseCard,
          width: cardWidth,
          marginRight: 8,
        }}
        onPress={() => navigate(RouteNames.MovementsScreen)}>
        <View style={s.contentCard}>
          <Image source={require('../../ui/assets/Media/history-card.png')} />
          <Text style={s.titleCard}>{t('check')}</Text>
          <Text style={s.titleCard}>{t('yourHistory')}</Text>
        </View>
      </BaseCard>
      <BaseCard
        style={{
          ...s.baseCard,
          width: cardWidth,
          marginLeft: 8,
        }}
        onPress={() => navigate(RouteNames.ChooseBrandEntityScreen)}>
        <View style={s.contentCard}>
          <Image source={require('../../ui/assets/Media/star.png')} />
          <Text style={s.titleCard}>
            <Trans i18nKey="changePoints" />
          </Text>
        </View>
      </BaseCard>
    </View>
  );
};
