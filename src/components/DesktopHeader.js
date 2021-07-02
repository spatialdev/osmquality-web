import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Sticky from 'react-sticky-fill';
import AppBar from '@material-ui/core/AppBar';
import '../App.css';
import {connect} from "react-redux";

class DesktopHeader extends Component {

  render() {
    const { history } = this.props;
    return (
      <Sticky style={{top: 0, width: '100%', zIndex: 100}} >
        <AppBar position="static" className="appBar">
          <div className="categories">
            <h1  onClick={() => history.push('/')} style={{ cursor: 'pointer' }}>
            CRITIGEN
          </h1>
          </div>
          <div className="nav">
            <div id="about" className="categories" onClick={() => history.push('/')}><h4 style={{textDecoration: history.location.pathname==='/'? "underline":""}}>About</h4></div>
            <div id="us-cities" className="categories" onClick={() => history.push('/us-cities')}><h4 style={{textDecoration: history.location.pathname==='/us-cities'? "underline":""}}>US Cities</h4></div>
            <div id="coastal-cities" className="categories" onClick={() => history.push('/coastal-cities')}><h4 style={{textDecoration: history.location.pathname==='/coastal-cities'? "underline":""}}>Coastal Cities</h4></div>
            <div id="methodology" className="categories" onClick={() => history.push('/methodology')}><h4 style={{textDecoration: history.location.pathname==='/methodology'? "underline":""}}>Methodology</h4></div>
          </div>
        </AppBar>
      </Sticky>
    );
  }
}

DesktopHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isMobile: state.isMobile
  };
};

export default withRouter(connect(mapStateToProps)(DesktopHeader));
