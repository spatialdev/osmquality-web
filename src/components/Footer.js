import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import logo_critigen from '../images/logo_critigen.svg';
import icon_fb from '../images/icon_fb.svg';
import icon_twitter from '../images/icon_twitter.svg';
import icon_insta from '../images/icon_insta.svg';
import icon_linkedIn from '../images/icon_linkedIn.svg';

import '../App.css';


const styles = {
  root: {
    width: '100%',
    backgroundColor: '#404040',
    left: 0,
    bottom: 0,
    height: '100px',
    overflow: 'hidden',
    padding: '5px',
  },
  footer: {
    width: '100%',
    padding: '0 16px'
  },
  footerP: {
    color: '#ffffff',
    marginBottom: '5px'
  },
  socialShare: {
    display: 'inline',
    float: 'left',
  },
  logoDiv: {
    display: 'inline',
    float: 'right',
  },
  socialShareIcon: {
    height: '30px',
    width: '30px',
  },
};


class Footer extends Component {
  state = {
    value: 'recents',
  };

  flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <div className={classes.footer}>
          <div className={classes.socialShare}>
            <p className={classes.footerP}>Share this:</p>
            <List style={this.flexContainer}>
              <ListItem style={{ paddingRight: '8px', paddingLeft: '0', paddingTop: '0' }}>
                <object data={icon_fb} className={classes.socialShareIcon}>Facebook</object>
              </ListItem>
              <ListItem style={{ paddingRight: '8px', paddingLeft: '0', paddingTop: '0' }}>
                <object data={icon_twitter} className={classes.socialShareIcon}>Twitter</object>
              </ListItem>
              <ListItem style={{ paddingRight: '8px', paddingLeft: '0', paddingTop: '0' }}>
                <object data={icon_insta} className={classes.socialShareIcon}>Instagram</object>
              </ListItem>
              <ListItem style={{ paddingLeft: '0', paddingTop: '0' }}>
                <object data={icon_linkedIn} className={classes.socialShareIcon}>LinkedIn</object>
              </ListItem>

              <ListItem
                primaryText="foo2"
                secondaryText="bar2"/>
            </List>
          </div>
          <div className={classes.logoDiv}>
            <p className={classes.footerP}>Brought to you by:</p>
            <a href="https://www.critigen.com" className="critigenLogo">
              <object data={logo_critigen} type="image/svg+xml" >Critigen Logo</object>
            </a>
          </div>
        </div>

      </BottomNavigation>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
