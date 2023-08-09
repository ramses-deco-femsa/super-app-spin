import 'react-native';
import React from 'react';

import {BRAND_ENTITIES_DATA} from '@sas/__mocks__';
import {render, screen} from '@test-utils';

import {
  RedeemPointsScreen,
  RedeemPointsScreenProps,
} from './redeem-points-screen';

describe('<RedeemPointsScreen />', () => {
  const [brandEntity] = BRAND_ENTITIES_DATA;

  it('should render screen', () => {
    render(
      <RedeemPointsScreen
        {...({route: {params: {brandEntity}}} as RedeemPointsScreenProps)}
      />,
    );

    expect(screen.getByText(brandEntity.entity)).toBeDefined();
  });
});
