import React from 'react';
import {View, Text, Button} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';

import {PrefetchLoaderNavigator} from '@sas/components';
import {useAppCtx} from '@sas/context';
import {RootStackParamList, RouteNames} from '@sas/navigation/navigation.types';

export type ChooseBrandEntityScreenProps = StackScreenProps<RootStackParamList>;

export const ChooseBrandEntityScreen = ({
  navigation,
}: ChooseBrandEntityScreenProps) => {
  const {brandEntities, getBrandEntities} = useAppCtx();

  return (
    <PrefetchLoaderNavigator
      action={getBrandEntities}
      error={brandEntities.error}
      loading={brandEntities.loading}>
      <View>
        <Text>{brandEntities.data.length}</Text>

        {brandEntities.data.length ? (
          <Button
            onPress={() =>
              navigation.navigate(RouteNames.RedeemPointsScreen, {
                brandEntity: brandEntities.data[0],
              })
            }
            title="go to balance"
          />
        ) : null}
      </View>
    </PrefetchLoaderNavigator>
  );
};
