import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import App from './App';
import { BASE_URL } from './config';
import { setAuthTokenInHeader } from './UserConfig/action';
import store from './store';
import './index.css';
import defaultTheme from './theme';

// Set base URL in request
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

const createTheme = (themeJson) => {
  const m = JSON.parse(themeJson);
  return createMuiTheme(m);
};

// Check the token
if (sessionStorage.token) {
  setAuthTokenInHeader(sessionStorage.token);
}

const themeExist = themeName => localStorage.getItem(themeName);

const getTheme = (callback) => {
  axios.post('https://nepal.sk8tech.io/wp-json/jwt-auth/v1/token/', { username: 'boy@test.com', password: '?' })
    .then(
      (res) => {
        const themeJ = res.data;
        callback(createTheme(themeJ));
      },
    )
    .catch(
      err => callback(defaultTheme),
    );
};

const renderApp = theme => ReactDOM.render(
  <Provider store={store}>
    <App themeRendered={theme} />
  </Provider>,
  document.getElementById('root'),
);

themeExist('themeName') ? renderApp(createTheme(themeExist('themeName'))) : getTheme(renderApp);


// registerServiceWorker();
// <App createTheme={createTheme()} />
