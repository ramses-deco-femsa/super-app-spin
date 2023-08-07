import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';

import {ThemeProvider} from '@digitaltitransversal';
import {RootNavigation} from '@sas/navigation/root-navigation';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView style={{flex: 1}}>
        <RootNavigation />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
