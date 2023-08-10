import React from 'react';
import {View} from 'react-native';

import {BannerCarousel} from '@digitaltitransversal';
import {Banner} from '@sas/ui/components/molecules/BannerCarousel/types';

import {s} from './advertising-slider.styles';

export const AdvertisingSlider = () => {
  const banners: Banner[] = [
    {
      id: 1,
      title: 'Volaris',
      image: {
        uri: 'https://firebasestorage.googleapis.com/v0/b/femsa-af419.appspot.com/o/banner1.png?alt=media&token=ba2b6df3-1174-4618-b8a3-5f85e96038b6',
      },
      onPress: function () {
        console.log('Volaris');
      },
    },
    {
      id: 2,
      title: 'Andati',
      image: {
        uri: 'https://banners-tae.s3.amazonaws.com/spinplus-home-banner1-andatti.png',
      },
      onPress: function () {
        console.log('Andati');
      },
    },
    {
      id: 3,
      title: 'Volaris',
      image: {
        uri: 'https://firebasestorage.googleapis.com/v0/b/femsa-af419.appspot.com/o/banner1.png?alt=media&token=ba2b6df3-1174-4618-b8a3-5f85e96038b6',
      },
      onPress: function () {
        console.log('Volaris 2');
      },
    },
  ];
  return (
    <View style={s.cardContainerSlider}>
      <BannerCarousel
        variant="default"
        banners={banners}
        stepperPosition="left"
        bannerWidth={'100%'}
      />
    </View>
  );
};
