import App from './containers/App';
import React from 'react';
import ReactDOM from 'react-dom';

// REDUX
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

/**
 * Application configuration
 */

// get the reducers (responsible of transforming state)
import todoReducer from './reducers/TodoReducers';

const loggerMiddleware = createLogger();

// The store is responsible of dispatching action to reducers
const store = createStore(
  todoReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
