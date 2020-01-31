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
  const m = (typeof themeJson === 'string') ? JSON.parse(themeJson) : themeJson;
  return createMuiTheme(m);
};

// Check the token
if (sessionStorage.token) {
  setAuthTokenInHeader(sessionStorage.token);
}

// add setItem for different theme(should through personal setting`different company` from res)
const themeExist = themeName => localStorage.getItem(themeName);

const getTheme = (callback) => {
  axios.get('https://am.sk8.tech/wp-json/am/v2/skin')
    .then(
      (res) => {
        const themeJ = res.data;
        callback(createTheme(themeJ));
      },
    )
    .catch(
      (err) => {
        console.error(err);
        callback(defaultTheme);
      },
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
