import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PublicIcon from '@material-ui/icons/Public';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';

const useStyles = makeStyles(() => ({
  card: {
    display: 'flex',
    height: '114px',
    marginBottom: 25,
    alignItems: 'center',
    padding: '0 10px'
  },
  image: {
    width: '90px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    color: '#334680',
    fontWeight: 500,
    marginLeft: 10
  },
  job: {
    fontSize: '18px'
  },
  company: {
    fontSize: 12
  },
  button: {
    color: '#334680',
    width: 80,
    textTransform: 'none',
    fontSize: 12,
    border: ' 1px solid #334680',
    height: 26,
    padding: '6px 12px'
  },
  bottom: {
    color: '#B9BDCF',
    fontSize: 12,
    alignSelf: 'flex-end',
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 10
  },
  location: {
    display: 'flex',
    alignItems: 'center',
    marginRight: ' 12px'
  },
  city: {
    marginLeft: 10
  },
  date: {
    display: 'flex',
    alignItems: 'center'
  }
}));

const formatName = (name) => {
  return name
    .split(' ')
    .map((el) => el[0]?.toUpperCase() + el.slice(1, el.length)?.toLowerCase())
    .join(' ');
};

const formatDate = (somedate) => {
  let formatteddate = new Date() - new Date(somedate);
  formatteddate = Math.round(formatteddate / (1000 * 60 * 60 * 24));
  if (formatteddate < 30) {
    return `${formatteddate}  days ago`;
  }
  return somedate;
};

const JobItem = ({ company_logo, company, job, type, createdAt, location }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia title='company image'>
        <img src={company_logo} alt='company_image' className={classes.image} />
      </CardMedia>
      <Typography className={classes.details}>
        <span>{formatName(company)}</span>
        <span className={classes.job}>{job}</span>
        <Button variant='outlined' className={classes.button}>
          {type}
        </Button>
      </Typography>
      <Typography className={classes.bottom}>
        <span className={classes.location}>
          <PublicIcon />
          <span className={classes.city}>{location}</span>
        </span>
        <span className={classes.date}>
          <span>
            <WatchLaterOutlinedIcon />
          </span>{' '}
          <span>{formatDate(createdAt)}</span>
        </span>
      </Typography>
    </Card>
  );
};

export default JobItem;
