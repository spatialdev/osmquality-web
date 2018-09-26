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

import CityStatsCard from '../components/CityStatsCard';
import MapLegend from '../components/MapLegend';
import data from '../data/data';

import '../App.css';
import RankingIcon from './RankingIcon';

const styles = () => ({
  root: {
    margin: '10px',
    maxWidth: '768px',
    display: 'inline-flex',
    alignItems: 'center',
  },

  paper: {
    zIndex: 1,
    position: 'relative',
    margin: 0,
    backgroundColor: '#F4F4F4',
    boxShadow: 'none'
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
    this.initializeSlide();
  }

  initializeSlide = () => {
    this.setState({ checked: true });
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
          <Paper className={classes.paper}>
            <div className="headerContainer">
              <img src={require('../' + cityData.headerImage)} alt={`${cityData.cityName} Header`}
                   style={{ width: '100%', height: '100%', filter: 'brightness(60%)' }}/>
              <div className="alignIconHeader">
                <RankingIcon cityData={cityData}/>
                {/*<h1 className="rankingIcon" id="ranking">{cityData.ranking}</h1>*/}
                <h1 className="cityHeader">{cityData.cityName}</h1>
              </div>
            </div>
            <Grid container>
              <Grid item md={6} sm={12} xs={12} className="gridItem">
                <Card className={classes.root}>
                  <div>
                  <CardContent style={{padding: 0}}>
                    <MapLegend/>
                  </CardContent>
                  <CardMedia
                    component="img"
                    className="media"
                    image={require('../' + cityData.mapImage)}
                  />
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
    );
  }
}

CityProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CityProfileCard);

