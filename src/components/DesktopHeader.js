import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Sticky from 'react-sticky-fill';
import AppBar from '@material-ui/core/AppBar';
import '../App.css';
import {connect} from "react-redux";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "../../node_modules/@material-ui/icons/KeyboardArrowLeft";
import withStyles from "../../node_modules/@material-ui/core/styles/withStyles";

const styles = {
  root: {
    flexGrow: 1,
  },

  list: {
    width: 250,
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
  }
};

class DesktopHeader extends Component {
  render() {
    const { history, classes } = this.props;
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
            <div id="us-cities" className="categories" onClick={() => history.push('/us-cities-ranking')}><h4 style={{textDecoration: history.location.pathname==='/us-cities-ranking'? "underline":""}}>US Cities</h4></div>
            <div id="coastal-cities" className="categories" onClick={() => history.push('/coastal-cities-ranking')}><h4 style={{textDecoration: history.location.pathname==='/coastal-cities-ranking'? "underline":""}}>Coastal Cities</h4></div>
            <div id="methodology" className="categories" onClick={() => history.push('/methodology')}><h4 style={{textDecoration: history.location.pathname==='/methodology'? "underline":""}}>Methodology</h4></div>
          </div>
        </AppBar>
         <Toolbar className="toolbar">
            {history.location.pathname === '/us-cities-ranking' || history.location.pathname === '/coastal-cities-ranking' ?
              <h3 className="rankingHeader">Explore city rankings based on their OSM quality</h3> : null}
            {history.location.pathname.indexOf('us-city') !== -1 ?
              <Button className={classes.buttonLeft}
                      onClick={() => history.push('/us-cities-ranking')}><KeyboardArrowLeft
                className={classes.backIcon}/>Back to list</Button> : history.location.pathname.indexOf('coastal-city') !== -1 ?
            <Button className={classes.buttonLeft}
                      onClick={() => history.push('/coastal-cities-ranking')}><KeyboardArrowLeft
                className={classes.backIcon}/>Back to list</Button> : null}
          </Toolbar>
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

export default withRouter(withStyles(styles)(connect(mapStateToProps)(DesktopHeader)));
