import React from 'react';
import Header from './Header';
import Cover from './Cover';
import { makeStyles } from '@material-ui/core/styles';
import JobList from './Pages/JobList';
import SideDrawer from './SideDrawer';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  tootlbar: theme.mixins.toolbar,
  main: {
    display: 'flex'
  }
}));

const Layout = () => {
  const classes = useStyles();
  return (
    <Container>
      <Header />
      <Cover />
      <div className={classes.main}>
        <SideDrawer />
        <JobList />
      </div>
    </Container>
  );
};

export default Layout;
