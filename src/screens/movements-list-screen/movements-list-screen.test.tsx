import 'react-native';
import React from 'react';

import {render, screen} from '@test-utils';

import {
  MovementsListScreen,
  MovementsListScreenProps,
} from './movements-list-screen';

describe('<MovementsListScreen />', () => {
  it('should render MovementsListScreen', () => {
    // TODO: improve props passing data
    render(<MovementsListScreen {...({} as MovementsListScreenProps)} />);
    expect(screen.getByText(/MovementsListScreen/i)).toBeDefined();
  });
});
