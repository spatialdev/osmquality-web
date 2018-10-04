import React, { Component } from 'react';

import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';
import * as ReactGA from 'react-ga';

class App extends Component {
  componentDidMount() {
    // Initialize Google Analytics
    ReactGA.initialize('UA-126802064-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  //Note that we have the fontFamily div to make sure that the font is loaded when the DOM is rendered. This is important
  // for rendering the ranking icon on the CityProfileCards
  render() {
    return (
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        {window.location.pathname !== '/' ? <Header/> : null}
        <Main/>
        {window.location.pathname !== '/' ? <Footer/> : null}
      </div>
    );
  }
}

export default App;
