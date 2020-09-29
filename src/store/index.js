// job is to import and combine all the reducers- the dif bits of application state

import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import products from './products-categories.js';

let reducers = combineReducers({ products });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
