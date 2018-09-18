import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import CityStatsCard from '../components/CityStatsCard';
import Spin from '../components/Spin';
import data from '../data/data';

import '../App.css';

export default class CityProfileCard extends Component {
  state = {
    cityData: null,
  };

  componentDidMount() {
    const { match: { params: { cityName } } } = this.props;
    this.getCityData(cityName);
  }

  getCityData = cityName => {
    this.setState({
      cityData: data.find(obj => obj.cityName.toLowerCase() === cityName.toLowerCase()),
    });
  };

  render() {
    const { cityData } = this.state;

    if (!cityData) {
      return <Spin/>;
    }

    return (
      <div>
        <div className="headerContainer">
          <img src={require('../' + cityData.headerImage)} alt={`${cityData.cityName} Header`}
               style={{ width: '100%', height: '100%' }}/>
          <div className="alignIconHeader">
            <div className="rankingIcon">{cityData.ranking}</div>
            <h1 className="cityHeader">{cityData.cityName}</h1>
          </div>
        </div>
        <Card style={{ margin: '10px' }}>
          <CardContent>
            <h3 style={{textAlign: 'center'}}>
              {cityData.cityName} Map Quality
            </h3>
          </CardContent>
          <CardActionArea style={{ width: '100%' }}>
            <CardMedia
              component="img"
              className="cardMedia"
              height="323px"
              image={require('../' + cityData.mapImage)}
            />
          </CardActionArea>
        </Card>
        <CityStatsCard data={cityData}/>
      </div>
    );
  }
}

