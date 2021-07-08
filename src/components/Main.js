import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CityRankingTable from './CityRankingTable';
import CityProfileCard from './CityProfileCard';
import Methodology from './Methodology';
import AboutUs from './AboutUs';
import Splash from './Splash';
import SplashPageOld from "./SplashPageOld";
import SplashPage from "./SplashPage";


const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={SplashPage}/>
      <Route exact path="/coastal-cities-ranking" component={CityRankingTable}/>
      <Route exact path="/us-cities-ranking" component={CityRankingTable}/>
      <Route exact path="/us-city/:cityState" component={CityProfileCard}/>
      <Route exact path="/coastal-city/:cityState" component={CityProfileCard}/>
      <Route exact path="/about-us" component={AboutUs}/>
      <Route exact path="/methodology" component={Methodology}/>
    </Switch>
  </main>
);

export default Main;
