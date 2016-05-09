import Main from './Main';
import React from 'react';
import ReactDOM from 'react-dom';

const initialState = { initial: 5 };

ReactDOM.render(
  <Main initial={ initialState.initial } />,
  document.getElementById('root')
);
