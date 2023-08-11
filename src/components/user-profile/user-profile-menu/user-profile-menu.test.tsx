import React from 'react';
import {View} from 'react-native';

import {render, screen} from '@test-utils';

import {UserProfileMenu} from './user-profile-menu';

describe('<UserProfileMenu />', () => {
  it('should add 2 wrapper when there are 2 children', () => {
    render(
      <UserProfileMenu>
        <View />
        <View />
      </UserProfileMenu>,
    );

    expect(
      screen.getAllByTestId('user-profile-menu-item-wrapper'),
    ).toHaveLength(2);
  });

  it('should add 4 wrapper when there are 4 children', () => {
    render(
      <UserProfileMenu>
        <View />
        <View />
        <View />
        <View />
      </UserProfileMenu>,
    );

    expect(
      screen.getAllByTestId('user-profile-menu-item-wrapper'),
    ).toHaveLength(4);
  });
});
