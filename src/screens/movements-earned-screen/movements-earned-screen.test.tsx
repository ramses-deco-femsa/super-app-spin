import React from 'react';

import {MOVEMENTS_DATA, MOVEMENTS_FORMATTED_DATA} from '@sas/__mocks__';
import {render} from '@test-utils';

import {
  MovementsEarnedScreen,
  MovementsEarnedScreenProps,
} from './movements-earned-screen';

describe('<MovementsEarnedScreen />', () => {
  it('should calls getMovements', () => {
    const getMovementsMock = jest.fn();

    render(<MovementsEarnedScreen {...({} as MovementsEarnedScreenProps)} />, {
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
