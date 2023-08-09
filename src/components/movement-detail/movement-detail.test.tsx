import React from 'react';

import {MOVEMENTS_DATA} from '@sas/__mocks__';
import {render, screen} from '@test-utils';

import {MovementDetail} from './movement-detail';

describe('<MovementDetail />', () => {
  const [movement] = MOVEMENTS_DATA;

  it('should  renders elements', () => {
    render(
      <MovementDetail movement={{...movement, date: 'Wed Aug 09 2023'}} />,
    );

    expect(screen.getByTestId('movement-detail-entity')).toHaveTextContent(
      movement.entity,
    );
    expect(screen.getByTestId('movement-detail-points')).toHaveTextContent(
      `+${movement.points}`,
    );

    const detailContent = screen.getByTestId('movement-detail-content');

    const expectedAmount = '' + movement.points / 10;
    expect(detailContent).toHaveTextContent(expectedAmount);

    const expectedDate = '9/8/2023';
    expect(detailContent).toHaveTextContent(expectedDate);

    const expectedDateFrom = '9/11/2023'; // +3 months
    expect(detailContent).toHaveTextContent(expectedDateFrom);

    expect(detailContent).toHaveTextContent(movement.transactionNo);
  });
});
