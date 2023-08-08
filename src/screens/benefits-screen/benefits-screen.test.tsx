import 'react-native';
import React from 'react';

import {render, screen, i18n} from '@test-utils';

import {BenefitsScreen, BenefitsScreenProps} from './benefits-screen';

describe('<BenefitsScreen />', () => {
  it('should render BenefitsScreen', () => {
    // TODO: improve props passing data
    render(<BenefitsScreen {...({} as BenefitsScreenProps)} />);
    expect(screen.getByText(i18n.t('benefits'))).toBeDefined();
  });
});
