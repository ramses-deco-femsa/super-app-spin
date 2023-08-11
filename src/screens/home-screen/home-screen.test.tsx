import React from 'react';

import {render, screen, i18n} from '@test-utils';

import {HomeScreen, HomeScreenProps} from './home-screen';

describe('<HomeScreen />', () => {
  it('should render HomeScreen title', () => {
    render(<HomeScreen {...({} as HomeScreenProps)} />);
    expect(screen.getByText(i18n.t('homeScreen.fallback'))).toBeDefined();
  });
});
