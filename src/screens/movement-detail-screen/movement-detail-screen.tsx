import React from 'react';
import {View, Text, Button} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParamList, RouteNames} from '@sas/navigation/navigation.types';

export type MovementDetailScreenProps = StackScreenProps<RootStackParamList>;

export const MovementDetailScreen = ({
  navigation,
}: MovementDetailScreenProps) => (
  <View>
    <Text>MovementDetailScreen</Text>
    <Button
      onPress={() => navigation.navigate(RouteNames.AccountTab)}
      title="go to account"
    />
  </View>
);
