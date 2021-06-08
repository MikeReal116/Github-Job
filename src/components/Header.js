import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heading: {
    color: '#282538',
    fontSize: '24px',
    marginBottom: 10
  },
  github: {
    fontWeight: 700
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Typography variant='h5' component='h5' className={classes.heading}>
      <span className={classes.github}>Github </span>Jobs
    </Typography>
  );
};

export default Header;
