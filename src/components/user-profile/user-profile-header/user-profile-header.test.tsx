import React from 'react';

import {USER_DATA} from '@sas/__mocks__';
import {i18n, render, screen} from '@test-utils';

import {UserProfileHeader} from './user-profile-header';

describe('<UserProfileHeader />', () => {
  it('should user name and points formatted', () => {
    render(<UserProfileHeader />);

    expect(screen.getByText(USER_DATA.name)).toBeDefined();
    expect(
      screen.getByText(
        i18n.t('redeem_points.form.points', {
          points: USER_DATA.points,
        }),
      ),
    ).toBeDefined();
  });
});
