// import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';

import {RootNavigation} from '@sas/navigation/root-navigation';
import {ThemeProvider} from '@super-app-theme';

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
