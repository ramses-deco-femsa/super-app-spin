import React from 'react';
import {Text, View, SectionList, SectionListData} from 'react-native';

import {Trans} from 'react-i18next';

import {Movement} from '@sas/types';

type ListMovementsProps = {
  data: ReadonlyArray<SectionListData<Movement>>;
};

export const ListMovements = ({data}: ListMovementsProps) => (
  <SectionList
    sections={data}
    keyExtractor={item => `${item.id}`}
    renderItem={({item: movement}) => (
      <View>
        <Text>{movement.points}</Text>
      </View>
    )}
    renderSectionHeader={({section: {title}}) => (
      <Text>
        <Trans i18nKey={title} />
      </Text>
    )}
  />
);
