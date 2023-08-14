import MockAdapter from 'axios-mock-adapter';

import {femsaAPI} from '@sas/api';

export const femsaAPIMock = new MockAdapter(femsaAPI);
