import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';//logger must be the last element in the applyMiddleware as below
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducer from './Reducers/';

const store = createStore (reducer, applyMiddleware(thunk))

//here is for passing the data of redux to the App by put the store into the tag of Provider

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
