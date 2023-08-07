export enum RouteNames {
  // unauthenticated
  OnboardingScreen = 'OnboardingScreen',

  // authenticated
  HomeScreen = 'HomeScreen',
  HomeTab = 'Home',
  BenefitsTab = 'Benefits',
  WalletTab = 'Wallet',
  AccountTab = 'Account',

  MovementDetailScreen = 'MovementDetailScreen',
  MovementsScreen = 'Movements',
  MovementsListTab = 'All',
  MovementsEarnedTab = 'Earned',
  MovementsUsedTab = 'Used',
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
