import 'react-native';
import React from 'react';

import {render, screen} from '@testing-library/react-native';

import {OnboardingScreen, OnboardingScreenProps} from './onboarding-screen';

describe('<OnboardingScreen />', () => {
  it('should render OnboardingScreen', () => {
    // TODO: improve props passing data
    render(<OnboardingScreen {...({} as OnboardingScreenProps)} />);
    expect(screen.getByText(/OnboardingScreen/i)).toBeDefined();
  });
});
