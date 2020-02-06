// 入口文件 相当于图书馆
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from "./reducer";
import createSagaMiddleware from 'redux-saga'
import mySagas from './mySagas.js'

const sageMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;

const enhancer = composeEnhancers(applyMiddleware(sageMiddleware));

const store = createStore(
	reducer,
	enhancer
);

sageMiddleware.run(mySagas);

export default store;

