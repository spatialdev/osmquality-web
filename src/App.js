import React, { Component } from 'react';
import CityRankingTable from './components/CityRankingTable';
import Main from './components/Main';

import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <CityRankingTable />
          <Main />
        </div>
    );
  }
}

export default App;
