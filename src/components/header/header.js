import React from 'react';
import { connect } from 'react-redux';

import {AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  fullHeight: {
    height: "100%"
  },
}));


function Header(props) {

  const classes = useStyles();

  const numItemsInCart = props.cartState.length;

  return (
    <>

    <CssBaseline />
    <AppBar position="static" color="primary" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          THIS IS A STUFF STORE Cart ({numItemsInCart})
        </Typography>
      </Toolbar>
    </AppBar>

    </>

  );
}

const mapStatetoProps = (state) => {

  return {
    cartState: state.cart.cart,
  }
}



export default connect(mapStatetoProps)(Header);