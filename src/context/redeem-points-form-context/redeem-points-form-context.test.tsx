import React from 'react';
import {Text} from 'react-native';

import {render, screen} from '@testing-library/react-native';

import {
  useRedeemPointsFormCtx,
  RedeemPointsFormProvider,
} from './redeem-points-form-context';

describe('redeem-points-form-context', () => {
  describe('<RedeemPointsFormProvider />', () => {
    it('should render children in RedeemPointsFormProvider', () => {
      render(
        <RedeemPointsFormProvider userPoints={1000}>
          <Text testID="demo">demo text</Text>
        </RedeemPointsFormProvider>,
      );

      expect(screen.getByTestId('demo')).toHaveTextContent('demo text');
    });
  });

  describe('useRedeemPointsFormCtx', () => {
    const DemoComponent = () => {
      useRedeemPointsFormCtx();

      return null;
    };
    const original = console.error;

    beforeEach(() => {
      console.error = jest.fn();
    });

    afterEach(() => {
      console.error = original;
    });

    it('should return error when its not wrapped with Provider', () => {
      try {
        render(<DemoComponent />);
      } catch (err) {
        if (err instanceof Error) {
          expect(err.message).toBe(
            'redeemPointsFormContext must be use whitin the RedeemPointsFormProvider',
          );
        }
      }
    });
  });
});
