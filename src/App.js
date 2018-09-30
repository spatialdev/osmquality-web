import React, { Component } from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

class App extends Component {

  //Note that we have the fontFamily div to make sure that the font is loaded when the DOM is rendered. This is important
  // for rendering the ranking icon on the CityProfileCards
  render() {
    return (
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        {window.location.pathname !== '/' ? <Header/> : null}
        <Main/>
        {window.location.pathname !== '/' ? <Footer/> : null}
        <div style={{ fontFamily: 'Open Sans' }}/>
      </div>
    );
  }
}

export default App;
