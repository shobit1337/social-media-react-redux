import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routes from './Routes';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { registerSW } from 'virtual:pwa-register';

registerSW();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
);
