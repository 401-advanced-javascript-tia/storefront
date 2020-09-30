// define initial state for the cart

const initialState = {
  cart: 'one item',
};

export default (state = initialState, action) => {

  const { type, payload } = action;

  switch(type) {

  case 'ADDTOCART':

    let cart = payload;

    return {...state, cart};

  default:
    return state;
  }

}

export const addToCart = (itemName) => {

  console.log('ITEM in cart store:', itemName);

  return {
    type: 'ADDTOCART',
    payload: itemName,
  };
};