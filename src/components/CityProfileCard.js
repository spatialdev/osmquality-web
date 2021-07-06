import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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
import Reparentable from './Reparentable';
import usCitiesData from '../data/usCitiesData';
import coastalCitiesData from '../data/coastalCitiesData';

import MapContext from '../helpers/MapContext';

import '../App.css';
import RankingIcon from './RankingIcon';
import {createMuiTheme} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import CoastalCityStatsCard from "./CoastalCityStatsCard";

// In order to override the default pink color for the radio buttons, we need to create a theme.
const theme = createMuiTheme({
  palette: {
    secondary: { main: '#4A4A4A' }, // This is a dark grey
  },
});

const styles = () => ({
  root: {
    margin: '10px',
    display: 'inline-flex',
    alignItems: 'center',
    width: 'calc(100% - 20px)'
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    margin: 0,
    backgroundColor: '#F4F4F4',
    boxShadow: 'none'
  },

  center: {
    textAlign: 'center',
    margin: 'auto'
  }
});


class CityProfileCard extends Component {
  state = {
    cityData: null,
    prevCityData: null,
    nextCityData: null,
    checked: false,
    direction: null,
    mapOptionsAnchor: null
  };

  componentDidMount() {
    const { match: { params: { cityState } } } = this.props;
    window.scrollTo(0, 0);
    this.getCityData(cityState);
    this.initializeSlide();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {cityData: prevCityData} = prevState;
    const {cityData: currCityData} = this.state;
    const {history} = this.props;

    // if we've changed usCitiesData, change the bounds of the map
    if ((prevCityData !== null && currCityData !== null && prevCityData.key !== currCityData.key)
      || (prevCityData === null && currCityData !== null))
    {
      const bbox = [[currCityData.swLong, currCityData.swLat], [currCityData.neLong, currCityData.neLat]];
      this.context.updateBounds(bbox);
    }
  }

  initializeSlide = () => {
    const { direction } = this.state;

    // default direction when arriving from list
    if (!direction) {
      this.setState({
        direction: 'right'
      });
    }

    this.setState({ checked: true });
  };

  getCityData = cityState => {
     const { history} = this.props;
     const data = history.location.pathname.indexOf("us-city") !== -1 ? usCitiesData: coastalCitiesData;
     const cityData = history.location.pathname.indexOf("us-city") !== -1 ?
         data.find(obj => obj.cityName.toLowerCase() + obj.state.toLowerCase() === cityState.toLowerCase()) :
         data.find(obj => obj.cityName.toLowerCase() + obj.country.toLowerCase() === cityState.toLowerCase())
     const prevCityData = data.find(obj => obj.ranking === cityData.ranking - 1);
     const nextCityData = data.find(obj => obj.ranking === cityData.ranking + 1);
     this.setState({
       cityData,
       prevCityData,
       nextCityData
    });
  };

  getCityStatsCard = cityData => {
    const {history} = this.props;
    if(history.location.pathname.indexOf("us-city") !== -1)
    {
      return ( <Grid item md={4} sm={12} xs={12} className="gridItem">
                  <CityStatsCard data={cityData}/>
                </Grid>)
    }
    else return ( <Grid item md={4} sm={12} xs={12} className="gridItem">
                  <CoastalCityStatsCard data={cityData}/>
                </Grid>)

  };

    getFunFact = cityData => {
    const {history, classes} = this.props;
    if(history.location.pathname.indexOf("us-city") !== -1)
    {
        return ( <Grid item md={12} sm={12} xs={12} className="gridItem">
                  <Card className={classes.root} style={{ width: '100%' }}>
                    <CardContent style={{ padding: '0 10px 15px 10px', width: '100%', textAlign: 'center' }}>
                      <h3>{cityData.factName}</h3>
                      <p>{cityData.fact}</p>
                    </CardContent>
                  </Card>
                </Grid>)
    }
  };




  handleSwipe = e => {
    const { prevCityData, nextCityData } = this.state;
    //swipe right
    if (e.direction === 4 && prevCityData) {
      this.handleNavBackward();
    }
    //swipe left
    if (e.direction === 2 && nextCityData) {
      this.handleNavForward();
    }
  };

  handleNavForward = () => {
    const { nextCityData } = this.state;
    const { history} = this.props;
    const nextCityState = history.location.pathname.indexOf("us-city") !== -1 ? nextCityData.cityName + nextCityData.state : nextCityData.cityName + nextCityData.country;
    history.location.pathname.indexOf("us-city") !== -1 ? this.props.history.push(`/us-city/${nextCityState}`) :
        this.props.history.push(`/coastal-city/${nextCityState}`);
    this.getCityData(nextCityState);
    this.setState({
      direction: 'left'
    });
  };

  handleNavBackward = () => {
    const { prevCityData } = this.state;
    const { history} = this.props;
    const prevCityState = history.location.pathname.indexOf("us-city") !== -1 ? prevCityData.cityName + prevCityData.state : prevCityData.cityName + prevCityData.country;
      history.location.pathname.indexOf("us-city") !== -1 ? this.props.history.push(`/us-city/${prevCityState}`) :
        this.props.history.push(`/coastal-city/${prevCityState}`);
    this.getCityData(prevCityState);
    this.setState({
      direction: 'right'
    });
  };

