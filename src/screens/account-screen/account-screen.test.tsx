import 'react-native';
import React from 'react';

import {render, screen} from '@test-utils';

import {AccountScreen, AccountScreenProps} from './account-screen';

describe('<AccountScreen />', () => {
  it('should render AccountScreen', () => {
    // TODO: improve props passing data
    render(<AccountScreen {...({} as AccountScreenProps)} />);
    expect(screen.getByText(/AccountScreen/i)).toBeDefined();
  });
});
