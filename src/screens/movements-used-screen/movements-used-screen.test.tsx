import React from 'react';

import {render, screen} from '@test-utils';

import {
  MovementsUsedScreen,
  MovementsUsedScreenProps,
} from './movements-used-screen';

describe('<MovementsUsedScreen />', () => {
  it('should render MovementsUsedScreen', () => {
    // TODO: improve props passing data
    render(<MovementsUsedScreen {...({} as MovementsUsedScreenProps)} />);
    expect(screen.getByText(/0/i)).toBeDefined();
  });
});
