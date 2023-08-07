import React, {ReactNode} from 'react';

import {RenderOptions, render} from '@testing-library/react-native';

import {ThemeProvider} from '@digitaltitransversal';
import {AppProvider} from '@sas/context';

type AllTheProvidersProps = {
  children: ReactNode;
};

const AllTheProviders = ({children}: AllTheProvidersProps) => {
  return (
    <ThemeProvider>
      <AppProvider>{children}</AppProvider>
    </ThemeProvider>
  );
};

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, {
    wrapper: props => <AllTheProviders {...props} />,
    ...options,
  });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
