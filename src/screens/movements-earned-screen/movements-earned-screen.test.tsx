import 'react-native';
import React from 'react';

import {render, screen} from '@testing-library/react-native';

import {
  MovementsEarnedScreen,
  MovementsEarnedScreenProps,
} from './movements-earned-screen';

describe('<MovementsEarnedScreen />', () => {
  it('should render MovementsEarnedScreen', () => {
    // TODO: improve props passing data
    render(<MovementsEarnedScreen {...({} as MovementsEarnedScreenProps)} />);
    expect(screen.getByText(/MovementsEarnedScreen/i)).toBeDefined();
  });
});
