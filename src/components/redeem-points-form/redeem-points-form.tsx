import React, {ReactNode} from 'react';

import {RedeemPointsFormProvider, useAppCtx} from '@sas/context';

import {RedeemPointsHeader} from './redeem-points-header';
import {RedeemPointsShortcuts} from './redeem-points-shortcuts';
import {RedeemPointsWarning} from './redeem-points-warning';

type RedeemPointsFormProps = {
  children?: ReactNode;
};

export const RedeemPointsForm = ({children}: RedeemPointsFormProps) => {
  const {user} = useAppCtx();

  return (
    <RedeemPointsFormProvider userPoints={user!.points}>
      {children}
    </RedeemPointsFormProvider>
  );
};

RedeemPointsForm.Header = RedeemPointsHeader;
RedeemPointsForm.Shortcuts = RedeemPointsShortcuts;
RedeemPointsForm.Warning = RedeemPointsWarning;
