import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Map from './components/Map';

import MapContext from './helpers/MapContext';

import './App.css';
import * as ReactGA from 'react-ga';
import viewport from '@mapbox/geo-viewport';
import square from '@turf/square';
import {connect} from "react-redux";
import withRouter from "react-router/es/withRouter";
import {setMobile} from "./store/actions";
import DesktopHeader from "./components/DesktopHeader";

class App extends Component {
  mapContainer = document.createElement('div');
  state = {
    maxMapBounds: [[0, 0], [0, 0]],
    mapStyle: 'wfh'
  };

  constructor(props) {
    super(props);
    // We want the map's container to take up as much space as possible.
    this.mapContainer.style.cssText = 'height:100%;width:100%;';
  }

  componentDidMount() {
    // Initialize Google Analytics
    ReactGA.initialize('UA-126802064-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.checkIfMobile();
  }

  checkIfMobile = () => {
    setMobile(window.innerWidth < 768);
  };

  //Note that we have the fontFamily div to make sure that the font is loaded when the DOM is rendered. This is important
  // for rendering the ranking icon on the CityProfileCards
  render() {
    const context = {
      container: this.mapContainer,
      updateBounds: (newBounds) => this.setState({maxMapBounds: newBounds}),
      updateStyle: (newStyle) => this.setState({mapStyle: newStyle}),
      getViewport: () => {
        const flatBounds = [...this.state.maxMapBounds[0], ...this.state.maxMapBounds[1]];
        return viewport.viewport(square(flatBounds), [400, 400])
      },
      style: this.state.mapStyle,
    };
    const {maxMapBounds, mapStyle} = this.state;
    const {isMobile} = this.props;
    const header = isMobile ? <Header/> : <DesktopHeader/>;

    return (
      <div style={{ position: 'static', minHeight: '100vh', width: '100%' }}>
        {/* Thanks to  https://github.com/facebook/react/issues/13044#issuecomment-428815909 for the solution here!*/}
        {createPortal(<Map maxBounds={maxMapBounds} style={mapStyle}/>, this.mapContainer)}
        <MapContext.Provider value={context}>
          {header}
          <Main/>
        </MapContext.Provider>
        {window.location.pathname !== '/' ? <Footer/> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {isMobile: state.isMobile};
};

export default withRouter(connect(mapStateToProps)(App));
