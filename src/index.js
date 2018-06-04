import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import Store from './Store'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import { createStore } from 'redux';
// import reducer from './reducers';
  // const store = createStore(reducer);
//here is for passing the data of redux to the App by put the store into the tag of Provider

ReactDOM.render(
  <Provider store={Store}>
    <App/>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
