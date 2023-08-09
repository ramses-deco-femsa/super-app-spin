import React from 'react';
import {ScrollView} from 'react-native';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';

import {Text} from '@digitaltitransversal';
import {
  AccumulatePoints,
  RewardsPoints,
  CheckPoints,
  CtaCheckPoints,
  EarnMorePoints,
  MainContainer,
} from '@sas/components';
import {RootStackParamList, RouteNames} from '@sas/navigation/navigation.types';

import {s} from './benefits-screen.styles';

export type BenefitsScreenProps = BottomTabScreenProps<RootStackParamList>;

export const BenefitsScreen = (_props: BenefitsScreenProps) => {
  const {t} = useTranslation();
  return (
    <MainContainer>
      <Text style={s.titleBenefits}>{t('benefits')}</Text>
      <CheckPoints />
      <ScrollView>
        <CtaCheckPoints
          onPress={() => _props.navigation.navigate(RouteNames.MovementsScreen)}
        />
        <AccumulatePoints />
        <EarnMorePoints />
        <RewardsPoints />
      </ScrollView>
    </MainContainer>
  );
};
