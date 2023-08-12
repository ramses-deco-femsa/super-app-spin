import 'react-native';
import React from 'react';

import {render, screen} from '@test-utils';

import {LoginScreen, LoginScreenProps} from './login-screen';

describe('<LoginScreen />', () => {
  it('should render login input', () => {
    render(<LoginScreen {...({} as LoginScreenProps)} />);
    expect(screen.getByTestId('login-input-phone-number')).toBeDefined();
  });
});
