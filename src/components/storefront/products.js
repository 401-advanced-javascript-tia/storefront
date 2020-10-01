import React from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../../store/cart.js';

import { Container, Grid, Card, CardHeader, CardContent, CardActions, Button, Typography } from '@material-ui/core';

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



function Products(props) {

  console.log('#### props in Products module:', props);

  const productList = props.products.products.filter(product => product.category === props.activeCategory && product.inventoryCount > 0);

  // productList is now an array of objects that have that category name

  console.log('productList : ', productList);

  const classes = useStyles();



  return (
    <>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="stretch">
          <Grid item xs={12} sm={6} md={4}>

            {productList.map(product => (

            <Card key={product.name}>
              <CardHeader title="Card 1"
                titleTypographyProps={{ align: 'center' }}
                className={classes.cardHeader}
                />
              <CardContent>
                <Typography variant="h5" color="textPrimary">
                {product.name}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                {product.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant='outlined' color="primary" onClick={() => props.addToCart(product)}>Add to Cart</Button>
              </CardActions>
            </Card>

            ))}


          </Grid>
        </Grid>
      </Container>

</>

)


}

// use state.___ name of the reduce when we combined reducers
const mapStateToProps = (state) => {

  console.log('----- state in products module:', state);

  return {
    products: state.products,
    activeCategory: state.categories.activeCategory,
  }
}

const mapDispatchToProps = {
  addToCart,
}

export default connect(mapStateToProps, mapDispatchToProps) (Products);