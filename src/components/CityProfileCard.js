import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress'
import withStyles from '@material-ui/core/styles/withStyles';

import CityStatsCard from '../components/CityStatsCard';
import MapLegend from '../components/MapLegend';
import data from '../data/data';


import '../App.css';

const styles = {
  root: {
    borderRadius: 0,
    margin: '10px',
    maxWidth: '700px',
  },
};

class CityProfileCard extends Component {
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
    const { classes } = this.props;


    if (!cityData) {
      return (
        <div>
          <CircularProgress/>
        </div>);
    }

    return (
      <div>
        <div className="headerContainer">
          <img src={require('../' + cityData.headerImage)} alt={`${cityData.cityName} Header`}
               style={{ width: '100%', height: '100%', filter: 'brightness(60%)' }}/>
          <div className="alignIconHeader">
            <h1 className="rankingIcon">{cityData.ranking}</h1>
            <h1 className="cityHeader">{cityData.cityName}</h1>
          </div>
        </div>
        <Card className={classes.root}>
          <CardContent style={{ margin: '5px' }}>
            <h3 style={{ textAlign: 'center', margin: 0 }}>
              {cityData.cityName} Map Quality
            </h3>
          </CardContent>
          <CardMedia
            component="img"
            className="media"
            height="323px"
            image={require('../' + cityData.mapImage)}
          />
         <MapLegend/>

        </Card>
        <CityStatsCard data={cityData}/>

      </div>
    );
  }
}

CityProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CityProfileCard);

