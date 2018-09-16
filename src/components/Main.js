import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CityRankingTable from './CityRankingTable';
import CityProfile from './CityProfile';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={CityRankingTable}/>
      <Route exact path="/city/:cityName" component={CityProfile}/>
    </Switch>
  </main>
);

export default Main;
