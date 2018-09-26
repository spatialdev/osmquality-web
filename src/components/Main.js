import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CityRankingTable from './CityRankingTable';
import CityProfileCard from './CityProfileCard';
import Methodology from './Methodology';
import AboutUs from './AboutUs';


const Main = () => (
  <main>
    <Switch>
      <Route exact path="/osmquality-web" component={CityRankingTable}/>
      <Route exact path="/osmquality-web/city/:cityName" component={CityProfileCard}/>
      <Route exact path="/osmquality-web/about-us" component={AboutUs}/>
      <Route exact path="/osmquality-web/methodology" component={Methodology}/>
    </Switch>
  </main>
);

export default Main;
