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
import Grid from "../../node_modules/@material-ui/core/Grid/Grid";
import MuiThemeProvider from "../../node_modules/@material-ui/core/es/styles/MuiThemeProvider";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";


const styles = {
  root: {
    flexGrow: 1,
  },

  list: {
    width: 250,
  },
  moreIcon: {
    color: '#fff',
    right: 0,
    top: 0,
    height: '100%'
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
            <div style={{ textAlign: 'left', display: 'inline-block', cursor: 'pointer', float: 'left', padding: '20px'}}
                 onClick={() => history.push('/')}>
              <h1 className="header">
                CRITIGEN
              </h1>
            </div>
            <div style={{ textAlign: 'left', display: 'inline-block', cursor: 'pointer', float: 'right', padding: '20px'}}>
                  <Button className={classes.moreIcon} onClick={this.toggleDrawer('right', true)}><Menu/></Button>
                </div>

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
                style={{ width: '250px' }}
              >
                <List>
                  <ListItem className="drawerItem"><h3 onClick={() => history.push('/us-cities-ranking')}>US Cities</h3>
                  </ListItem>
                  <ListItem className="drawerItem"><h3 onClick={() => history.push('/coastal-cities-ranking')}>Coastal Cities</h3>
                  </ListItem>
                  <ListItem className="drawerItem"><h3 onClick={() => history.push('/about-us')}>About Us</h3>
                  </ListItem>
                  <ListItem className="drawerItem"><h3 onClick={() => history.push('/methodology')}>Methodology</h3>
                  </ListItem>
                </List>
              </div>
            </SwipeableDrawer>
          </div>

          <Toolbar className="toolbar">
            {location.pathname === '/us-cities-ranking' || location.pathname === '/coastal-cities-ranking' ?
              <h3 className="rankingHeader">Explore city rankings based on their OSM quality</h3> : null}
            {location.pathname.indexOf('us-city') !== -1 ?
              <Button className={classes.buttonLeft}
                      onClick={() => history.push('/us-cities-ranking')}><KeyboardArrowLeft
                className={classes.backIcon}/>Back to list</Button> : location.pathname.indexOf('coastal-city') !== -1 ?
            <Button className={classes.buttonLeft}
                      onClick={() => history.push('/coastal-cities-ranking')}><KeyboardArrowLeft
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