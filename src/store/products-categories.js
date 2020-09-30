// define initial state, this will have stuff for products and categories

const initialState = {
  categories: [
    {
      normalizedName: 'food',
      displayName: 'Food',
      description: 'Noms and noms and more noms',
    },
    {
      normalizedName: 'socks',
      displayName: 'Socks',
      description: 'Tall socks, short socks, sneaker socks, birkenstocks',
    },
    {
      normalizedName: 'plants',
      displayName: 'Plants',
      description: 'live plants fake plants green plants yellow plants',
    },
  ],
  activeCategory: 'Food',
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
      inventoryCount: 20,
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

  //peel each thing off the action and inspect the types using a switch statement
  const { type, payload } = action;

  switch(type) {

  case 'CATEGORYCHOSEN':

    console.log('CATEGORY CHOSEN:', payload);
  

    let activeCategory = payload;

    return {...state, activeCategory };


  default:
    return state;
  }
};



// TODO
// define action creators, function that gives you the action object

export const chooseCategory = (category) => {
  return {
    type: 'CATEGORYCHOSEN',
    payload: category,
  };
};
