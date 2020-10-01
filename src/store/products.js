/* eslint-disable no-case-declarations */
// define initial state, this will have stuff for products and categories

const initialState = {
  products: [
    {
      category: 'Food',
      name: 'Some Snacks',
      description: 'This is a delicious snack I think you will like it buy it try it',
      price: '1.99',
      inventoryCount: 10,
    },
    {
      category: 'Socks',
      name: 'Toe Socks',
      description: 'Socks with a cozy spot for each toe',
      price: '7.99',
      inventoryCount: 20,
    },
    {
      category: 'Socks',
      name: 'Socks for Birkenstocks',
      description: 'Tall socks with extra toe padding',
      price: '10.99',
      inventoryCount: 30,
    },
    {
      category: 'Plants',
      name: 'Fern',
      description: 'Fun little maidenhair fern for your home',
      price: '4.99',
      inventoryCount: 30,
    },
  ],
};

// define REDUCER
// action has a type and a payload (whatever addtl info is required, kind of like a body to a POST)
// reducer takes what you give it and does something accordingly
export default (state = initialState, action) => {

  console.log('!@#$%^ action in og reducer:', action);

  const { type, payload } = action;

  switch(type) {

  case 'ADDTOCART':

    console.log('ADDTOCART in og reducer:', payload);

    //payload is name of item added to cart 
    // "Some Snacks"

    let updatedProducts = state.products.map(product => {

      console.log('********** product:', product);

      if(product.name === payload.name) {
        product.inventoryCount--;
      }

      return product;

    });

    console.log('productToDecrement: ', updatedProducts);

    return {...state, products: updatedProducts};



  default:
    return state;
  }
};

