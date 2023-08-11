import React, {ComponentType, ReactNode} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {RenderOptions, render} from '@testing-library/react-native';
import {I18nextProvider} from 'react-i18next';

import {ThemeProvider} from '@digitaltitransversal';
import {AppProvider, AppContext} from '@sas/context';

import i18n from '../../../services/i18n';

type AllTheProvidersProps = {
  children: ReactNode;
  contextState?: Partial<AppContext>;
  Wrapper?: ComponentType<{children: ReactNode}>;
};

const AllTheProviders = ({
  children,
  contextState,
  Wrapper,
}: AllTheProvidersProps) => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          <AppProvider initialValue={contextState}>
            {Wrapper ? <Wrapper>{children} </Wrapper> : children}
          </AppProvider>
        </I18nextProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: RenderOptions & Pick<AllTheProvidersProps, 'contextState'>,
) =>
  render(ui, {
    ...options,
    wrapper: props => (
      <AllTheProviders
        {...props}
        contextState={options?.contextState}
        Wrapper={options?.wrapper}
      />
    ),
  });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render, i18n};
