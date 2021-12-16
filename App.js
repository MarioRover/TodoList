import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/Redux';
import DashboardPage from './src/Views/DashboardView';

const App = () => {
  return (
    <Provider store={store}>
      <DashboardPage />
    </Provider>
  );
};

export default App;
