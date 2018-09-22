import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';

import CityStatsCard from '../components/CityStatsCard';
import Spin from '../components/Spin';
import data from '../data/data';


import '../App.css';

const styles = {
  media: {
    cursor: 'default',
    width: '100%',
  },
  root: {
    borderRadius: 0,
    margin: '10px',
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
  graphContainer: {
    height: '300px',
    position: 'relative',
  },
  cityHeader: {
    display: 'inline-block',
  },
  rankingIcon: {
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    textAlign: 'center',
    fontSize: '30px',
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
        <Card className={classes.root}>
          <CardContent style={{ margin: '5px' }}>
            <h3 style={{ textAlign: 'center', margin: 0 }}>
              {cityData.cityName} Map Quality
            </h3>
          </CardContent>
          <CardMedia
            component="img"
            className={classes.media}
            height="323px"
            image={require('../' + cityData.mapImage)}
          />
          <div className='horizontalLegend'>
            <div className='horizontalLegend-title'>Legend header</div>
            <div className='horizontalLegend-scale'>
              <ul className='horizontalLegend-labels'>
                <li><span style={{background:'#ffc033'}}/>Low</li>
                <li><span style={{background:'#fc6e35'}}/>Medium</li>
                <li><span style={{background:'#ff0000'}}/>High</li>
              </ul>
            </div>
          </div>

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

