import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';

import {Button, ThemeProvider} from '@super-app-theme';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView>
        <Button text="Hola ironhackers" onPress={() => console.log('spin')} />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
