import {Dispatch} from 'react';

import uuid from 'react-native-uuid';

import {femsaAPI} from '@sas/api';
import type {Movement, NewMovement} from '@sas/types';

import {UserTypes, UserActions} from '../user-types';

export const redeemPoints =
  (dispatch: Dispatch<UserActions>) => async (newMovement: NewMovement) => {
    try {
      const today = new Date();
      const expiryDate = new Date();
      expiryDate.setMonth(today.getMonth() + 3);

      const movement: Omit<Movement, 'id'> = {
        ...newMovement,
        giftCode: uuid.v4().toString(),
        transactionNo: uuid.v4().toString(),
        operation: 'expended',
        date: today
          .toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: '2-digit',
            year: 'numeric',
          })
          .replaceAll(',', ''),
        expiryDate: expiryDate
          .toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: '2-digit',
            year: 'numeric',
          })
          .replaceAll(',', ''),
      };

      const {data} = await femsaAPI.request<Movement>({
        method: 'post',
        url: '/history',
        data: movement,
      });

      await dispatch({
        type: UserTypes.REDEEM_POINTS,
        payload: {points: data.points},
      });

      return data;
    } catch (err) {
      throw err;
    }
  };
