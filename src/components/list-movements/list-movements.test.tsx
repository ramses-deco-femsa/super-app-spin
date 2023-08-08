import React from 'react';

import {MOVEMENTS_FORMATTED_DATA} from '@sas/__mocks__';
import {render, screen, i18n} from '@test-utils';

import {ListMovements} from './list-movements';

describe('<ListMovements />', () => {
  it('should render titles of data recieved', () => {
    render(<ListMovements data={MOVEMENTS_FORMATTED_DATA} />);

    expect(
      screen.getByText(i18n.t(MOVEMENTS_FORMATTED_DATA[0].title)),
    ).toBeDefined();

    expect(
      screen.getByText(i18n.t(MOVEMENTS_FORMATTED_DATA[1].title)),
    ).toBeDefined();
  });
});
