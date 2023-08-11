import React from 'react';
import {Text} from 'react-native';

import {render, screen} from '@test-utils';

import {RedeemPointsForm, RedeemPointsFormWrapper} from './redeem-points-form';

describe('<RedeemPointsForm />', () => {
  it('should render children', () => {
    render(
      <RedeemPointsForm>
        <Text>demo text</Text>
      </RedeemPointsForm>,
      {
        wrapper: RedeemPointsFormWrapper,
      },
    );

    expect(screen.getByText('demo text')).toBeDefined();
  });

  describe('<RedeemPointsFormWrapper />', () => {
    it('should render children', () => {
      render(
        <RedeemPointsFormWrapper>
          <Text>demo text</Text>
        </RedeemPointsFormWrapper>,
      );

      expect(screen.getByText('demo text')).toBeDefined();
    });
  });
});
