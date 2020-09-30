import React from 'react';

import {AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core';

// import CssBaseline from '@material-ui/core/CssBaseline';

// import Toolbar from '@material-ui/core/Toolbar';

// import Typography from '@material-ui/core/Typography';

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


function Header() {

  const classes = useStyles();

  return (
    <>

    <CssBaseline />
    <AppBar position="static" color="primary" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          THIS IS A STUFF STORE
        </Typography>
      </Toolbar>
    </AppBar>

    </>

  );
}

export default Header;