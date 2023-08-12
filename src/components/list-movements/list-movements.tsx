import React from 'react';
import {View, Text, SectionList, SectionListData, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {Trans} from 'react-i18next';

import {Spinner} from '@digitaltitransversal';
import {ASSETS_MAPPER} from '@sas/constants';
import {
  RouteNames,
  StackNavigationProps,
} from '@sas/navigation/navigation.types';
import type {Movement} from '@sas/types';

import {s} from './list-movements.styles';
import {ListMovementItem} from '../list-movement-item';

type ListMovementsProps = {
  data: ReadonlyArray<SectionListData<Movement>>;
  fetching: boolean;
  hasMoreData: boolean;
  loadMoreData?: () => void;
  pullToRefresh?: () => void;
};

export const ListMovements = ({
  data,
  fetching,
  hasMoreData,
  loadMoreData = () => null,
  pullToRefresh = () => null,
}: ListMovementsProps) => {
  const {navigate} = useNavigation<StackNavigationProps>();

  return (
    <SectionList
      contentContainerStyle={s.contentContainer}
      sections={data}
      keyExtractor={item => `${item.id}`}
      ListEmptyComponent={<EmptyListMovements loading={fetching} />}
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
      onRefresh={pullToRefresh}
      refreshing={fetching}
      onEndReached={() => (hasMoreData ? loadMoreData() : null)}
      ListFooterComponent={<ListMovementsFooter loading={fetching} />}
    />
  );
};

type EmptyListMovementsProps = {loading: boolean};
const EmptyListMovements = ({loading}: EmptyListMovementsProps) => {
  if (loading) {
    return null;
  }

  return (
    <View testID="empty-list-movements" style={s.emptyContainer}>
      <Image source={ASSETS_MAPPER.empty_movement_list} style={s.emptyImage} />
      <Text style={s.emptyText}>
        <Trans i18nKey="movements.list.empty" />
      </Text>
    </View>
  );
};

type ListMovementsFooterProps = {loading: boolean};

const ListMovementsFooter = ({loading}: ListMovementsFooterProps) => {
  if (!loading) {
    return null;
  }

  return <Spinner testID="movement-list-spinner" size="large" />;
};
