import React from 'react';
import {View, Text, SectionList, SectionListData} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {Trans} from 'react-i18next';

import {
  RouteNames,
  StackNavigationProps,
} from '@sas/navigation/navigation.types';
import type {Movement} from '@sas/types';

import {s} from './list-movements.styles';
import {ListMovementItem} from '../list-movement-item';

type ListMovementsProps = {
  data: ReadonlyArray<SectionListData<Movement>>;
};

export const ListMovements = ({data}: ListMovementsProps) => {
  const {navigate} = useNavigation<StackNavigationProps>();

  return (
    <SectionList
      sections={data}
      keyExtractor={item => `${item.id}`}
      renderItem={({item: movement}) => (
        <ListMovementItem
          movement={movement}
          onPress={() => navigate(RouteNames.MovementDetailScreen, {movement})}
        />
      )}
      renderSectionHeader={({section: {title}}) => (
        <View style={s.title}>
          <Text style={s.titleText}>
            <Trans i18nKey={title} />
          </Text>
        </View>
      )}
    />
  );
};
