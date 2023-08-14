import React from 'react';

import {USER_DATA} from '@sas/__mocks__';
import {render, screen} from '@test-utils';

import {RedeemPointsShortcuts} from './redeem-points-shortcuts';
import {RedeemPointsFormWrapper} from '../redeem-points-form';

describe('<RedeemPointsShortcuts />', () => {
  it('should not render any shortcuts if user points lower than 1,000', () => {
    render(<RedeemPointsShortcuts />, {
      contextState: {
        user: {
          ...USER_DATA,
          points: 500,
        },
      },
      wrapper: RedeemPointsFormWrapper,
    });

    expect(screen.queryAllByTestId('redeem-points-shortcut-chip')).toHaveLength(
      0,
    );
  });

  it('should render 2 shortcuts if user points higher than 1,000 and lower than 10,000', () => {
    render(<RedeemPointsShortcuts />, {
      contextState: {
        user: {
          ...USER_DATA,
          points: 2000,
        },
      },
      wrapper: RedeemPointsFormWrapper,
    });

    expect(screen.getAllByTestId('redeem-points-shortcut-chip')).toHaveLength(
      2,
    );
  });

  it('should render 4 shortcuts if user points higher than 10,000', () => {
    render(<RedeemPointsShortcuts />, {
      contextState: {
        user: {
          ...USER_DATA,
          points: 15000,
        },
      },
      wrapper: RedeemPointsFormWrapper,
    });

    expect(screen.getAllByTestId('redeem-points-shortcut-chip')).toHaveLength(
      4,
    );
  });
});
