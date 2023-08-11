import React from 'react';

import {MOVEMENTS_DATA, MOVEMENTS_FORMATTED_DATA} from '@sas/__mocks__';
import {render} from '@test-utils';

import {
  MovementsListScreen,
  MovementsListScreenProps,
} from './movements-list-screen';

describe('<MovementsListScreen />', () => {
  it('should calls getMovements', () => {
    const getMovementsMock = jest.fn();

    render(<MovementsListScreen {...({} as MovementsListScreenProps)} />, {
      contextState: {
        getMovements: getMovementsMock,
        movements: {
          loading: false,
          dataFormmated: MOVEMENTS_FORMATTED_DATA,
          data: MOVEMENTS_DATA,
        },
      },
    });

    expect(getMovementsMock).toHaveBeenCalled();
  });
});
