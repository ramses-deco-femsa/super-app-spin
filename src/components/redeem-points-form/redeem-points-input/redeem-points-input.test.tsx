import React from 'react';

import {USER_DATA} from '@sas/__mocks__';
import {render, screen, i18n, fireEvent} from '@test-utils';

import {RedeemPointsInput} from './redeem-points-input';
import {RedeemPointsFormWrapper} from '../redeem-points-form';
import {RedeemPointsShortcuts} from '../redeem-points-shortcuts';

describe('<RedeemPointsInput />', () => {
  it('should not render "other" if user points higher than 1,000', () => {
    render(<RedeemPointsInput />, {
      contextState: {
        user: {
          ...USER_DATA,
          points: 1000,
        },
      },
      wrapper: RedeemPointsFormWrapper,
    });

    expect(screen.getByText(i18n.t('redeem_points.form.other'))).toBeDefined();
  });

  it('should render "hint" only if input value dont exceed the max amount(1,000 cash that means 10,000 points)', () => {
    render(<RedeemPointsInput />, {
      contextState: {
        user: {
          ...USER_DATA,
          points: 1000,
        },
      },
      wrapper: RedeemPointsFormWrapper,
    });

    const input = screen.getByTestId('redeem-points-input');

    fireEvent.changeText(input, '100');

    const hintText = i18n.t('redeem_points.form.input_minimum__hint', {
      amount: '$20.00',
    });

    expect(screen.getByText(hintText)).toBeDefined();

    fireEvent.changeText(input, '2000');
    expect(screen.queryByText(hintText)).toBeNull();
  });

  it('should refresh input value when a shortcut btn is pressed', () => {
    render(
      <>
        <RedeemPointsShortcuts />
        <RedeemPointsInput />
      </>,
      {
        contextState: {
          user: {
            ...USER_DATA,
            points: 1000,
          },
        },
        wrapper: RedeemPointsFormWrapper,
      },
    );

    const input = screen.getByTestId('redeem-points-input');
    fireEvent.changeText(input, '1');
    expect(input).toHaveProp('value', '1');

    const [shortcutBtn50Amount] = screen.getAllByTestId(
      'redeem-points-shortcut-chip',
    );
    fireEvent.press(shortcutBtn50Amount);
    expect(input).toHaveProp('value', '50');
  });
});
