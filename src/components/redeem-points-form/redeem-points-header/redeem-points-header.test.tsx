import React from 'react';

import {USER_DATA} from '@sas/__mocks__';
import {i18n, render, screen} from '@test-utils';

import {RedeemPointsHeader} from './redeem-points-header';
import {RedeemPointsFormWrapper} from '../redeem-points-form';

describe('<RedeemPointsHeader />', () => {
  it('should render user points', () => {
    render(
      <RedeemPointsHeader />,

      {
        contextState: {
          user: {
            ...USER_DATA,
            points: 500,
          },
        },
        wrapper: RedeemPointsFormWrapper,
      },
    );

    expect(
      screen.getByText(
        i18n.t('redeem_points.form.points', {
          points: USER_DATA.points,
        }),
      ),
    ).toBeDefined();
  });

  describe('description', () => {
    it('should render redeem_points.form.description if points are lower than 1,000', () => {
      render(
        <RedeemPointsHeader />,

        {
          contextState: {
            user: {
              ...USER_DATA,
              points: 500,
            },
          },
          wrapper: RedeemPointsFormWrapper,
        },
      );

      expect(
        screen.getByText(i18n.t('redeem_points.form.description')),
      ).toBeDefined();
    });

    it('should render redeem_points.form.description_with_shortcuts if points are higher than 1,000', () => {
      render(
        <RedeemPointsHeader />,

        {
          contextState: {
            user: {
              ...USER_DATA,
              points: 2000,
            },
          },
          wrapper: RedeemPointsFormWrapper,
        },
      );

      expect(
        screen.getByText(
          i18n.t('redeem_points.form.description_with_shortcuts'),
        ),
      ).toBeDefined();
    });
  });
});
