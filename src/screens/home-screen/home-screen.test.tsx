import React from 'react';

import {render, screen, i18n} from '@test-utils';

import {HomeScreen, HomeScreenProps} from './home-screen';

describe('<HomeScreen />', () => {
  it('should render HomeScreen', () => {
    // TODO: improve props passing data
    render(<HomeScreen {...({} as HomeScreenProps)} />);
    expect(screen.getByText(i18n.t('welcome'))).toBeDefined();
  });
});
