// job is to import and combine all the reducers- the dif bits of application state

import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import products from './products-categories.js';
import cart from './cart.js';

let reducers = combineReducers({ products, cart });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
