import 'react-native';
import React from 'react';

import {i18n, render, screen} from '@test-utils';

import {WalletScreen, WalletScreenProps} from './wallet-screen';

describe('<WalletScreen />', () => {
  it('should render WalletScreen', () => {
    render(<WalletScreen {...({} as WalletScreenProps)} />);
    expect(screen.getByText(i18n.t('walletScreen.fallback'))).toBeDefined();
  });
});
