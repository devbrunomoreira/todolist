import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes/routes';
import Store from './store';
import './App.css';

const App = () => (
  <Provider store={Store}>
    <Routes />
  </Provider>
);

export default App;
