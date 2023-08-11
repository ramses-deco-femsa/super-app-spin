import React from 'react';

import {render, screen, i18n} from '@test-utils';

import {UserProfile} from './user-profile';

jest.mock('react-native-device-info', () => ({
  getVersion: jest.fn(() => '1.1.1'),
}));

describe('<UserProfile />', () => {
  let logoutMock: jest.Mock;

  beforeEach(() => {
    logoutMock = jest.fn();

    render(
      <UserProfile>
        <UserProfile.Header />
      </UserProfile>,
      {
        contextState: {
          logout: logoutMock,
        },
      },
    );
  });

  it('should show DeviceInfo version', () => {
    expect(
      screen.getByText(`${i18n.t('general.version')} 1.1.1`),
    ).toBeDefined();
  });

  it('should exports Header and Menu components', () => {
    expect(UserProfile.Header).toBeDefined();
    expect(UserProfile.Menu).toBeDefined();
  });
});
