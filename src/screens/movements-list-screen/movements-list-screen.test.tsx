import React from 'react';

import {render} from '@test-utils';

import {
  MovementsListScreen,
  MovementsListScreenProps,
} from './movements-list-screen';

describe('<MovementsListScreen />', () => {
  it('should render MovementsListScreen', () => {
    // TODO: improve props passing data
    render(<MovementsListScreen {...({} as MovementsListScreenProps)} />, {
      contextState: {
        movements: {
          data: [],
          dataFormmated: [],
          loading: false,
        },
        getMovements: jest.fn(),
      },
    });
  });
});
