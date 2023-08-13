import React from 'react';
import {Image, View} from 'react-native';

import {ASSETS_MAPPER} from '@sas/constants';

import {styles} from './splash-screen.styles';

export const SplashScreen = () => (
  <View testID="splash-screen-container" style={styles.container}>
    <Image source={ASSETS_MAPPER.splash_bg} style={styles.splash} />
    <Image source={ASSETS_MAPPER.splin_plus_logo} style={styles.spinPlusLogo} />
  </View>
);
