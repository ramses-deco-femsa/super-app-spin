import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';

import {RedeemPointsFormProvider, useAppCtx} from '@sas/context';

import {RedeemPointsHeader} from './redeem-points-header';
import {RedeemPointsInput} from './redeem-points-input';
import {RedeemPointsShortcuts} from './redeem-points-shortcuts';
import {RedeemPointsWarning} from './redeem-points-warning';

type RedeemPointsFormProps = {
  children?: ReactNode;
};

export const RedeemPointsForm = ({children}: RedeemPointsFormProps) => {
  const {user} = useAppCtx();

  return (
    <RedeemPointsFormProvider userPoints={user!.points}>
      <View testID="redeem-points-form" style={styles.container}>
        {children}
      </View>
    </RedeemPointsFormProvider>
  );
};

RedeemPointsForm.Header = RedeemPointsHeader;
RedeemPointsForm.Shortcuts = RedeemPointsShortcuts;
RedeemPointsForm.Warning = RedeemPointsWarning;
RedeemPointsForm.Input = RedeemPointsInput;

const styles = StyleSheet.create({
  container: {
    rowGap: 16,
    flex: 1,
  },
});
