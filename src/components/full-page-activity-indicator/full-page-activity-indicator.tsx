import React from 'react';
import {View} from 'react-native';

import {Spinner} from '@digitaltitransversal';

import {s} from './full-page-activity-indicator.styles';

export const FullPageActivityIndicator = () => (
  <View style={s.container}>
    <Spinner testID="spinner" />
  </View>
);
