import React from 'react';
import {ScrollView} from 'react-native';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import {
  AccumulatePoints,
  RewardsPoints,
  CheckPoints,
  CtaCheckPoints,
  EarnMorePoints,
  MainContainer,
  AdvertisingSlider,
} from '@sas/components';
import {RootStackParamList} from '@sas/navigation/navigation.types';

export type BenefitsScreenProps = BottomTabScreenProps<RootStackParamList>;

export const BenefitsScreen = (_props: BenefitsScreenProps) => {
  return (
    <MainContainer>
      <ScrollView>
        <CheckPoints />
        <CtaCheckPoints />
        <AccumulatePoints />
        <EarnMorePoints />
        <RewardsPoints />
        <AdvertisingSlider />
      </ScrollView>
    </MainContainer>
  );
};
