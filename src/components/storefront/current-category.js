import React from 'react';
import { connect } from 'react-redux';

function CurrentCategory(props) {

  return (
    <>
    <h1>Current Category: {props.activeCategory}</h1>
    <h2>category description: </h2>
    </>
  )
}

// use state.___ name of the reduce when we combined reducers
const mapStateToProps = (state) => {
  return {
    activeCategory: state.products.activeCategory,
  }
}

export default connect(mapStateToProps) (CurrentCategory);
