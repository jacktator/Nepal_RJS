
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import reducer from './Reducers';

const store = createStore(reducer, applyMiddleware(thunk));
// ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// here is for passing the data of redux to the App by put the store into the tag of Provider

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

// registerServiceWorker();
