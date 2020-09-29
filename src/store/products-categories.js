// define initial state, this will have stuff for products and categories

const initialState = {
  categories: {
    food: {
      normalizedName: 'food',
      displayName: 'Food Stuffs',
      description: 'Noms and noms and more noms',
    },
    socks: {
      normalizedName: 'socks',
      displayName: 'All the Socks',
      description: 'Tall socks, short socks, sneaker socks, birkenstocks',
    },
    plants: {
      normalizedName: 'plants',
      displayName: 'Plant Things',
      description: 'live plants fake plants green plants yellow plants',
    },
  },
  activeCategory: 'electronics',
  products: {
    snack: {
      category: 'food',
      name: 'Some Snacks',
      description: 'This is a delicious snack I think you will like it buy it try it',
      price: '1.99',
      inventoryCount: 10,
    },
    tallSock: {
      category: 'socks',
      name: 'Toe Socks',
      description: 'Socks with a cozy spot for each toe',
      price: '7.99',
      inventoryCount: 20,
    },
    fern: {
      category: 'plants',
      name: 'Fern',
      description: 'Fun little maidenhair fern for your home',
      price: '4.99',
      inventoryCount: 30,
    },
  }
}

// define reducer
// action has a type and a payload (whatever addtl info is required, kind of like a body to a POST)
// reducer takes what you give it and does something accordingly
export default (state = initialState, action) => {

  //peel each thing off the action and inspect the types using a switch statement
  const { type, payload } = action;

  switch(type) {

    default:
      return state;
  }
}



// TODO
// define action creators, function that gives you the action object