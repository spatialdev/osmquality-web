import React, { Component } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import logo_critigen from '../images/logo_critigen.svg';
import icon_fb from '../images/icon_fb.svg';
import icon_twitter from '../images/icon_twitter.svg';
import icon_linkedIn from '../images/icon_linkedIn.svg';

import '../App.css';

export default class Footer extends Component {

  flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  };


  render() {
    return (
      <div className="footer">
        <div className="socialShare">
          <p className="footerP">Share this:</p>
          <List style={this.flexContainer}>
            <ListItem style={{ paddingRight: '8px', paddingLeft: '0', paddingTop: '0' }}>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=`} title="Share on Facebook" target="_blank"
                 rel="noopener noreferrer">
                <img src={icon_fb} alt="Facebook Share" className="socialShareIcon"/>
              </a>
            </ListItem>
            <ListItem style={{ paddingRight: '8px', paddingLeft: '0', paddingTop: '0' }}>
              <a href="https://twitter.com/home?status=test" title="Share on Twitter" target="_blank"
                 rel="noopener noreferrer">
                <img src={icon_twitter} alt="Twitter Share" className="socialShareIcon"/>
              </a>
            </ListItem>
            <ListItem style={{ paddingLeft: '0', paddingTop: '0' }}>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=&title=&summary=" title="Share on LinkedIn"
                 target="_blank" rel="noopener noreferrer">
                <img src={icon_linkedIn} alt="LinkedIn Share" className="socialShareIcon"/>
              </a>
            </ListItem>
          </List>
        </div>
        <div className="logoDiv">
          <p className="footerP">Brought to you by:</p>
          <a href="https://www.critigen.com" target="_blank" rel="noopener noreferrer" className="critigenLogo">
            <img src={logo_critigen} alt="Critigen"/>
          </a>
        </div>
      </div>
    );
  }
}
