import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import {s} from './full-page-activity-indicator.styles';

export const FullPageActivityIndicator = () => (
  <View style={s.container}>
    <ActivityIndicator testID="spinner" size="large" />
  </View>
);
