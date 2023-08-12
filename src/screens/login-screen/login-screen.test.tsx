import 'react-native';
import React from 'react';

import {render, screen} from '@test-utils';

import {LoginScreen, LoginScreenProps} from './login-screen';

describe('<LoginScreen />', () => {
  it('should render LoginScreen', () => {
    // TODO: improve props passing data
    render(<LoginScreen {...({} as LoginScreenProps)} />);
    expect(screen.getByText(/LoginScreen/i)).toBeDefined();
  });
});
