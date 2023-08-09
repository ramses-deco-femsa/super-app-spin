import React, {FC} from 'react';
import {ScrollView} from 'react-native';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {Trans} from 'react-i18next';

import {Text} from '@digitaltitransversal';
import {
  AccumulatePoints,
  RewardsPoints,
  CheckPoints,
  CtaCheckPoints,
  EarnMorePoints,
  MainContainer,
} from '@sas/components';
import {RootStackParamList} from '@sas/navigation/navigation.types';

import {s} from './benefits-screen.styles';

export type BenefitsScreenProps = BottomTabScreenProps<RootStackParamList>;

export const BenefitsScreen: FC<BenefitsScreenProps> = () => {
  return (
    <MainContainer>
      <Text style={s.titleBenefits}>
        <Trans i18nKey="benefits" />
      </Text>
      <CheckPoints />
      <ScrollView>
        <CtaCheckPoints />
        <AccumulatePoints />
        <EarnMorePoints />
        <RewardsPoints />
      </ScrollView>
    </MainContainer>
  );
};
