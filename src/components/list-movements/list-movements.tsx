import React from 'react';
import {View, Text, SectionList, SectionListData, Image} from 'react-native';

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

const EmptyListMovements = () => (
  <View testID="empty-list-movements" style={s.emptyContainer}>
    <Image
      source={require('../../../assets/images/empty-list.png')}
      style={s.emptyImage}
    />
    <Text style={s.emptyText}>
      <Trans i18nKey="movements.list.empty" />
    </Text>
  </View>
);

export const ListMovements = ({data}: ListMovementsProps) => {
  const {navigate} = useNavigation<StackNavigationProps>();

  return (
    <SectionList
      contentContainerStyle={s.contentContainer}
      sections={data}
      keyExtractor={item => `${item.id}`}
      ListEmptyComponent={EmptyListMovements}
      renderItem={({item: movement}) => (
        <ListMovementItem
          movement={movement}
          onPress={() => navigate(RouteNames.MovementDetailScreen, {movement})}
        />
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={s.title}>
          <Trans i18nKey={title} />
        </Text>
      )}
    />
  );
};
