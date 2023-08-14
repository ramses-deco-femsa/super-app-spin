import React from 'react';

import {SnackBar} from '@digitaltitransversal';
import {fireEvent, render, screen, i18n} from '@test-utils';

import {UserProfileMenuLogout} from './user-profile-menu-logout';

jest.mock('@digitaltitransversal', () => ({
  ...jest.requireActual('@digitaltitransversal'),
  SnackBar: {show: jest.fn()},
}));

describe('<UserProfileMenuLogout />', () => {
  let logoutMock: jest.Mock;

  beforeEach(() => {
    logoutMock = jest.fn();

    render(<UserProfileMenuLogout />, {
      contextState: {
        logout: logoutMock,
      },
    });
  });

  it('should calls logout and Snackbar.show on confirm logout modal', () => {
    i18n.language = 'en';

    const button = screen.getByTestId('user-profile-menu-logout-btn');
    fireEvent.press(button);
    const buttonConfirm = screen.getByText(
      i18n.t('account.confirm_modal.confirm'),
    );
    fireEvent.press(buttonConfirm);

    expect(logoutMock).toHaveBeenCalled();
    expect(SnackBar.show).toHaveBeenCalled();
  });
});
