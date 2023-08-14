import React from 'react';

import {MOVEMENTS_DATA} from '@sas/__mocks__';
import {femsaAPIMock} from '@sas/__mocks__/femsa-api-mock';
import {render, waitFor} from '@test-utils';

import {
  MovementsEarnedScreen,
  MovementsEarnedScreenProps,
} from './movements-earned-screen';

describe('<MovementsEarnedScreen />', () => {
  it('should render screen', async () => {
    femsaAPIMock.onGet('/history').reply(200, MOVEMENTS_DATA);

    await waitFor(() => {
      render(<MovementsEarnedScreen {...({} as MovementsEarnedScreenProps)} />);
    });
  });
});
