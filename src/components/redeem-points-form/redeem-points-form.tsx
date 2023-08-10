import React, {ReactNode} from 'react';

import {RedeemPointsFormProvider, useAppCtx} from '@sas/context';

import {RedeemPointsHeader} from './redeem-points-header';

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
