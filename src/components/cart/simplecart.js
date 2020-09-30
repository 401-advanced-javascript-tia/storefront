import React from 'react';
import { connect } from 'react-redux';


function SimpleCart(props) {

  console.log('PROPS in simplecart: ', props);





  return (

    <ul>

      <li onClick={() => props.addToCart()}>{props.cartState}</li>
      <li>Item 2</li>
      <li>Item 3</li>

    </ul>


  );
}

const mapStatetoProps = (state) => {

  console.log('!!!!!!!! state in simplecart.js: ', state);

  return {
    cartState: state.cart.cart,
  }
}



export default connect(mapStatetoProps)(SimpleCart);