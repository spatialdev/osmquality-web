import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Map from './components/Map';

import MapContext from './helpers/MapContext';

import './App.css';
import * as ReactGA from 'react-ga';

class App extends Component {
  mapContainer = document.createElement('div');
  state = {
    maxMapBounds: [[0, 0], [0, 0]],
    mapStyle: 'mapbox://styles/spatialdev/cjzhaiba028201cpjtu0aicao'
  };

  componentDidMount() {
    // Initialize Google Analytics
    ReactGA.initialize('UA-126802064-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  //Note that we have the fontFamily div to make sure that the font is loaded when the DOM is rendered. This is important
  // for rendering the ranking icon on the CityProfileCards
  render() {
    const context = {
      container: this.mapContainer,
      updateBounds: (newBounds) => this.setState({maxMapBounds: newBounds}),
      updateStyle: (newStyle) => this.setState({mapStyle: newStyle})
    };
    const {maxMapBounds, mapStyle} = this.state;
    return (
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        {/* Thanks to  https://github.com/facebook/react/issues/13044#issuecomment-428815909 for the solution here!*/}
        {createPortal(<Map maxBounds={maxMapBounds} style={mapStyle}/>, this.mapContainer)}
        {window.location.pathname !== '/' ? <Header/> : null}
        <MapContext.Provider value={context}>
          <Main/>
        </MapContext.Provider>
        {window.location.pathname !== '/' ? <Footer/> : null}
      </div>
    );
  }
}

export default App;
