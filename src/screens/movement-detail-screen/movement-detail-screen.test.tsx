import React from 'react';

import {MOVEMENTS_DATA} from '@sas/__mocks__';
import {render, screen} from '@test-utils';

import {
  MovementDetailScreen,
  MovementDetailScreenProps,
} from './movement-detail-screen';

describe('<MovementDetailScreen />', () => {
  it('should render MovementDetailScreen', () => {
    // TODO: improve props passing data
    render(
      <MovementDetailScreen
        {...({
          route: {params: {movement: MOVEMENTS_DATA[0]}},
        } as MovementDetailScreenProps)}
      />,
    );

    expect(screen.getByTestId('movement-detai')).toBeDefined();
  });
});
