import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CityRankingTable from './CityRankingTable';
import CityProfileCard from './CityProfileCard';
import Methodology from './Methodology';
import AboutUs from './AboutUs';
import Splash from './Splash';


const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Splash}/>
      <Route exact path="/rankings" component={CityRankingTable}/>
      <Route exact path="/city/:cityName" component={CityProfileCard}/>
      <Route exact path="/about-us" component={AboutUs}/>
      <Route exact path="/methodology" component={Methodology}/>
    </Switch>
  </main>
);

export default Main;
