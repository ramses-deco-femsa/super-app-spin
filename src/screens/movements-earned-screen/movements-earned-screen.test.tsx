import React from 'react';

import {render, screen} from '@test-utils';

import {
  MovementsEarnedScreen,
  MovementsEarnedScreenProps,
} from './movements-earned-screen';

describe('<MovementsEarnedScreen />', () => {
  it('should render MovementsEarnedScreen', () => {
    // TODO: improve props passing data
    render(<MovementsEarnedScreen {...({} as MovementsEarnedScreenProps)} />);
    expect(screen.getByText(/0/i)).toBeDefined();
  });
});
