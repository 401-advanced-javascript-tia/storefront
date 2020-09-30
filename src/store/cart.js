// define initial state for the cart

const initialState = {
  cart: [],
};

export default (state = initialState, action) => {

  const { type, payload } = action;

  switch(type) {

  case 'ADDTOCART':

    // let cart = [payload];
    // payload is whole product item
    // payload.name is the whole name
    console.log('&&&&&&&&& payload:', payload);

    return {...state, cart: [...state.cart, payload]};

  default:
    return state;
  }

}

export const addToCart = (product) => {

  console.log('PRODUCT in cart store:', product);

  return {
    type: 'ADDTOCART',
    payload: product,
  };
};