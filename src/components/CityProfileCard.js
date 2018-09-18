import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import CityStatsCard from '../components/CityStatsCard';
import Spin from '../components/Spin';
import data from '../data/data';

const styles = {
  media: {
    cursor: 'default',
    objectFit: 'cover',
    width: '100%',

  },
  header: {
    textAlign: 'center',
  },
  headerContainer: {
    height: '150px',
    position: 'relative',
    textAlign: 'center',
    color: '#ffffff',
  },
  cityHeader: {
    display: 'inline-block',
  },
  rankingIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    textAlign: 'center',
    fontSize: '40px',
    border: '2px solid #ffffff',
    display: 'inline-block',
    marginRight: '10px',
  },
  alignIconHeader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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
      return <Spin/>;
    }

    return (
      <div>
        <div className={classes.headerContainer}>
          <img src={require('../' + cityData.headerImage)} alt={`${cityData.cityName} Header`}
               style={{ width: '100%', height: '100%' }}/>
          <div className={classes.alignIconHeader}>
            <div className={classes.rankingIcon}>{cityData.ranking}</div>
            <h1 className={classes.cityHeader}>{cityData.cityName}</h1>
          </div>
        </div>
        <Card className={classes.card} style={{ margin: '10px' }}>
          <CardContent>
            <h3 className={classes.header}>
              {cityData.cityName} Map Quality
            </h3>
          </CardContent>
          <CardActionArea style={{ width: '100%' }}>
            <CardMedia
              component="img"
              className={classes.media}
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

CityProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CityProfileCard);



