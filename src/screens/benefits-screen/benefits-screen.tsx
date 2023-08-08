import React from 'react';
import {View} from 'react-native';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';

import {Text} from '@digitaltitransversal';
import {CheckPoints, CtaCheckPoints, MainContainer} from '@sas/components';
import {RootStackParamList, RouteNames} from '@sas/navigation/navigation.types';

export type BenefitsScreenProps = BottomTabScreenProps<RootStackParamList>;

export const BenefitsScreen = (_props: BenefitsScreenProps) => {
  const {t} = useTranslation();
  return (
    <MainContainer>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
          }}>
          {t('benefits')}
        </Text>
        <CheckPoints />
        <CtaCheckPoints
          onPress={() => _props.navigation.navigate(RouteNames.MovementsScreen)}
        />
      </View>
    </MainContainer>
  );
};
