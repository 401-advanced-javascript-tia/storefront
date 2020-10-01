import React from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
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
}));


function ActiveCategory(props) {

  console.log('props in ACTIVE CAT', props);

  const catObj = props.categories.filter(category => category.name === props.activeCategory)

  console.log('catOBJ in ACTIVE CAT:   ', catObj);

  const classes = useStyles();


  return (
    <>

      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        {props.activeCategory}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
        {catObj[0].description}
        </Typography>
      </Container>


    </>
  )
}

// use state.___ name of the reduce when we combined reducers
const mapStateToProps = (state) => {
  return {
    activeCategory: state.categories.activeCategory,
    categories: state.categories.categories,
  }
}

export default connect(mapStateToProps) (ActiveCategory);
