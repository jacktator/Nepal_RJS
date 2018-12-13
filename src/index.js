import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { BASE_URL } from './config';
import { setAuthTokenInHeader } from './UserConfig/action';
import store from './store';
import './index.css';

// Set base URL in request
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

// Check the token
if (sessionStorage.token) {
  setAuthTokenInHeader(sessionStorage.token);
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// registerServiceWorker();
