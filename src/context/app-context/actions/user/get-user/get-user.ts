import {Dispatch} from 'react';

import {femsaAPI} from '@sas/api';
import type {User} from '@sas/types';

import {UserActions, UserTypes} from '../user-types';

export const getUser =
  (dispatch: Dispatch<UserActions>) => async (userId: User['id']) => {
    const {data: user} = await femsaAPI.request<User>({
      method: 'GET',
      url: `/user/${userId}`,
    });

    if (!user || Object.keys(user).length === 0) {
      throw new Error('Invalid User');
    }

    dispatch({
      type: UserTypes.SET_USER,
      payload: {
        user,
      },
    });
  };
