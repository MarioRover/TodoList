import React from 'react';
import {Provider} from 'react-redux';
import {store, presistor} from './src/redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './src/routes';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={presistor}>
        <SafeAreaProvider>
          <Routes />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
