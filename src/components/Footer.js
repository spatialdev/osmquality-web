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
    console.log(this.props);

    return (
      <div className="footer">
        <div className="socialShare">
          <p className="footerP">Share this:</p>
          <List style={this.flexContainer}>
            <ListItem style={{ paddingRight: '8px', paddingLeft: '0', paddingTop: '0' }}>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=`} title="Share on Facebook" target="_blank"><img src={icon_fb} className="socialShareIcon"/></a>
            </ListItem>
            <ListItem style={{ paddingRight: '8px', paddingLeft: '0', paddingTop: '0' }}>
              <a href="https://twitter.com/home?status=test" title="Share on Twitter" target="_blank"><img src={icon_twitter} className="socialShareIcon"/></a>
            </ListItem>
            <ListItem style={{ paddingLeft: '0', paddingTop: '0' }}>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=&title=&summary=" title="Share on LinkedIn"
                 target="_blank"><img src={icon_linkedIn} className="socialShareIcon"/></a>
            </ListItem>
          </List>
        </div>
        <div className="logoDiv">
          <p className="footerP">Brought to you by:</p>
          <a href="https://www.critigen.com" target="_blank" className="critigenLogo">
            <object data={logo_critigen} type="image/svg+xml">Critigen Logo</object>
          </a>
        </div>


      </div>
    );
  }
}
