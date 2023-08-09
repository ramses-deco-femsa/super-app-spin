import 'react-native';
import React from 'react';

import {render} from '@test-utils';

import {
  ChooseBrandEntityScreen,
  ChooseBrandEntityScreenProps,
} from './choose-brand-entity-screen';

describe('<ChooseBrandEntityScreen />', () => {
  it('should calls getBrandEntities action', () => {
    const getBrandEntitiesMock = jest.fn();

    render(
      <ChooseBrandEntityScreen {...({} as ChooseBrandEntityScreenProps)} />,
      {
        contextState: {
          brandEntities: {
            data: [],
            loading: false,
          },
          getBrandEntities: getBrandEntitiesMock,
        },
      },
    );

    expect(getBrandEntitiesMock).toHaveBeenCalled();
  });
});
