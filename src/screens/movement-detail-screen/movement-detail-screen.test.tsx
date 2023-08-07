import 'react-native';
import React from 'react';

import {render, screen} from '@test-utils';

import {
  MovementDetailScreen,
  MovementDetailScreenProps,
} from './movement-detail-screen';

describe('<MovementDetailScreen />', () => {
  it('should render MovementDetailScreen', () => {
    // TODO: improve props passing data
    render(<MovementDetailScreen {...({} as MovementDetailScreenProps)} />);
    expect(screen.getByText(/MovementDetailScreen/i)).toBeDefined();
  });
});
