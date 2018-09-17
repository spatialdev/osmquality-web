import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CityRankingTable from './CityRankingTable';
import CityProfileCard from './CityProfileCard';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={CityRankingTable}/>
      <Route exact path="/city/:cityName" component={CityProfileCard}/>
    </Switch>
  </main>
);

export default Main;
