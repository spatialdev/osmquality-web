import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid/Grid';
import Paper from '@material-ui/core/Paper/Paper';
import Slide from '@material-ui/core/Slide/Slide';
import withStyles from '@material-ui/core/styles/withStyles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import Hammer from 'react-hammerjs';

import CityStatsCard from '../components/CityStatsCard';
import MapLegend from '../components/MapLegend';
import data from '../data/data';

import '../App.css';
import RankingIcon from './RankingIcon';

const styles = () => ({
  root: {
    margin: '10px',
    display: 'inline-flex',
    alignItems: 'center',
  },

  paper: {
    zIndex: 1,
    position: 'relative',
    margin: 0,
    backgroundColor: '#F4F4F4',
    boxShadow: 'none'
  }

});

class CityProfileCard extends Component {
  state = {
    cityData: null,
    prevCityData: null,
    nextCityData: null,
    checked: false,
  };

  componentDidMount() {
    const { match: { params: { cityState } } } = this.props;
    window.scrollTo(0, 0);
    this.getCityData(cityState);
    this.initializeSlide();
  }

  initializeSlide = () => {
    this.setState({ checked: true });
  };

  getCityData = cityState => {
    const cityData = data.find(obj => obj.cityName.toLowerCase() + obj.state.toLowerCase() === cityState.toLowerCase());
    const prevCityData = data.find(obj => obj.ranking === cityData.ranking - 1);
    const nextCityData = data.find(obj => obj.ranking === cityData.ranking + 1);
    this.setState({
      cityData,
      prevCityData,
      nextCityData
    });
  };

  handleSwipe = (e) => {
    const { prevCityData } = this.state;
    const { nextCityData } = this.state;
    //swipe right
    if(e.direction === 4 && this.state.prevCityData) {
      this.handleNavBackward();
    }
    //swipe left
    if(e.direction === 2 && this.state.nextCityData) {
      this.handleNavForward();
    }
  }

  handleNavForward = () => {
    const { nextCityData } = this.state;
    const nextCityState = nextCityData.cityName + nextCityData.state;
    this.props.history.push(`/city/${nextCityState}`);
    this.getCityData(nextCityState);
  }

  handleNavBackward = () => {
    const { prevCityData } = this.state;
    const prevCityState = prevCityData.cityName + prevCityData.state;
    this.props.history.push(`/city/${prevCityState}`);
    this.getCityData(prevCityState);
  }

  render() {
    const { cityData } = this.state;
    const { prevCityData } = this.state;
    const { nextCityData } = this.state;
    const { classes } = this.props;


    if (!cityData) {
      return (
        <div>
          <CircularProgress/>
        </div>);
    }

    return (
      <Hammer key={cityData.key} onSwipe={this.handleSwipe}>
        <div>
          <Slide direction="right" in={this.state.checked} mountOnEnter unmountOnExit>
            <Paper className={classes.paper}>
              <div className="headerContainer">
                {prevCityData != null ? 
                  <KeyboardArrowLeft 
                    className="navArrowLeft" 
                    onClick={this.handleNavBackward} /> : null }
                <img src={require('../' + cityData.headerImage)} alt={`${cityData.cityName} Header`}
                    style={{ width: '100%', height: '100%', filter: 'brightness(60%)' }}/>
                <div className="alignIconHeader">
                  <RankingIcon cityData={cityData}/>
                  <h1 className="cityHeader">{cityData.cityName}</h1>
                </div>
                {nextCityData != null ? 
                  <KeyboardArrowRight 
                    className="navArrowRight"
                    onClick={this.handleNavForward}/> : null }
              </div>
              <Grid container className="cardGrid">
                <Grid item md={6} sm={12} xs={12} className="gridItem">
                  <Card className={classes.root}>
                    <div>
                      <CardContent style={{ padding: 0 }}>
                      </CardContent>
                      <CardMedia
                        component="img"
                        className="media"
                        image={require('../' + cityData.mapImage)}
                      />
                      <MapLegend/>
                    </div>

                  </Card>
                </Grid>
                <Grid item md={6} sm={12} xs={12} className="gridItem">
                  <CityStatsCard data={cityData}/>
                </Grid>
              </Grid>
            </Paper>
          </Slide>
        </div>
      </Hammer>
    );
  }
}

CityProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CityProfileCard);

