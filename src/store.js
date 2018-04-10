import {applyMiddleware, createStore}  from 'redux';

//middlewares
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import reducers from './reducers/index';

const middleware = applyMiddleware(promise(), thunk, logger());

const extenssion = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(reducers,extenssion,middleware);