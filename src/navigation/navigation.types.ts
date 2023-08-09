import type {StackNavigationProp} from '@react-navigation/stack';

import type {BrandEntity, Movement} from '@sas/types';

export enum RouteNames {
  // unauthenticated
  OnboardingScreen = 'OnboardingScreen',

  // authenticated
  HomeScreen = 'HomeScreen',
  HomeTab = 'Home',
  BenefitsTab = 'Beneficios',
  WalletTab = 'Cartera',
  AccountTab = 'Cuenta',

  MovementDetailScreen = 'MovementDetailScreen',
  MovementsScreen = 'Movimientos',
  MovementsListTab = 'Todos',
  MovementsEarnedTab = 'Ganados',
  MovementsUsedTab = 'Usados',

  ChooseBrandEntityScreen = 'ChooseBrandEntityScreen',
  RedeemPointsScreen = 'RedeemPointsScreen',
  RedeemPointsSuccessfulScreen = 'RedeemPointsSuccessfulScreen',
}

export type RootStackParamList = {
  [RouteNames.OnboardingScreen]: undefined;
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
