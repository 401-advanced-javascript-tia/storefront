// job is to import and combine all the reducers- the dif bits of application state

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import products from './products-categories.js';
import cart from './cart.js';
import categories from './categories.js';

let reducers = combineReducers({ products, cart, categories });

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();
