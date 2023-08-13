import React from 'react';

import {render, screen} from '@test-utils';

import {SplashScreen} from './splash-screen';

describe('<SplashScreen />', () => {
  it('should render splash screen', () => {
    render(<SplashScreen />);
    expect(screen.getByTestId('splash-screen-container')).toBeDefined();
  });
});
