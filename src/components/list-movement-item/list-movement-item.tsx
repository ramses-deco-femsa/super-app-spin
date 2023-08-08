import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
} from 'react-native';

import {MOVEMENTS_ICON_MAPPER} from '@sas/constants';
import type {Movement} from '@sas/types';
import {formatDate} from '@sas/utils';

import {s} from './list-movement-item.styles';

type ListMovementItemProps = {
  movement: Movement;
  onPress: TouchableOpacityProps['onPress'];
};

export const ListMovementItem = ({
  movement,
  onPress,
}: ListMovementItemProps) => (
  <TouchableOpacity
    testID="list-item-button"
    onPress={onPress}
    style={s.container}>
    <View>
      <Image style={s.image} source={MOVEMENTS_ICON_MAPPER[movement.entity]} />
    </View>
    <View style={s.content}>
      <View style={s.textContainer}>
        <Text style={s.title}>{movement.entity}</Text>
        <Text style={s.date}>{formatDate(movement.date)}</Text>
      </View>
      <View>
        <Text style={s.points}>+ {movement.points}</Text>
      </View>
    </View>
  </TouchableOpacity>
);
