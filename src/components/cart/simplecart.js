import React from 'react';
import { connect } from 'react-redux';

import { removeFromCart } from '../../store/cart.js';

import {List, ListItem, ListItemText, IconButton} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
    
  },
}));

function SimpleCart(props) {

  const classes = useStyles();

  const cartItemsArr = props.cartState;


  return (
    <>

    <div className={classes.root}>


    {cartItemsArr.map(item => (
      
      
      <List component="nav" aria-label="cart list" key={Math.random()}>
        <ListItem>
          <ListItemText primary={item.name} />
          <IconButton onClick={() => props.removeFromCart(item)}><ClearIcon></ClearIcon></IconButton>
        </ListItem>
      </List>


    ))}

    </div>
    </>



  );
}

const mapStatetoProps = (state) => {

  return {
    cartState: state.cart.cart,
  }
}

const mapDispatchToProps = {
  removeFromCart,
}



export default connect(mapStatetoProps, mapDispatchToProps)(SimpleCart);