import React from 'react';

import {fireEvent, render, screen, i18n} from '@test-utils';

import {UserProfileMenuLanguage} from './user-profile-menu-language';

describe('<UserProfileMenuLanguage />', () => {
  let changeLanguageMock: jest.SpyInstance;

  beforeEach(() => {
    changeLanguageMock = jest.spyOn(i18n, 'changeLanguage');
    render(<UserProfileMenuLanguage />);
  });

  it('should calls i18n.changeLanguage with "es" when current language is "en"', () => {
    i18n.language = 'en';

    const button = screen.getByTestId('user-progile-menu-language-btn');
    fireEvent.press(button);

    expect(changeLanguageMock).toHaveBeenCalledWith('es');
  });

  it('should calls i18n.changeLanguage with "en" when current language is "es"', () => {
    i18n.language = 'es';

    const button = screen.getByTestId('user-progile-menu-language-btn');
    fireEvent.press(button);

    expect(changeLanguageMock).toHaveBeenCalledWith('en');
  });
});
