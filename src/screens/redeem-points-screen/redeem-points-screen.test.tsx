import 'react-native';
import React from 'react';

import {BRAND_ENTITIES_DATA, USER_DATA} from '@sas/__mocks__';
import {render, screen} from '@test-utils';

import {
  RedeemPointsScreen,
  RedeemPointsScreenProps,
} from './redeem-points-screen';

describe('<RedeemPointsScreen />', () => {
  const [brandEntity] = BRAND_ENTITIES_DATA;

  it('should render redeem-points-form component', () => {
    render(
      <RedeemPointsScreen
        {...({route: {params: {brandEntity}}} as RedeemPointsScreenProps)}
      />,
      {
        contextState: {
          user: USER_DATA,
        },
      },
    );

    expect(screen.getByTestId('redeem-points-form')).toBeDefined();
  });
});
