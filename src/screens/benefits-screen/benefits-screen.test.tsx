import 'react-native';
import React from 'react';

import {render, screen} from '@testing-library/react-native';

import {BenefitsScreen, BenefitsScreenProps} from './benefits-screen';

describe('<BenefitsScreen />', () => {
  it('should render BenefitsScreen', () => {
    // TODO: improve props passing data
    render(<BenefitsScreen {...({} as BenefitsScreenProps)} />);
    expect(screen.getByText(/BenefitsScreen/i)).toBeDefined();
  });
});
