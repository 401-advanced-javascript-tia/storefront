import React from 'react';
import { connect } from 'react-redux';
import { chooseCategory } from '../../store/products-categories.js';

function Categories(props) {

  // let props = {
  //   categories: 'Seeded stuff in storefront/categories.js',
  // }

  return (
    <>
    <h2>Browse Categories</h2>
    <ul>

    {props.categories.map(category => (

      <li key={category.normalizedName} onClick={() => props.chooseCategory(category.normalizedName)}>{category.displayName}</li>
      
      ))}


    </ul>
    </>
  )
}

// use state.___ name of the reduce when we combined reducers
// state.reduceName.thingInStateYouWantToAccess
const mapStateToProps = (state) => {
  return {
    categories: state.products.categories,
  }
}

const mapDispatchToProps = {
  chooseCategory,
}

export default connect(mapStateToProps, mapDispatchToProps) (Categories);