import React from 'react';

import {StackScreenProps} from '@react-navigation/stack';

import {MovementDetail} from '@sas/components';
import {RootStackParamList, RouteNames} from '@sas/navigation/navigation.types';

export type RedeemPointsSuccessfulScreenProps = StackScreenProps<
  RootStackParamList,
  RouteNames.RedeemPointsSuccessfulScreen
>;

export const RedeemPointsSuccessfulScreen = ({
  route: {
    params: {movement},
  },
}: RedeemPointsSuccessfulScreenProps) => {
  return <MovementDetail movement={movement} />;
};
