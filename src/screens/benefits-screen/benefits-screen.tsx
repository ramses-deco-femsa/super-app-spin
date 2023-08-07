import React from 'react';
import {View} from 'react-native';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import {Button, Text} from '@digitaltitransversal';
import {MainContainer} from '@sas/components';
import {RootStackParamList, RouteNames} from '@sas/navigation/navigation.types';

export type BenefitsScreenProps = BottomTabScreenProps<RootStackParamList>;

export const BenefitsScreen = (_props: BenefitsScreenProps) => {
  return (
    <MainContainer>
      <View>
        <Text>BenefitssScreen</Text>
      </View>
      <Button
        text="Consulta tu historial"
        onPress={() => _props.navigation.navigate(RouteNames.MovementsScreen)}
      />
    </MainContainer>
  );
};
