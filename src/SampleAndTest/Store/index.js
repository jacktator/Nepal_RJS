import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';//logger must be the last element in the applyMiddleware as below
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducer from '../Reducers/';
//this folder is only for creating the store which is more like a bridge to connect the reducers(data) and comtainers(dynamicly display data)
//All data has been put in the reducer folder(specificly in the indicvidual xxReducers.js)
//const middleware = applyMiddleware(promise(), thunk, logger())

export default createStore (reducer, applyMiddleware(thunk))
