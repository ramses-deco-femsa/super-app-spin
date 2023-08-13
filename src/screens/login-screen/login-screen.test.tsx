import 'react-native';
import React from 'react';

import {USER_DATA} from '@sas/__mocks__';
import {femsaAPIMock} from '@sas/__mocks__/femsa-api-mock';
import {render, screen} from '@test-utils';

import {LoginScreen, LoginScreenProps} from './login-screen';

describe('<LoginScreen />', () => {
  beforeEach(() => {
    femsaAPIMock.onGet('/user').reply(200, [USER_DATA]);
  });

  it('should render login input', () => {
    render(<LoginScreen {...({} as LoginScreenProps)} />);
    expect(screen.getByTestId('login-input-phone-number')).toBeDefined();
  });
});
