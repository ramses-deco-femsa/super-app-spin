import 'react-native';
import React from 'react';

import {BRAND_ENTITIES_DATA} from '@sas/__mocks__';
import {RouteNames} from '@sas/navigation/navigation.types';
import {fireEvent, render, screen} from '@test-utils';

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

  it('should navigate to RedeemPointsScreen on card click', () => {
    const navigateMock = jest.fn();

    render(
      <ChooseBrandEntityScreen
        {...({
          navigation: {navigate: navigateMock},
        } as unknown as ChooseBrandEntityScreenProps)}
      />,
      {
        contextState: {
          brandEntities: {
            data: BRAND_ENTITIES_DATA,
            loading: false,
          },
          getBrandEntities: jest.fn(),
        },
      },
    );
    const card = screen.getAllByTestId('brand-card')[0];

    fireEvent.press(card);

    expect(navigateMock).toHaveBeenCalledWith(RouteNames.RedeemPointsScreen, {
      brandEntity: BRAND_ENTITIES_DATA[0],
    });
  });
});
