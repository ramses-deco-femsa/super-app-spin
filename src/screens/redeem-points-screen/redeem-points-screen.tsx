import React, {useRef} from 'react';
import {View, ScrollView} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';

import {Button, SnackBar} from '@digitaltitransversal';
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
      const movement = await createMovement({
        entity: brandEntity.entity,
        points: redeemPointsFormRef.current!.pointsToRedeem,
      });

      SnackBar.show({
        text: t('redeem_points.form.redeem_points_success_message'),
        variant: 'info',
        withIcon: true,
        iconName: 'icon-send',
        duration: 4000,
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
      SnackBar.show({
        text: (err as Error).message,
        variant: 'error',
        withIcon: true,
        iconName: 'icon-close',
        duration: 4000,
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
                testID="redeem-points-btn-submit"
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
