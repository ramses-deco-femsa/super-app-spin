import React from 'react';
import {Image, Platform, Text, View, useWindowDimensions} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {Trans} from 'react-i18next';

import {
  RouteNames,
  StackNavigationProps,
} from '@sas/navigation/navigation.types';
import BaseCard from '@sas/ui/components/Card/components/BaseCard';

import {s} from './cta-check-points.styles';

export const CtaCheckPoints = () => {
  const {navigate} = useNavigation<StackNavigationProps>();

  const {width} = useWindowDimensions();
  const cardWidth = width / 2 - 60;
  const cardWithAndroid = width / 2 - 50;

  return (
    <View style={s.cardsCtaContainer}>
      <BaseCard
        style={{
          ...s.baseCard,
          width: Platform.OS === 'ios' ? cardWidth : cardWithAndroid,
          marginRight: 8,
        }}
        onPress={() => navigate(RouteNames.MovementsScreen)}>
        <View style={s.contentCard}>
          <Image source={require('../../ui/assets/Media/history-card.png')} />
          <Text style={s.titleCard}>
            <Trans i18nKey="check" />
          </Text>
          <Text style={s.titleCard}>
            <Trans i18nKey="yourHistory" />
          </Text>
        </View>
      </BaseCard>
      <BaseCard
        style={{
          ...s.baseCard,
          width: Platform.OS === 'ios' ? cardWidth : cardWithAndroid,
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
