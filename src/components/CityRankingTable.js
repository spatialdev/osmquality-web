import React, { Component } from 'react';

import Card from '@material-ui/core/es/Card/Card';
import CardContent from '@material-ui/core/es/CardContent/CardContent';

import data from '../data/data';
import '../App.css';


export default class CityRankingTable extends Component {
  render() {
    return (
      <div className="cityRankingList">
        <h3>City Ranking Lorem Ipsum</h3>
        {data.sort((a, b) => a.ranking - b.ranking).map(city => {
          return (<Card className="cityRankingCard" key={city.ranking}
                        onClick={() => this.props.history.push(`/city/${city.cityName}`)}>
            <CardContent>
              <div className="cardBody">
                <img className="cityTableImage" src={require('../' + city.headerImage)}
                     alt={`${city.cityName} Header`}/>
                <div className="cardText">
                  <h4>{city.cityName + ', ' + city.state}</h4>
                  <p>Some other text goes here</p>
                </div>
              </div>
              <h1>{city.ranking < 10 ? '0' + city.ranking.toString() : city.ranking}</h1>
            </CardContent>
          </Card>);
        })
        }
      </div>
    );
  }
}
