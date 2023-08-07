import 'react-native';
import React from 'react';

import {render, screen} from '@test-utils';

import {WalletScreen, WalletScreenProps} from './wallet-screen';

describe('<WalletScreen />', () => {
  it('should render WalletScreen', () => {
    // TODO: improve props passing data
    render(<WalletScreen {...({} as WalletScreenProps)} />);
    expect(screen.getByText(/WalletScreen/i)).toBeDefined();
  });
});
