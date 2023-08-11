import React from 'react';

import {USER_DATA} from '@sas/__mocks__';
import {render, screen} from '@test-utils';

import {AccountScreen, AccountScreenProps} from './account-screen';

describe('<AccountScreen />', () => {
  it('should render AccountScreen', () => {
    render(<AccountScreen {...({} as AccountScreenProps)} />, {
      contextState: {
        user: USER_DATA,
      },
    });
    expect(screen.getByText(USER_DATA.name)).toBeDefined();
  });
});
