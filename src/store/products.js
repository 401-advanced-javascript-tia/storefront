/* eslint-disable no-case-declarations */
// define initial state, this will have stuff for products and categories

import axios from 'axios';

const initialState = {
  products: [],
};

// define REDUCER
// action has a type and a payload (whatever addtl info is required, kind of like a body to a POST)
// reducer takes what you give it and does something accordingly
export default (state = initialState, action) => {

  const { type, payload } = action;

  switch(type) {

  case 'ADDTOCART':

    let updatedProducts = state.products.map(product => {

      if(product.name === payload.name) {
        product.inventoryCount--;
      }

      return product;

    });

    return {...state, products: updatedProducts};

  
  case 'UPDATE_PRODUCTS':

    return {...state, products: payload};

  default:
    return state;
  }
};

export function getProducts() {

  return async function (dispatch) {

    const response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');

    dispatch({
      type: 'UPDATE_PRODUCTS',
      payload: response.data.results,
    });
  };
}

