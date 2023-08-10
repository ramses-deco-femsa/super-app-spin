import React, {useRef} from 'react';
import {View, ScrollView} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';

import {Alert, Button} from '@digitaltitransversal';
import {RedeemPointsForm} from '@sas/components';
import {RedeemPointsFormConsumer, useAppCtx} from '@sas/context';
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
  const formRef = useRef<{
    pointsToRedeem: number;
    isValid: boolean;
  }>();

  const handleSubmit = async () => {
    try {
      if (!formRef.current?.isValid) {
        return;
      }

      const movement = await createMovement({
        entity: brandEntity.entity,
        points: formRef.current!.pointsToRedeem,
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

          <RedeemPointsFormConsumer>
            {({pointsToRedeem, isValidForm}) => {
              formRef.current = {pointsToRedeem, isValid: isValidForm};
              return null;
            }}
          </RedeemPointsFormConsumer>
        </RedeemPointsForm>
      </ScrollView>
      <View style={styles.buttonFixed}>
        <Button onPress={handleSubmit} text="Continuar" variant="primary" />
      </View>
    </View>
  );
};
