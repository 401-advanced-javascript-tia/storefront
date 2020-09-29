import React from 'react';
import { connect } from 'react-redux';

function Products(props) {

  console.log('#### props in Products module:', props);

  // const props = {
  //   products: 'Seeded stuff in storefront/products.js',
  // }

  const productList = props.state.products.filter(product => product.category === props.state.activeCategory);

  // productList is now an array of objects that have that category name

  console.log('productList : ', productList);


  return (
    <>
    <h2>Products:</h2>

    <ul>


    {productList.map(product => (
      <>

      <li>{product.name}</li>
      <li>{product.description}</li>

      </>
      
      ))}

    
    </ul>



{/* 
    <ul>
    
      {props.state.products.map(product => (
    
        if(product.category === props.state.activeCategory) {
      
          <li key={}>{product}</li>
      
        }
    
      ))}




    </ul> */}
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