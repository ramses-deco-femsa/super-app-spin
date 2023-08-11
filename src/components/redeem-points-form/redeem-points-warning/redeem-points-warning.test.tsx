import React from 'react';

import {USER_DATA} from '@sas/__mocks__';
import {render, screen} from '@test-utils';

import {RedeemPointsWarning} from './redeem-points-warning';
import {RedeemPointsFormWrapper} from '../redeem-points-form';

describe('<RedeemPointsWarning />', () => {
  it('should render warning if user points are lower than 200', () => {
    render(<RedeemPointsWarning />, {
      contextState: {
        user: {
          ...USER_DATA,
          points: 100,
        },
      },
      wrapper: RedeemPointsFormWrapper,
    });

    expect(screen.getByTestId('redeem-points-warning')).toBeDefined();
  });

  it('should not render warning if user points are higher than 200', () => {
    render(<RedeemPointsWarning />, {
      contextState: {
        user: {
          ...USER_DATA,
          points: 500,
        },
      },
      wrapper: RedeemPointsFormWrapper,
    });

    expect(screen.queryByTestId('redeem-points-warning')).toBeNull();
  });
});
