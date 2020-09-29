import mainReducer, { chooseCategory } from '../store/products-categories.js';

it('should have initial state', () => {

  // undefined is being passed in to trigger the default value for state
  const state = mainReducer(undefined, {});

  expect(state.activeCategory).toEqual('food');

});

it.skip('should modify active category', () => {


});




