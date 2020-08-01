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
import {getLocalTheme, getRemoteTheme} from "./utils/getTheme";

// Set base URL in request
axios.defaults.baseURL = API_WP;
axios.defaults.headers.post['Content-Type'] = 'application/json';

// Check the token
if (sessionStorage.token) {
  setAuthTokenInHeader(sessionStorage.token);
}

const theme = getLocalTheme();

const renderApp = theme => ReactDOM.render(
  <Provider store={store}>
    <App themeRendered={theme} />
  </Provider>,
  document.getElementById('root'),
);

theme ? renderApp(theme) : getRemoteTheme(renderApp);


// registerServiceWorker();
// <App createTheme={createTheme()} />
