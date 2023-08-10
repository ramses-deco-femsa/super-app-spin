import React from 'react';
import {View, Button, Text} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';

import {useAppCtx} from '@sas/context';
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
  const {createMovement} = useAppCtx();

  return (
    <View>
      <Text>{brandEntity.entity}</Text>
      <Button
        onPress={async () => {
          try {
            const movement = await createMovement({
              entity: brandEntity.entity,
              points: 150,
            });

            navigation.navigate(RouteNames.RedeemPointsSuccessfulScreen, {
              movement,
            });
          } catch (err) {
            console.log(err);
          }
        }}
        title="change points"
      />
    </View>
  );
};
