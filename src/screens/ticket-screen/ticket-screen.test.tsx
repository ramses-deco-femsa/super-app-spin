import 'react-native';
import React from 'react';

import {MOVEMENTS_DATA} from '@sas/__mocks__';
import {render, screen} from '@test-utils';

import {TicketScreen, TicketScreenProps} from './ticket-screen';

describe('<TicketScreen />', () => {
  const [movement] = MOVEMENTS_DATA;

  it('should render screen', () => {
    render(
      <TicketScreen
        {...({
          route: {params: {movement}},
        } as TicketScreenProps)}
      />,
    );

    expect(screen.getByText(movement.entity)).toBeDefined();
  });
});
