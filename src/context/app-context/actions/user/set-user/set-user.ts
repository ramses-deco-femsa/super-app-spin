import type {User} from '@sas/types';

import {UserTypes} from '../user-types';

export const setUser = (user: User) => ({
  type: UserTypes.SET_USER,
  payload: {user},
});
