import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CityRankingTable from './CityRankingTable';
import CityProfileCard from './CityProfileCard';
import Methodology from './Methodology';
import AboutUs from './AboutUs';


const Main = () => (
  <main>
    <Switch>
      <Route exact path="/mqm" component={CityRankingTable}/>
      <Route exact path="/mqm/city/:cityName" component={CityProfileCard}/>
      <Route exact path="/mqm/about-us" component={AboutUs}/>
      <Route exact path="/mqm/methodology" component={Methodology}/>
    </Switch>
  </main>
);

export default Main;
