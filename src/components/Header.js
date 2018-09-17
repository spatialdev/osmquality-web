import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Share from '@material-ui/icons/Share';

const styles = theme =>({
  root: {
    flexGrow: 1,
  },
  header: {
    textAlign: 'center',
    backgroundColor: '#7AC143',
    color: '#FFFFFF',
    height: '88px',
    width: '100%',
    fontSize: '25px',
    margin: 0,
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  toolbar: {
    height: '27px',
  },
  buttonLeft: {
    // color: '#484848',
    position:'absolute',
    left: 0,
  },
  buttonRight: {
    position:'absolute',
    right: 0,

  }
});

const Header = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
          <h1 className={classes.header}>
            App Title Here
          </h1>
        <Toolbar className={classes.toolbar}>
          <Button className={classes.buttonLeft} size="small"><KeyboardArrowLeft/>Back</Button>
          <Button className={classes.buttonRight} size="small">Share<Share/></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);