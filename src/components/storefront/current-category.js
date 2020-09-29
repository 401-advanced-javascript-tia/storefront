import React from 'react';
import { connect } from 'react-redux';

function ActiveCategory(props) {

  const catObj = props.categories.filter(category => category.normalizedName === props.activeCategory)

  return (
    <>
    <h1>Current Category: {props.activeCategory}</h1>
    <h2>Description: {catObj[0].description}</h2>
    </>
  )
}

// use state.___ name of the reduce when we combined reducers
const mapStateToProps = (state) => {
  return {
    activeCategory: state.products.activeCategory,
    categories: state.products.categories,
  }
}

export default connect(mapStateToProps) (ActiveCategory);
