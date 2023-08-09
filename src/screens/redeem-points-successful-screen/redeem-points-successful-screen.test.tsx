import 'react-native';
import React from 'react';

import {MOVEMENTS_DATA} from '@sas/__mocks__';
import {render, screen} from '@test-utils';

import {
  RedeemPointsSuccessfulScreen,
  RedeemPointsSuccessfulScreenProps,
} from './redeem-points-successful-screen';

describe('<RedeemPointsSuccessfulScreen />', () => {
  const [movement] = MOVEMENTS_DATA;

  it('should render screen', () => {
    render(
      <RedeemPointsSuccessfulScreen
        {...({
          route: {params: {movement}},
        } as RedeemPointsSuccessfulScreenProps)}
      />,
    );

    expect(screen.getByText(movement.entity)).toBeDefined();
  });
});
