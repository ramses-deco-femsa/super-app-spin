import 'react-native';
import React from 'react';

import {SnackBar} from '@digitaltitransversal';
import {BRAND_ENTITIES_DATA, MOVEMENTS_DATA, USER_DATA} from '@sas/__mocks__';
import {RouteNames} from '@sas/navigation/navigation.types';
import {fireEvent, render, screen, waitFor} from '@test-utils';

import {
  RedeemPointsScreen,
  RedeemPointsScreenProps,
} from './redeem-points-screen';

jest.mock('@digitaltitransversal', () => ({
  ...jest.requireActual('@digitaltitransversal'),
  SnackBar: {show: jest.fn()},
}));

describe('<RedeemPointsScreen />', () => {
  const [brandEntity] = BRAND_ENTITIES_DATA;

  it('should render redeem-points-form component', () => {
    render(
      <RedeemPointsScreen
        {...({route: {params: {brandEntity}}} as RedeemPointsScreenProps)}
      />,
      {
        contextState: {
          user: USER_DATA,
        },
      },
    );

    expect(screen.getByTestId('redeem-points-form')).toBeDefined();
  });

  describe('onSubmit', () => {
    let redeemPointsMock: jest.Mock;

    const submitForm = (amountValue: string) => {
      // write a valid amount to redeem
      const input = screen.getByTestId('redeem-points-input');
      fireEvent.changeText(input, amountValue); // amountValue * 10 = points

      // click on submit
      const btnSubmit = screen.getByTestId('redeem-points-btn-submit');
      fireEvent.press(btnSubmit);
    };

    describe('onSuccess movement creation', () => {
      const [movementCreated] = MOVEMENTS_DATA;
      let navigationResetMock: jest.Mock;

      beforeEach(() => {
        redeemPointsMock = jest.fn(() => Promise.resolve(movementCreated));
        navigationResetMock = jest.fn();

        render(
          <RedeemPointsScreen
            {...({
              navigation: {reset: navigationResetMock},
              route: {params: {brandEntity}},
            } as unknown as RedeemPointsScreenProps)}
          />,
          {
            contextState: {
              user: USER_DATA,
              redeemPoints: redeemPointsMock,
            },
          },
        );
      });

      it('should calls redeemPointsMock', async () => {
        submitForm('30');

        await expect(redeemPointsMock).toHaveBeenCalledWith({
          entity: brandEntity.entity,
          points: 300,
        });
      });

      it('should show SnackBar', async () => {
        submitForm('30');
        await expect(SnackBar.show).toHaveBeenCalled();
      });

      it('should navigation reset and send movement created to new screen', async () => {
        submitForm('30');
        await waitFor(() =>
          expect(navigationResetMock).toHaveBeenCalledWith({
            index: 1,
            routes: [
              {
                name: RouteNames.HomeScreen,
                state: {routes: [{name: RouteNames.BenefitsTab}]},
              },
              {
                name: RouteNames.TicketScreen,
                params: {movement: movementCreated},
              },
            ],
          }),
        );
      });
    });

    describe('onError movement creation', () => {
      beforeEach(() => {
        redeemPointsMock = jest.fn(() =>
          Promise.reject(new Error('something fails')),
        );

        render(
          <RedeemPointsScreen
            {...({
              route: {params: {brandEntity}},
            } as RedeemPointsScreenProps)}
          />,
          {
            contextState: {
              user: USER_DATA,
              redeemPoints: redeemPointsMock,
            },
          },
        );
      });

      it('should show SnackBar with error', async () => {
        submitForm('30');
        await expect(SnackBar.show).toHaveBeenCalled();

        const params = (SnackBar.show as jest.Mock).mock.lastCall[0];
        expect(params.text).toBe('something fails');
        expect(params.variant).toBe('error');
      });
    });
  });
});
