import React from 'react';

import {StackScreenProps} from '@react-navigation/stack';

import {MovementDetail} from '@sas/components';
import {RootStackParamList, RouteNames} from '@sas/navigation/navigation.types';

export type MovementDetailScreenProps = StackScreenProps<
  RootStackParamList,
  RouteNames.MovementDetailScreen
>;

export const MovementDetailScreen = ({
  route: {
    params: {movement},
  },
}: MovementDetailScreenProps) => <MovementDetail movement={movement} />;
