import React from 'react';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';

import {Text} from '@digitaltitransversal';
import {
  AccumulatePoints,
  CheckPoints,
  CtaCheckPoints,
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
      <CtaCheckPoints
        onPress={() => _props.navigation.navigate(RouteNames.MovementsScreen)}
      />
      <AccumulatePoints />
    </MainContainer>
  );
};
