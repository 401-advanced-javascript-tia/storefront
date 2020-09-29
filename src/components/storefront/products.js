import React from 'react';
import { connect } from 'react-redux';

function Products(props) {

  console.log('#### props in Products module:', props);

  const productList = props.state.products.filter(product => product.category === props.state.activeCategory);

  // productList is now an array of objects that have that category name

  console.log('productList : ', productList);


  return (
    <>
    <h2>Products:</h2>

    <ul>


    {productList.map(product => (
      <>
      <br/>

      <li key={product.name}>{product.name}</li>
      <li key={product.description}>{product.description}</li>

      </>

      ))}

    
    </ul>

    </>
  )

}

// use state.___ name of the reduce when we combined reducers
const mapStateToProps = (state) => {

  console.log('----- state in products module:', state);

  return {
    state: state.products,
  }
}

export default connect(mapStateToProps) (Products);