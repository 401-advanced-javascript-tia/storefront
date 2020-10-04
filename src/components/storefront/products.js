import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../../store/cart.js';
import { getProducts } from '../../store/products.js'


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
  card: {
    margin: '1em',
  }
}));



function Products(props) {

  useEffect(() => {
    props.getProducts();
  }, [props.getProducts])

  console.log('#### props in Products module:', props);

  const productList = props.products.filter(product => product.category === props.activeCategory && product.inStock > 0);

  // productList is now an array of objects that have that category name

  console.log('productList : ', productList);

  const classes = useStyles();



  return (
    <>
      <Container maxWidth="md" component="main">
        <Grid container spacing={2} direction="row" justify="center"  alignItems="center">
          <Grid container item xs={12} spacing={3} >

            {productList.map(product => (



            <Card key={product.name} className={classes.card}>
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
    products: state.products.products,
    activeCategory: state.categories.activeCategory,
  }
}

const mapDispatchToProps = {
  addToCart,
  getProducts,
}

export default connect(mapStateToProps, mapDispatchToProps) (Products);