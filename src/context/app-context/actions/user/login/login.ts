import {Dispatch} from 'react';

import {femsaAPI} from '@sas/api';
import type {User} from '@sas/types';

import {UserActions, UserTypes} from '../user-types';

export const login =
  (dispatch: Dispatch<UserActions>) => async (phone: User['phone']) => {
    const formatPhone = `+${phone.replace(/[^0-9]/g, '')}`.slice(0, 13);

    const {data} = await femsaAPI.request<User[]>({
      method: 'GET',
      url: '/user',
      params: {
        phone: formatPhone,
      },
    });

    if (data.length !== 1) {
      throw new Error('Invalid Credentials');
    }

    dispatch({
      type: UserTypes.SET_USER,
      payload: {
        user: data[0],
      },
    });
  };
