import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '25%',
    color: '#334680',
    marginRight: 20
  },
  location: {
    color: '#B9BDCF',
    fontWeight: 700,
    fontSize: 14,
    textTransform: 'uppercase',
    marginTop: 10,
    marginBottom: 10
  },
  form: {
    width: '100%',
    marginBottom: 10
  },
  input: {
    width: '100%'
  },
  radio: {
    color: '#334680'
  }
}));

const SideDrawer = () => {
  const [state, setState] = useState(false);
  const [jobLocation, setJobLocation] = useState('');
  const classes = useStyles();

  const handleChange = (event) => {
    setState(event.target.checked);
  };

  return (
    <div className={classes.root}>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name='fulltime'
            color='primary'
          />
        }
        label='Full time'
      />

      <Typography variant='h4' className={classes.location}>
        Location
      </Typography>
      <form className={classes.form} noValidate autoComplete='off'>
        <TextField
          label='City, state, zipcode or country'
          variant='outlined'
          className={classes.input}
        />
      </form>
      <RadioGroup
        aria-label='job location'
        name='location'
        value={jobLocation}
        onChange={(e) => setJobLocation(e.target.value)}
        className={classes.radiogroup}
      >
        <FormControlLabel
          value='london'
          control={<Radio color='primary' />}
          label='London'
        />
        <FormControlLabel
          value='amsterdam'
          control={<Radio color='primary' />}
          label='Amsterdam'
        />
        <FormControlLabel
          value='berlin'
          control={<Radio color='primary' />}
          label='Berlin'
        />
        <FormControlLabel
          value='newyork'
          control={<Radio color='primary' />}
          label='New York'
        />
      </RadioGroup>
    </div>
  );
};

export default SideDrawer;
