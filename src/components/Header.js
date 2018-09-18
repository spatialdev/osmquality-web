import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Share from '@material-ui/icons/Share';
import MoreHoriz from '@material-ui/icons/MoreHoriz';

const styles = {
  root: {
    flexGrow: 1,
  },
  headerDiv: {
    backgroundColor: '#7AC143',
    position: 'relative',
    height: '88px',
  },
  header: {
    textAlign: 'center',
    color: '#FFFFFF',
    width: '100%',
    fontSize: '25px',
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    margin: 0,
  },
  toolbar: {
    height: '27px',
  },
  buttonLeft: {
    position: 'absolute',
    left: 0,
  },
  buttonRight: {
    position: 'absolute',
    right: 0,
  },
  moreIcon: {
    color: '#FFFFFF',
    position: 'absolute',
    right: 0,
  },
};

class Header extends Component {
  render() {
    const { classes, history, location } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <div className={classes.headerDiv}>
            <Button className={classes.moreIcon}><MoreHoriz/></Button>
            <h1 className={classes.header}>
              App Title Here
            </h1>
          </div>
          <Toolbar className={classes.toolbar}>
            {location.pathname !== '/' ?
              <Button className={classes.buttonLeft}
                      onClick={() => history.goBack()}><KeyboardArrowLeft/>Back</Button> : null}
            <Button className={classes.buttonRight}>Share<Share/></Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Header));