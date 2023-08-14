import React from 'react';
import {Text} from 'react-native';

import {render, screen} from '@testing-library/react-native';

import {useAppCtx, AppProvider} from './app-context';

describe('app-context', () => {
  describe('<AppProvider />', () => {
    it('should render children in GameProvider', () => {
      render(
        <AppProvider>
          <Text testID="demo">demo text</Text>
        </AppProvider>,
      );

      expect(screen.getByTestId('demo')).toHaveTextContent('demo text');
    });
  });

  describe('useAppCtx', () => {
    const DemoComponent = () => {
      useAppCtx();

      return null;
    };
    const original = console.error;

    beforeEach(() => {
      console.error = jest.fn();
    });

    afterEach(() => {
      console.error = original;
    });

    it('should return error when its not wrapped with AppProvider', () => {
      try {
        render(<DemoComponent />);
      } catch (err) {
        if (err instanceof Error) {
          expect(err.message).toBe(
            'appContext must be use whitin the AppProvider',
          );
        }
      }
    });
  });
});
