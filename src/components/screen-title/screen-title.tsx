import React from 'react';
import {StyleSheet, ViewStyle} from 'react-native';

import {HeaderTitleProps} from '@react-navigation/elements';
import {Trans} from 'react-i18next';

import {Text} from '@digitaltitransversal';
import {RouteNames} from '@sas/navigation/navigation.types';

type ScreenTitleProps = HeaderTitleProps;

export const ScreenTitle = ({children}: ScreenTitleProps) => {
  const getTitle = () => {
    switch (children) {
      case RouteNames.BenefitsTab:
        return 'navigation.screens.benefits';
      case RouteNames.MovementsEarnedTab:
      case RouteNames.MovementsListTab:
      case RouteNames.MovementsUsedTab:
      case RouteNames.MovementsScreen:
        return 'navigation.screens.movements';
      case RouteNames.ChooseBrandEntityScreen:
      case RouteNames.RedeemPointsScreen:
        return 'navigation.screens.points';
      case RouteNames.RedeemPointsSuccessfulScreen:
      case RouteNames.MovementDetailScreen:
        return 'navigation.screens.movement_detail';
      case RouteNames.AccountTab:
        return 'navigation.screens.account';
      default:
        return children;
    }
  };

  return (
    <Text style={styles.title}>
      <Trans i18nKey={getTitle()} />
    </Text>
  );
};

ScreenTitle.styles = {
  position: 'absolute',
  left: 50,
  height: '100%',
} as ViewStyle;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});
