import type {User} from '@sas/types';

import {UserTypes} from '../user-types';

export const login = (user: User) => ({
  type: UserTypes.LOGIN,
  payload: {user},
});
