// define initial state for the cart

const initialState = {
  cart: [],
};

export default (state = initialState, action) => {

  const { type, payload } = action;

  switch(type) {

  case 'ADD_TO_CART':

    return {...state, cart: [...state.cart, payload]};


  case 'REMOVE_FROM_CART':

    const updatedCart = state.cart.filter(item => item !== payload ? item : console.log('item was deleted:', item));

    return {...state, cart: updatedCart};


  default:
    return state;
  }

};






export const addToCart = (product) => {

  return {
    type: 'ADD_TO_CART',
    payload: product,
  };

};

export const removeFromCart = (product) => {

  return {
    type: 'REMOVE_FROM_CART',
    payload: product,
  };

};