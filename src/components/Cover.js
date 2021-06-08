import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import bgImage from '../assets/backgroundImg.png';

const useStyles = makeStyles(() => ({
  card: {
    marginBottom: 15
  },
  media: {
    height: 138,
    borderRadius: 8
  },
  input: {
    backgroundColor: '#fff',
    width: '50%',
    color: '#b9bdcf',
    height: '55px'
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  searchbutton: {
    textTransform: 'none',
    backgroundColor: '#1E86FF',
    marginLeft: '-150px',
    height: '47px',
    width: '146px',
    fontWeight: '300'
  }
}));
const Cover = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia image={bgImage} title='Cover Image' className={classes.media}>
        <form noValidate autoComplete='off' className={classes.form}>
          <TextField
            label='Title, companies'
            variant='outlined'
            className={classes.input}
          />
          <Button
            variant='contained'
            color='primary'
            type='submit'
            className={classes.searchbutton}
          >
            Search
          </Button>
        </form>
      </CardMedia>
    </Card>
  );
};

export default Cover;
