import 'react-native';
import React from 'react';

import {render, screen} from '@testing-library/react-native';

import {
  MovementsUsedScreen,
  MovementsUsedScreenProps,
} from './movements-used-screen';

describe('<MovementsUsedScreen />', () => {
  it('should render MovementsUsedScreen', () => {
    // TODO: improve props passing data
    render(<MovementsUsedScreen {...({} as MovementsUsedScreenProps)} />);
    expect(screen.getByText(/MovementsUsedScreen/i)).toBeDefined();
  });
});
