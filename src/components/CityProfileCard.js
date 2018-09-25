import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';
import Slide from '@material-ui/core/Slide/Slide';
import Paper from '@material-ui/core/Paper/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

import CityStatsCard from '../components/CityStatsCard';
import MapLegend from '../components/MapLegend';
import data from '../data/data';

import '../App.css';

const styles = theme => ({
  root: {
    borderRadius: 0,
    margin: '10px',
    maxWidth: '700px',
  },

  paper: {
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing.unit,
  },
});

class CityProfileCard extends Component {
  state = {
    cityData: null,
    checked: false,
  };

  componentDidMount() {
    const { match: { params: { cityName } } } = this.props;
    this.getCityData(cityName);
    this.initializeSlide()
  }

  initializeSlide = () => {
    this.setState({checked: true});
  };

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
        <Slide direction="right" in={this.state.checked} mountOnEnter unmountOnExit>
          <Paper elevation={4} className={classes.paper}>

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
          </Paper>
        </Slide>


      </div>
    );
  }
}

CityProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CityProfileCard);

