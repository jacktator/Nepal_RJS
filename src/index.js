
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import enUS from 'antd-mobile/lib/locale-provider/en_US';
import {LocaleProvider} from 'antd-mobile';
// import logger from 'redux-logger';//logger must be the last element in the applyMiddleware as below
// import promise from 'redux-promise-middleware';
// import registerServiceWorker from './registerServiceWorker';
import reducer from './Reducers/';

const store = createStore (reducer, applyMiddleware(thunk));
//,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//here is for passing the data of redux to the App by put the store into the tag of Provider

ReactDOM.render(
  <LocaleProvider locale={enUS}>
  <Provider store={store}>
    <App/>
  </Provider>
  </LocaleProvider>,
  document.getElementById('root'));

//registerServiceWorker();
