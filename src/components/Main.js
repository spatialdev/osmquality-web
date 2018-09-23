import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CityRankingTable from './CityRankingTable';
import CityProfileCard from './CityProfileCard';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/map-quality-measurement/" component={CityRankingTable}/>
      <Route exact path="/map-quality-measurement/city/:cityName" component={CityProfileCard}/>
    </Switch>
  </main>
);

export default Main;
