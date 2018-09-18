import React, { Component } from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{ position: 'relative', height: '100%' }}>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
