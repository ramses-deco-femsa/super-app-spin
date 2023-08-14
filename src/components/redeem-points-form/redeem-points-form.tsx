import React, {ReactNode, forwardRef, useImperativeHandle} from 'react';
import {StyleSheet, View} from 'react-native';

import {
  RedeemPointsFormProvider,
  useAppCtx,
  useRedeemPointsFormCtx,
} from '@sas/context';

import {RedeemPointsHeader} from './redeem-points-header';
import {RedeemPointsInput} from './redeem-points-input';
import {RedeemPointsShortcuts} from './redeem-points-shortcuts';
import {RedeemPointsWarning} from './redeem-points-warning';

// WRAPPER --------------------------------------------------
type RedeemPointsFormWrapperProps = {
  children?: ReactNode;
};

export const RedeemPointsFormWrapper = ({
  children,
}: RedeemPointsFormWrapperProps) => {
  const {user} = useAppCtx();

  return (
    <RedeemPointsFormProvider userPoints={user!.points}>
      {children}
    </RedeemPointsFormProvider>
  );
};

// RedeemPointsForm --------------------------------------------------
export type RedeemPointsFormRef = {
  pointsToRedeem: number;
  isValidForm: boolean;
};

type RedeemPointsFormProps = {
  children?: ReactNode;
};

type RedeemPointsFormInterface = React.ForwardRefExoticComponent<
  RedeemPointsFormProps & React.RefAttributes<RedeemPointsFormRef>
> & {
  Header: typeof RedeemPointsHeader;
  Shortcuts: typeof RedeemPointsShortcuts;
  Warning: typeof RedeemPointsWarning;
  Input: typeof RedeemPointsInput;
};

export const RedeemPointsForm: RedeemPointsFormInterface = forwardRef<
  RedeemPointsFormRef,
  RedeemPointsFormProps
>(({children}: RedeemPointsFormProps, ref) => {
  const {pointsToRedeem, isValidForm} = useRedeemPointsFormCtx();

  useImperativeHandle(ref, () => ({
    pointsToRedeem,
    isValidForm,
  }));

  return (
    <View testID="redeem-points-form" style={styles.container}>
      {children}
    </View>
  );
}) as RedeemPointsFormInterface;

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
