import React, {FC} from 'react';
import {Text} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';

import {PrefetchLoaderNavigator} from '@sas/components';
import {useAppCtx} from '@sas/context';
import {RootStackParamList} from '@sas/navigation/navigation.types';

export type ChooseBrandEntityScreenProps = StackScreenProps<RootStackParamList>;

export const ChooseBrandEntityScreen: FC<ChooseBrandEntityScreenProps> = () => {
  const {brandEntities, getBrandEntities} = useAppCtx();

  return (
    <PrefetchLoaderNavigator
      action={getBrandEntities}
      error={brandEntities.error}
      loading={brandEntities.loading}>
      <Text>{brandEntities.data.length}</Text>
    </PrefetchLoaderNavigator>
  );
};
