import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux';

function productsReducer(state =[], action) {
  return state;
}

function userReducer(state = "", action) {
  return state;
}

const allReducers = combineReducers({
  products: productsReducer,
  users: userReducer
});

const store = createStore(allReducers);

console.log(store.getState())

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
