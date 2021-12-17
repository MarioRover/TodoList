import React from 'react';
import {Provider} from 'react-redux';
import {store, presistor} from './src/redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import Routes from './src/routes';
import {CustomToast} from './src/components';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={presistor}>
        <SafeAreaProvider>
          <Routes />
          <Toast
            position="top"
            topOffset={20}
            config={toastConfig}
            visibilityTime={3000}
          />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

const toastConfig = {
  success: props => <CustomToast type="success" {...props} />,
  error: props => <CustomToast type="error" {...props} />,
  info: props => <CustomToast type="info" {...props} />,
};

export default App;
