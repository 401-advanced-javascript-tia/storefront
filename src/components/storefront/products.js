import React from 'react';
// import { connect } from 'react-redux';

function Products() {

  const props = {
    products: 'Seeded stuff in storefront/products.js',
  }

  return (
    <>
    <h1>List of products here: {props.products}</h1>
    </>
  )
}

// use state.___ name of the reduce when we combined reducers
// const mapStateToProps = (state) => {
//   return {
//     activeCategory: state.products.activeCategory,
//   }
// }

export default Products;