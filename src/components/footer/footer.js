import React from 'react';
import { CssBaseline, Grid, Typography, Link, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

function Footer() {

  const classes = useStyles();


    return (

      <>
        <CssBaseline />


        <Container maxWidth="lg" component="footer" className={classes.footer}>
          <Grid container spacing={4} justify="left">

            <footer>&copy; 401 JavaScript - Tia Low</footer>

          </Grid>
        </Container>

      </>

);

}

export default Footer;