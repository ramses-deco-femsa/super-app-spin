import React from 'react';

import {RouteNames} from '@sas/navigation/navigation.types';
import {i18n, render, screen} from '@test-utils';

import {ScreenTitle} from './screen-title';

describe('<ScreenTitle />', () => {
  let screenName: string;

  const doExpect = (i18nKey: string) =>
    expect(screen.getByText(i18n.t(i18nKey))).toBeDefined();

  it('should export "styles" at the component', () => {
    expect(ScreenTitle.styles).toBeDefined();
  });

  it('should render benefits the children name if dont match with any specific case', () => {
    render(<ScreenTitle children={RouteNames.WalletTab} />);
    expect(screen.getByText(RouteNames.WalletTab)).toBeDefined();
  });

  it('should render benefits name only on BenefitsTab', () => {
    screenName = 'navigation.screens.benefits';
    render(<ScreenTitle children={RouteNames.BenefitsTab} />);
    doExpect(screenName);
  });

  it('should render account name only in AccountTab', () => {
    screenName = 'navigation.screens.account';
    render(<ScreenTitle children={RouteNames.AccountTab} />);
    doExpect(screenName);
  });

  it('should render movement_detail name on several screens', () => {
    screenName = 'navigation.screens.movement_detail';
    render(<ScreenTitle children={RouteNames.TicketScreen} />);
    doExpect(screenName);
    render(<ScreenTitle children={RouteNames.MovementDetailScreen} />);
    doExpect(screenName);
  });

  it('should render movements name on several screens', () => {
    screenName = 'navigation.screens.movements';
    render(<ScreenTitle children={RouteNames.MovementsScreen} />);
    doExpect(screenName);
    render(<ScreenTitle children={RouteNames.MovementsListTab} />);
    doExpect(screenName);
    render(<ScreenTitle children={RouteNames.MovementsUsedTab} />);
    doExpect(screenName);
    render(<ScreenTitle children={RouteNames.MovementsEarnedTab} />);
    doExpect(screenName);
  });

  it('should render points name on several screens', () => {
    screenName = 'navigation.screens.points';
    render(<ScreenTitle children={RouteNames.ChooseBrandEntityScreen} />);
    doExpect(screenName);
    render(<ScreenTitle children={RouteNames.RedeemPointsScreen} />);
    doExpect(screenName);
  });
});
