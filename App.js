import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './src/containers/root';
import store from './redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
