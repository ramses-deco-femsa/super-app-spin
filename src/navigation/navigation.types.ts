import type {StackNavigationProp} from '@react-navigation/stack';

import type {BrandEntity, Movement} from '@sas/types';

export enum RouteNames {
  // unauthenticated
  LoginScreen = 'LoginScreen',

  // authenticated
  HomeScreen = 'HomeScreenTabNavigation',
  HomeTab = 'HomeTab',
  BenefitsTab = 'BenefitsTab',
  WalletTab = 'WalletTab',
  AccountTab = 'AccountTab',

  MovementDetailScreen = 'MovementDetailScreen',
  MovementsScreen = 'MovementsScreenTabNavigation',
  MovementsListTab = 'MovementsListTab',
  MovementsEarnedTab = 'MovementsEarnedTab',
  MovementsUsedTab = 'MovementsUsedTab',

  ChooseBrandEntityScreen = 'ChooseBrandEntityScreen',
  RedeemPointsScreen = 'RedeemPointsScreen',
  RedeemPointsSuccessfulScreen = 'RedeemPointsSuccessfulScreen',
}

export type RootStackParamList = {
  [RouteNames.LoginScreen]: undefined;
  [RouteNames.HomeScreen]: undefined;
  [RouteNames.HomeTab]: undefined;
  [RouteNames.BenefitsTab]: undefined;
  [RouteNames.WalletTab]: undefined;
  [RouteNames.AccountTab]: undefined;
  [RouteNames.MovementDetailScreen]: {
    movement: Movement;
  };
  [RouteNames.MovementsScreen]: undefined;
  [RouteNames.MovementsListTab]: undefined;
  [RouteNames.MovementsEarnedTab]: undefined;
  [RouteNames.MovementsUsedTab]: undefined;
  [RouteNames.ChooseBrandEntityScreen]: undefined;
  [RouteNames.RedeemPointsScreen]: {
    brandEntity: BrandEntity;
  };
  [RouteNames.RedeemPointsSuccessfulScreen]: {
    movement: Movement;
  };
};

export type StackNavigationProps = StackNavigationProp<RootStackParamList>;
