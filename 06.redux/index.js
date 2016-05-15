import App from './containers/App';
import React from 'react';
import ReactDOM from 'react-dom';

// REDUX
import { createStore } from 'redux';
import { Provider } from 'react-redux'

/**
 * Application configuration
 */

// get the reducers (responsible of transforming state)
import todoReducer from './reducers/TodoReducers';

// The store is responsible of dispatching action to reducers
const store = createStore(
  todoReducer,
  { todos: [] } // initial state
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
