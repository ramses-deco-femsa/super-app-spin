import React from 'react';
import {View, Button, Text} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';

import {MOVEMENTS_DATA} from '@sas/__mocks__';
import {RootStackParamList, RouteNames} from '@sas/navigation/navigation.types';

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
  return (
    <View>
      <Text>{brandEntity.entity}</Text>
      <Button
        onPress={() =>
          navigation.navigate(RouteNames.RedeemPointsSuccessfulScreen, {
            movement: MOVEMENTS_DATA[0],
          })
        }
        title="change points"
      />
    </View>
  );
};
