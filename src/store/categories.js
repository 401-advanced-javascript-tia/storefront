import axios from 'axios';



const initialState = {
  categories: [{
    _id: 1,
    name: 'electronics',
    description: 'stuffstuffstuff',
  },
  {
    _id: 2,
    name: 'thing2',
    description: 'MORE stuffstuffstuff',
  },
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
  }], 
  activeCategory: 'electronics',
};

export default (state=initialState, action) => {

  const { type, payload } = action;


  switch(type) {

  case 'CATEGORY_CHOSEN':

    console.log('CATEGORY CHOSEN:', payload);
  

    let activeCategory = payload;

    return {...state, activeCategory };

  case 'UPDATE_CATEGORIES':


  

    return {...state, categories: payload};


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


export function getCategories() {


  return async function (dispatch) {

    // tried .env file in src and outside of src, neither worked
    const response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');


    dispatch({
      type: 'UPDATE_CATEGORIES',
      payload: response.data.results,
    });

  };


}

