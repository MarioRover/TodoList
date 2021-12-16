import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './src/routes';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
