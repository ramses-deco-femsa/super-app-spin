import React from 'react';

import {render, screen} from '@test-utils';

import {FullPageActivityIndicator} from './full-page-activity-indicator';

describe('<FullPageActivityIndicator />', () => {
  it('should render FullPageActivityIndicator', () => {
    render(<FullPageActivityIndicator />);
    expect(screen.getByTestId('spinner')).toBeDefined();
  });
});
