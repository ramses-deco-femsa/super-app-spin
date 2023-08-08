import React from 'react';

import {render} from '@test-utils';

import {
  MovementsUsedScreen,
  MovementsUsedScreenProps,
} from './movements-used-screen';

describe('<MovementsUsedScreen />', () => {
  it('should render MovementsUsedScreen', () => {
    // TODO: improve props passing data
    render(<MovementsUsedScreen {...({} as MovementsUsedScreenProps)} />);
  });
});
