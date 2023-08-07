import 'react-native';
import React from 'react';

import {render, screen} from '@testing-library/react-native';

import {HomeScreen, HomeScreenProps} from './home-screen';

describe('<HomeScreen />', () => {
  it('should render HomeScreen', () => {
    // TODO: improve props passing data
    render(<HomeScreen {...({} as HomeScreenProps)} />);
    expect(screen.getByText(/HomeScreen/i)).toBeDefined();
  });
});
