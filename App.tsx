import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';

import {ThemeProvider} from '@digitaltitransversal';
import {AppProvider} from '@sas/context';
import {RootNavigation} from '@sas/navigation/root-navigation';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView style={{flex: 1}}>
        <AppProvider>
          <RootNavigation />
        </AppProvider>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
