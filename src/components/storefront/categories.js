import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { chooseCategory } from '../../store/products-categories.js';
import { chooseCategory } from '../../store/categories.js';

// import { getCategories } from '../../store/categories.js';


import {Box, ButtonGroup, Button, CssBaseline} from '@material-ui/core';


import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  browseCategories: {
    padding: 4,
    margin: 4,
  },
}));


function Categories(props) {

  console.log('CATEGORIES&&&&&&&', props);


  const classes = useStyles();


  // useEffect(() => {
  // props.getCategories();
  // }, [props.getCategories])


  return (
    
    <>

    <CssBaseline />




    <Box>


    <h2 className={classes.browseCategories}>Browse Categories</h2>
    <ButtonGroup variant="text" color="primary" aria-label="text primary button group">

    {props.categories.categories.map(category => (
      
      <Button key={category.normalizedName} onClick={() => props.chooseCategory(category.displayName)}>
        {category.displayName}
      </Button>

    ))}

    </ButtonGroup>

    </Box>
    </>
  )
}

// use state.___ name of the reduce when we combined reducers
// state.reduceName.thingInStateYouWantToAccess
const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  }
}

const mapDispatchToProps = {
  chooseCategory,
  // getCategories,
}

export default connect(mapStateToProps, mapDispatchToProps) (Categories);