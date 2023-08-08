import React, {ReactNode} from 'react';

import {RenderOptions, render} from '@testing-library/react-native';

import {ThemeProvider} from '@digitaltitransversal';
import {AppProvider, AppContext} from '@sas/context';

type AllTheProvidersProps = {
  children: ReactNode;
  contextState: Partial<AppContext>;
};

const AllTheProviders = ({children, contextState}: AllTheProvidersProps) => {
  return (
    <ThemeProvider>
      <AppProvider initialValue={contextState}>{children}</AppProvider>
    </ThemeProvider>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: RenderOptions & Pick<AllTheProvidersProps, 'contextState'>,
) =>
  render(ui, {
    wrapper: props => (
      <AllTheProviders {...props} contextState={options?.contextState} />
    ),
    ...options,
  });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
