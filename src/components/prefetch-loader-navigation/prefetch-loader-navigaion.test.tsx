import React from 'react';

import {SnackBar} from '@digitaltitransversal';
import {render, screen} from '@test-utils';

import {PrefetchLoaderNavigator} from './prefetch-loader-navigaion';

jest.mock('@digitaltitransversal', () => ({
  ...jest.requireActual('@digitaltitransversal'),
  SnackBar: {show: jest.fn()},
}));

describe('<PrefetchLoaderNavigator />', () => {
  it('shoulds render spinner when loading is true', () => {
    render(<PrefetchLoaderNavigator loading />);
    expect(screen.getByTestId('spinner')).toBeDefined();
  });

  it('shoulds calls SnackBar.show when error is passed', () => {
    render(<PrefetchLoaderNavigator loading error="somError" />);
    expect(SnackBar.show).toHaveBeenCalled();
  });
  it('shoulds calls action', async () => {
    const action = jest.fn().mockResolvedValue(null);
    render(<PrefetchLoaderNavigator loading={false} action={action} />);
    expect(action).toHaveBeenCalled();
  });
});
