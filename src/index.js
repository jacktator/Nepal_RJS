import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import App from './App';
import {API_WP, API_AM, SALES_HOME} from './config';
import { setAuthTokenInHeader } from './UserConfig/action';
import store from './store';
import './index.css';
// import defaultTheme from './theme';
import {getCompany} from "./utils/getCompany";

// Set base URL in request
axios.defaults.baseURL = API_WP;
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

const company = getCompany();

const getTheme = (callback) => {
  axios.get(`${API_AM}/theme/${company}`)
    .then(
      (res) => {
        console.log('Company Theme Loaded: ', company);
        const themeJ = res.data;
        callback(createTheme(themeJ));
      },
    )
    .catch(
      (err) => {
        console.log('Default Theme Loaded: ', company);
        console.error(err);
        window.location.href = SALES_HOME;
        // callback(defaultTheme);
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
