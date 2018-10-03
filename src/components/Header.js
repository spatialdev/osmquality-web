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
import Menu from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer/SwipeableDrawer';

import '../App.css';


const styles = {
  root: {
    flexGrow: 1,
  },

  list: {
    width: 250,
  },
  moreIcon: {
    color: '#FFFFFF',
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
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
  buttonLeft: {
    position: 'absolute',
    left: '-8px',
    height: '100%',
  },
  buttonRight: {
    position: 'absolute',
    right: 0,
    height: '100%',
  }
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
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes, history, location } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <div className="headerDiv">
            <h1 className="header" onClick={() => history.push('/')}>
              OSM Quality Ranking
            </h1>
            <Button className={classes.moreIcon} onClick={this.toggleDrawer('left', true)}><Menu/></Button>
            <SwipeableDrawer
              disableBackdropTransition={!iOS}
              disableDiscovery={iOS}
              anchor="left"
              open={this.state.left}
              onClose={this.toggleDrawer('left', false)}
              onOpen={this.toggleDrawer('left', true)}
            >
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('left', false)}
                onKeyDown={this.toggleDrawer('left', false)}
                style={{ width: '250px' }}
              >
                <List>
                  <ListItem className="drawerItem"><h3 onClick={() => history.push('/about-us')}>About Us</h3>
                  </ListItem>
                  <ListItem className="drawerItem"><h3 onClick={() => history.push('/methodology')}>Methodology</h3>
                  </ListItem>
                </List>
              </div>
            </SwipeableDrawer>
          </div>

          <Toolbar className="toolbar">
            {location.pathname === '/rankings' ?
              <h3 className="rankingHeader">Explore city rankings based on their OSM quality</h3> : null}
            {location.pathname !== '/rankings' ?
              <Button className={classes.buttonLeft}
                      onClick={() => history.push('/rankings')}><KeyboardArrowLeft
                className={classes.backIcon}/>Back to list</Button> : null}
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