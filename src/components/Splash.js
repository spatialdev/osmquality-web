import React from 'react';

import Button from '@material-ui/core/Button/Button';

import logo_COSMT from '../images/logo_COSMT.svg';
import logo_critigen from '../images/logo_critigen.svg';


import '../App.css';

const Splash = props => {
  return (
    <div className="splashPage">
      <div className="splashContent">
          <div className="flexItem">
            <img className="osmTeamLogo" src={logo_COSMT} alt="Critigen OSM Team"/>
          </div>
          <div className="flexItem">
            <h4>Which city has the best OSM quality?</h4>
            <Button onClick={() => props.history.push('/rankings')}>Explore OSM Quality Ranking</Button>
          </div>
        </div>
        <div className="critigenLogo">
          <img src={logo_critigen} alt="Critigen OSM Team"/>
        </div>
    </div>
  );
};

export default Splash;