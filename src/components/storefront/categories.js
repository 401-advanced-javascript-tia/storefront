import React from 'react';
import { connect } from 'react-redux';

function Categories(props) {

  // let props = {
  //   categories: 'Seeded stuff in storefront/categories.js',
  // }

  return (
    <>
    <h2>Browse Categories</h2>
    <ul>

    {Object.keys(props.categories).map(category => (

      <li>{category}</li>
      
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

export default connect(mapStateToProps) (Categories);