import React from 'react';
import {Text} from 'react-native';

import {render, screen, waitFor} from '@testing-library/react-native';

import {MOVEMENTS_DATA} from '@sas/__mocks__';
import {femsaAPIMock} from '@sas/__mocks__/femsa-api-mock';

import {MovementListProvider} from './movement-list-context';

describe('movement-list-context', () => {
  it('should render function children with access to state', async () => {
    femsaAPIMock.onGet('/history').reply(200, MOVEMENTS_DATA);

    await waitFor(() => {
      render(
        <MovementListProvider filter="all">
          {({data}) => <Text testID="demo">{data.length}</Text>}
        </MovementListProvider>,
      );
    });

    expect(screen.getByTestId('demo')).toHaveTextContent(
      '' + MOVEMENTS_DATA.length,
    );
  });
});
