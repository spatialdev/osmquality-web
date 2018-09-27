import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import { withStyles } from '@material-ui/core/styles';


import data from '../data/data';
import '../App.css';

const styles = theme => ({
  paper: {
    zIndex: 1,
    position: 'relative',
    margin: 0,
    backgroundColor: '#F4F4F4',
    boxShadow: 'none'
  },
});

class CityRankingTable extends Component {
  state = {
    checked: false,
  };

  componentDidMount() {
    this.initializeSlide();
  }

  initializeSlide = () => {
    this.setState({ checked: true });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="cityRankingList">
        <h3>City Ranking Lorem Ipsum</h3>
        <Slide direction="left" in={this.state.checked} mountOnEnter unmountOnExit>
          <Paper className={classes.paper}>
            <div style={{ padding: '5px 0' }}>
              {data.sort((a, b) => a.ranking - b.ranking).map(city => {
                return (<Card className="cityRankingCard" key={city.ranking}
                              onClick={() => this.props.history.push(`/city/${city.cityName}${city.state}`)}>
                  <CardContent>
                    <div className="cardBody">
                      <img className="cityTableImage" src={require('../' + city.headerImage)}
                           alt={`${city.cityName} Header`}/>
                      <div className="cardText">
                        <h4>{city.cityName + ', ' + city.state}</h4>
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

export default withStyles(styles)(CityRankingTable);
