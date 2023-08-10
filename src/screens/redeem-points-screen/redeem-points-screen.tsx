import React, {useRef} from 'react';
import {View, ScrollView} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';

import {Alert, Button} from '@digitaltitransversal';
import {
  RedeemPointsForm,
  RedeemPointsFormRef,
  RedeemPointsFormWrapper,
} from '@sas/components';
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
  const {t} = useTranslation();
  const redeemPointsFormRef = useRef<RedeemPointsFormRef | null>(null);

  const handleSubmit = async () => {
    try {
      if (!redeemPointsFormRef.current!.isValidForm) {
        return;
      }

      const movement = await createMovement({
        entity: brandEntity.entity,
        points: redeemPointsFormRef.current!.pointsToRedeem,
      });

      navigation.reset({
        index: 1,
        routes: [
          {
            name: RouteNames.HomeScreen,
            state: {routes: [{name: RouteNames.BenefitsTab}]},
          },
          {
            name: RouteNames.RedeemPointsSuccessfulScreen,
            params: {movement},
          },
        ],
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
    <RedeemPointsFormWrapper>
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContent}>
          <RedeemPointsForm ref={redeemPointsFormRef}>
            <RedeemPointsForm.Header />
            <RedeemPointsForm.Shortcuts />
            <RedeemPointsForm.Input />
            <RedeemPointsForm.Warning />
          </RedeemPointsForm>
        </ScrollView>
        <View style={styles.buttonFixed}>
          <RedeemPointsFormConsumer>
            {({isValidForm}) => (
              <Button
                disabled={!isValidForm}
                onPress={handleSubmit}
                text={t('redeem_points.form.continue')}
                variant="primary"
              />
            )}
          </RedeemPointsFormConsumer>
        </View>
      </View>
    </RedeemPointsFormWrapper>
  );
};
