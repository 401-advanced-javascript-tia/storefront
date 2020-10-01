import axios from 'axios';



const initialState = {
  categories: [{
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
  }], 
  activeCategory: 'Food',
};

export default (state=initialState, action) => {

  const { type, payload } = action;


  switch(type) {

  case 'CATEGORY_CHOSEN':

    console.log('CATEGORY CHOSEN:', payload);
  

    let activeCategory = payload;

    return {...state, activeCategory };

  // case 'UPDATE_CATEGORY':

  //   return {...state, categories: payload};


  // case 'CHANGE_CATEGORY':



  //   // unpack whats already in there, make a copy, and move left to right to make whatever updates you want to make
  //   return {...state, activeCategory: action.payload };



  default:

    return state;

      
  }

};

export const chooseCategory = (category) => {
  return {
    type: 'CATEGORY_CHOSEN',
    payload: category,
  };
};


// export function getCategories() {

//   // return {
//   //   type: 'UPDATE_CATEGORIES',
//   //   payload: [{
//   //     normalizedName: 'food',
//   //     displayName: 'Food',
//   //     description: 'Noms and noms and more noms',
//   //   }],
//   // };


//   // return async function (dispath) {

//   //   const response = await axios.get('url' + 'categories maybe');
//   //   dispatch({
//   //     type: 'UPDATE_CATEGORIES',
//   //     payload: response.data.results,
//   //   })


//   // };






// }

