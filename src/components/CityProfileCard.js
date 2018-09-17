import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


import CityStatsCard from '../components/CityStatsCard';
import Spin from '../components/Spin';

import data from '../data/data';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    objectFit: 'cover',
  },
};

export default class CityProfileCard extends Component {
  state = {
    cityData: null,
  };

  componentDidMount() {
    const { match: { params: { cityName } } } = this.props;
    const {classes} = classes.card;
    console.log(cityName);
    this.getCityData(cityName);
  }

  getCityData = cityName => {
    this.setState({ cityData: data.find(obj => obj.cityName.toLowerCase() === cityName.toLowerCase()) });
  };

  render() {
    const { cityData } = this.state;

    if (!cityData) {
      return <Spin/>;
    }

    return (
      <div>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              className={classes.media}
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                Lizard
              </Typography>
              <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
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



