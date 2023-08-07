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
}

export type RootStackParamList = {
  [RouteNames.OnboardingScreen]: undefined;
  [RouteNames.HomeScreen]: undefined;
  [RouteNames.HomeTab]: undefined;
  [RouteNames.BenefitsTab]: undefined;
  [RouteNames.WalletTab]: undefined;
  [RouteNames.AccountTab]: undefined;
  [RouteNames.MovementDetailScreen]: undefined;
  [RouteNames.MovementsScreen]: undefined;
  [RouteNames.MovementsListTab]: undefined;
  [RouteNames.MovementsEarnedTab]: undefined;
  [RouteNames.MovementsUsedTab]: undefined;
};
