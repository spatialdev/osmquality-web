import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import Toolbar from '@material-ui/core/Toolbar';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer/SwipeableDrawer';

import share from '../images/share.svg';


const styles = {
  root: {
    flexGrow: 1,
  },
  headerDiv: {
    backgroundColor: '#7AC143',
    position: 'relative',
    height: '60px',
  },
  header: {
    textAlign: 'center',
    color: '#FFFFFF',
    width: '100%',
    fontSize: '38px',
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    margin: 0,
    cursor: 'pointer',
  },
  toolbar: {
    height: '27px',
  },
  buttonLeft: {
    position: 'absolute',
    left: '-8px',
  },
  buttonRight: {
    position: 'absolute',
    right: 0,
  },
  moreIcon: {
    color: '#FFFFFF',
    position: 'absolute',
    right: 0,
    transform: 'scale(1.5)',
    top:0,
  },
  shareIcon: {
    height: '20px',
    width: '20px',
    marginLeft: '5px',
  },
  backIcon: {
    height: '20px',
    width: '20px',
    marginLeft: '5px',
  },
  list: {
    width: 250,
  },
};

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);


class Header extends Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    console.log(open);
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes, history, location } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <div className={classes.headerDiv}>
            <h1 className={classes.header} onClick={() => history.push('/mqm')}>
              App Title Here
            </h1>
            <Button className={classes.moreIcon} onClick={this.toggleDrawer('right', true)}><MoreHoriz/></Button>
            <SwipeableDrawer
              disableBackdropTransition={!iOS}
              disableDiscovery={iOS}
              anchor="right"
              open={this.state.right}
              onClose={this.toggleDrawer('right', false)}
              onOpen={this.toggleDrawer('right', true)}
            >
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('right', false)}
                onKeyDown={this.toggleDrawer('right', false)}
                style={{width: '250px'}}
              >
                <List>
                  <ListItem>About Us</ListItem>
                  <ListItem>Methodology</ListItem>
                </List>
              </div>
            </SwipeableDrawer>
            </div>

          <Toolbar className={classes.toolbar}>
            {location.pathname !== '/mqm' ?
              <Button className={classes.buttonLeft}
                      onClick={() => history.push('/mqm')}><KeyboardArrowLeft
                className={classes.backIcon}/>Back</Button> : null}
            {location.pathname !== '/mqm' ?
            <Button className={classes.buttonRight}>Share
              <object data={share} className={classes.shareIcon}>Share Icon</object>
            </Button> : null}
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