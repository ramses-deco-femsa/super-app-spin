import React from 'react';

import {MOVEMENTS_DATA} from '@sas/__mocks__';
import {render, screen, fireEvent} from '@test-utils';

import {ListMovementItem} from './list-movement-item';

describe('<ListMovementItem />', () => {
  let onPressMock: jest.Mock;
  const [movement] = MOVEMENTS_DATA;

  beforeEach(() => {
    onPressMock = jest.fn();
  });

  it('should calls onPress when user press the button', () => {
    render(<ListMovementItem movement={movement} onPress={onPressMock} />);

    const button = screen.getByTestId('list-item-button');

    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalled();
  });
});
