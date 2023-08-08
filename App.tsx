import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';

import {I18nextProvider} from 'react-i18next';

import {ThemeProvider} from '@digitaltitransversal';
import {AppProvider} from '@sas/context';
import {RootNavigation} from '@sas/navigation/root-navigation';

import i18n from './services/i18n';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView style={{flex: 1}}>
        <I18nextProvider i18n={i18n}>
          <AppProvider>
            <RootNavigation />
          </AppProvider>
        </I18nextProvider>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
