import React from 'react';
import {View, ScrollView} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';

import {Alert, Button} from '@digitaltitransversal';
import {RedeemPointsForm} from '@sas/components';
import {useAppCtx} from '@sas/context';
import {RootStackParamList, RouteNames} from '@sas/navigation/navigation.types';

import {styles} from './redeem-points-screen.styles';

export type RedeemPointsScreenProps = StackScreenProps<
  RootStackParamList,
  RouteNames.RedeemPointsScreen
>;

export const RedeemPointsScreen = ({
  route: {
    params: {brandEntity},
  },
  navigation,
}: RedeemPointsScreenProps) => {
  const {createMovement} = useAppCtx();

  const handleSubmit = async () => {
    try {
      const movement = await createMovement({
        entity: brandEntity.entity,
        points: 150,
      });

      navigation.navigate(RouteNames.RedeemPointsSuccessfulScreen, {
        movement,
      });
    } catch (err) {
      Alert.show({
        title: 'Something gone wrong',
        details: (err as Error).message,
        variant: 'error',
      });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}>
        <RedeemPointsForm>
          <RedeemPointsForm.Header />
          <RedeemPointsForm.Shortcuts />
          <RedeemPointsForm.Input />
          <RedeemPointsForm.Warning />
        </RedeemPointsForm>
      </ScrollView>
      <View style={styles.buttonFixed}>
        <Button onPress={handleSubmit} text="Continuar" variant="primary" />
      </View>
    </View>
  );
};
