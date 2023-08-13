import {Dispatch} from 'react';

import uuid from 'react-native-uuid';

import {femsaAPI} from '@sas/api';
import type {AppState} from '@sas/context/app-context/reducer';
import type {Movement, NewMovement, User} from '@sas/types';

import {UserTypes, UserActions} from '../user-types';

export const redeemPoints =
  (dispatch: Dispatch<UserActions>, state: AppState) =>
  async (newMovement: NewMovement) => {
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

      const {data: user} = await femsaAPI.request<User>({
        method: 'patch',
        url: `/user/${state.user?.id}`,
        data: {
          points: state.user!.points - data.points,
        },
      });

      await dispatch({
        type: UserTypes.SET_USER,
        payload: {user},
      });

      return data;
    } catch (err) {
      throw err;
    }
  };