  handleCloseMapOptionsMenu = () => {
    this.setState({mapOptionsAnchor: null});
  };


  handleMapSelection = () => {
    const {classes, history} = this.props;
    if(history.location.pathname.indexOf("us-city") !== -1)
    {
      return  (<Grid item style={{display: 'flex', flex: '1 0 0%'}}>
                          <div style={{margin: 'auto 8px auto 0px'}}>Weight MQM Results by: </div>
                            <MuiThemeProvider theme={theme}>
                              <FormControl component="fieldset">
                                <RadioGroup
                                  aria-label="gender"
                                  name="gender1"
                                  className={classes.group}
                                  value={this.context.style}
                                  onChange={(e) => this.context.updateStyle(e.target.value)}
                                  row
                                >
                                  <FormControlLabel value="wfh" control={<Radio classes={{root: classes.radio, checked: classes.checked}}/>} label="None" />
                                  <FormControlLabel value="ppl" control={<Radio classes={{root: classes.radio, checked: classes.checked}}/>} label="Population" />
                                  <FormControlLabel value="nocar" control={<Radio classes={{root: classes.radio, checked: classes.checked}}/>} label="Car Ownership" />
                                </RadioGroup>
                              </FormControl>
                            </MuiThemeProvider>
                        </Grid>)
    }
  };

  render() {
    const { cityData, prevCityData, nextCityData, checked, direction } = this.state;
    const { classes, history } = this.props;
    const viewport = this.context.getViewport();
    if (!cityData) {
      return (
        <div>
          <CircularProgress/>
        </div>);
    }
    return (
      <Hammer key={cityData.key} onSwipe={this.handleSwipe}>
        <div className="cityProfileCard">
          <Slide direction={direction} in={checked} mountOnEnter unmountOnExit>
            <Paper className={classes.paper}>
              <div className="headerContainer">
                {prevCityData ?
                  <KeyboardArrowLeft
                    className="navArrowLeft"
                    onClick={this.handleNavBackward}/> : null}
                <img src={require('../' + cityData.headerImage)} alt={`${cityData.cityName} Header`}
                     style={{ width: '100%', height: '100%', filter: 'brightness(60%)' }}/>
                <div className="alignIconHeader">
                  <RankingIcon cityData={cityData}/>
                  <h1 className="cityHeader">{cityData.cityName}</h1>
                </div>
                {nextCityData ?
                  <KeyboardArrowRight
                    className="navArrowRight"
                    onClick={this.handleNavForward}/> : null}
              </div>
              <div className="scoreContainer">
                <h2 className="cityScore">Errors: {(cityData.score * 100).toFixed(2)}%</h2>
              </div>
              <Grid container className="cardGrid">
                <Grid item md={8} sm={12} xs={12} className="gridItem">
                  <Card className={classes.root}>
                    <CardContent style={{ padding: '0px 24px 0px 24px', height: '100%', width: '100%'}}>
                      <Grid container direction={'column'} alignItems={'stretch'} style={{height: '100%', width: '100%'}}>

                        {/* Title */}
                        <Grid item style={{display: 'flex', flex: '2 0 0%'}}>
                          <div className="cardHeaderContainer" style={{width: '100%'}}>
                            <h3 className="cardHeader" style={{marginLeft: 0}}>
                              MQM Results
                            </h3>
                            {/*blah*/}
                          </div>
                          {/*blah*/}
                        </Grid>
                        {/* Weights */}
                          {this.handleMapSelection()}

                        {/* Map */}
                        <Grid item style={{display: 'flex', flex: '7 0 0%'}}>
                        {/*This div needs to capture the position:absolute elements inside. Thus, it has an empty
                          position:relative.*/}
                          <div style={{position: 'relative', height: '100%', width: '100%'}}>
                            <IconButton style={{position: 'absolute', top: 4, right: 4, zIndex: 1000, backgroundColor: 'white'}}>
                              <a href={`https://openstreetmap.org/edit#map=${viewport.zoom}/${viewport.center[1]}/${viewport.center[0]}`}
                                target="_blank"
                              >
                                <EditIcon/>
                              </a>
                            </IconButton>
                            <Reparentable el={this.context.container} style={{height: '100%', width: '100%'}}/>
                          </div>
                        </Grid>

                        {/*Legend*/}
                        <Grid item container justify='space-between' style={{display: 'flex', flex: '2 0 0%'}}>
                          <MapLegend/>
                          <div style={{margin: 'auto 0px', height: 45}}>{this.context.style === 'wfh' || this.context.style === 'coastal' ? 'Default MQM Results' : this.context.style === 'ppl' ? 'Weighted by Population' : 'Weighted by Car Ownership'}</div>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
                {this.getCityStatsCard(cityData)}
                {this.getFunFact(cityData)}
              </Grid>
            </Paper>
          </Slide>
        </div>
      </Hammer>
    );
  }
}

CityProfileCard.contextType = MapContext;
CityProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CityProfileCard);