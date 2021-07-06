import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as ReactGA from 'react-ga';

import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import withStyles from '@material-ui/core/styles/withStyles';

import usCitiesData from '../data/usCitiesData';
import coastalCitiesData from "../data/coastalCitiesData";
import '../App.css';
import MapContext from '../helpers/MapContext';


const styles = () => ({
  paper: {
    zIndex: 1,
    position: 'relative',
    margin: 0,
    backgroundColor: '#F4F4F4',
    boxShadow: 'none',
    borderRadius: '0px'
  },
});

class CityRankingTable extends Component {
  state = {
    checked: false,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.initializeSlide();
  }

  initializeSlide = () => {
    this.setState({ checked: true });
  };

  handleCityClick = city => {
    const { history} = this.props;
    const label = history.location.pathname === '/us-cities-ranking' ? city.state : city.country;
    ReactGA.event({
      category: 'City View',
      action: 'Clicked from Table',
      label: `${city.cityName}, ${label}`
    });
    if(history.location.pathname === '/us-cities-ranking')
    {
      this.props.history.push(`/us-city/${city.cityName}${city.state}`);
    }
    else if(history.location.pathname === '/coastal-cities-ranking')
    {
      this.context.updateStyle('coastal')
       this.props.history.push(`/coastal-city/${city.cityName}${city.country}`);
    }
  };

  render() {
    const { classes, history } = this.props;
    const data = history.location.pathname === '/us-cities-ranking' ? usCitiesData : coastalCitiesData;

    return (
      <div className="cityRankingList">
        <Slide direction="left" in={this.state.checked} mountOnEnter unmountOnExit>
          <Paper className={classes.paper}>
            <div style={{ padding: '5px 15px' }}>
              {data.sort((a, b) => a.ranking - b.ranking).map(city => {
                const stateOrCountry = history.location.pathname === '/us-cities-ranking' ? city.state : city.country;
                return (<Card className="cityRankingCard" key={city.ranking} direction="1"
                              onClick={() => this.handleCityClick(city)}>
                  <CardContent>
                    <div className="cardBody">
                      <img className="cityTableImage" src={require('../' + city.thumbnail)}
                           alt={`${city.cityName} Header`}/>
                      <div className="cardText">
                        <h4>{city.cityName + ', ' + stateOrCountry}</h4>
                        <div className="score">Errors: {(city.score * 100).toFixed(2)}%</div>
                      </div>
                    </div>
                    <h1 className="ranking">{city.ranking < 10 ? '0' + city.ranking.toString() : city.ranking}</h1>
                  </CardContent>
                </Card>);
              })
              }
            </div>
          </Paper>
        </Slide>
      </div>
    );
  }
}

CityRankingTable.propTypes = {
  classes: PropTypes.object.isRequired,
};
CityRankingTable.contextType = MapContext;

export default withStyles(styles)(CityRankingTable);