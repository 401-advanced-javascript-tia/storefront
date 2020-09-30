import React from 'react';
import { connect } from 'react-redux';

import {List, ListItem, ListItemText, Divider, IconButton} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
}));

function SimpleCart(props) {

  const classes = useStyles();

  console.log('PROPS in simplecart: ', props);

  const cartItemsArr = props.cartState;


  return (
    <>

    <div className={classes.root}>


    {cartItemsArr.map(item => (
      
      
      <List component="nav" aria-label="cart list">
        <ListItem>
          <ListItemText primary={item.name} />
          <IconButton><ClearIcon></ClearIcon></IconButton>
        </ListItem>
      </List>


    ))}

    <Divider />
    </div>
    </>



  );
}

const mapStatetoProps = (state) => {

  console.log('!!!!!!!! state in simplecart.js: ', state);

  // DO SOMETHING HERE TO decrement num inventory from DIFFERENT STATE, FROM THE PRODUCTS STATE???

  return {
    cartState: state.cart.cart,
  }
}



export default connect(mapStatetoProps)(SimpleCart);