import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid/Grid';
import Divider from '@material-ui/core/Divider/Divider';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';


const styles = () => ({
  root: {
    margin: '10px',
    width: 'calc(100% - 20px)',
    alignItems: 'center',
  },

  wrapper: {
    margin: '10px 10px 0px 10px',
    width: 'calc(100% - 20px)',
    alignItems: 'center',
    paddingBottom: '100px'
  }
});


const Methodology = props => {
  const { classes } = props;

  return (
    <Card className={classes.wrapper}>
      <CardContent style={{ padding: '15px 20px' }}>
        <h3 style={{ textAlign: 'center' }}>Methodology and Data</h3>
        <Divider/>
        <h4>Quality Scores</h4>
        <p>
          The Critigen Map Quality Score is based on a number of primary OSM
          Integrity checks using the Atlas Checks framework published on OSM
          Lab. Built on top of Atlas, a scalable OSM graph network, Atlas Checks
          allows your to write quality assurance algorithms for OSM data.
        </p>
        <p>
          Specific integrity checks used to develop the ranking include the
          following:
        </p>

        <Grid container className="cardGrid">
          <Grid item md={3} sm={6} xs={12} className="gridItem">
            <Card className={classes.root}>
              <CardContent style={{ padding: 0 }}>
                <h5>Road Connections</h5>
                <Divider/>
                <List>
                  <ListItem>BuildingRoadIntersectionCheck</ListItem>
                  <ListItem>DuplicateWaysCheck</ListItem>
                  <ListItem>EdgeCrossingEdgeCheck</ListItem>
                  <ListItem>FloatingEdgeCheck</ListItem>
                  <ListItem>SharpAngleCheck</ListItem>
                  <ListItem>SinkIslandCheck</ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} sm={6} xs={12} className="gridItem">
            <Card className={classes.root}>
              <CardContent style={{ padding: 0 }}>
                <h5>Road Relations</h5>
                <Divider/>
                <List>
                  <ListItem>InvalidTurnRestrictionCheck</ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={3} sm={6} xs={12} className="gridItem">
            <Card className={classes.root}>
              <CardContent style={{ padding: 0 }}>
                <h5>Road Tags</h5>
                <Divider/>
                <List>
                  <ListItem>InvalidAccessTagCheck</ListItem>
                  <ListItem>SignPostCheck</ListItem>
                  <ListItem>SnakeRoadCheck</ListItem>
                  <ListItem>StreetNameIntegersOnlyCheck</ListItem>
                  <ListItem>UnusualLayerTagCheck</ListItem>
                  <ListItem>AreaWithHighwayTagCheck</ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} sm={6} xs={12} className="gridItem">
            <Card className={classes.root}>
              <CardContent style={{ padding: 0 }}>
                <h5>Roundabouts</h5>
                <Divider/>
                <List>
                  <ListItem>MalformedRoundaboutCheck</ListItem>
                  <ListItem>RoundaboutClosedLoopCheck</ListItem>
                  <ListItem>RoundaboutValenceCheck</ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <p>These checks can be downloaded for use at: <a
            href="https://github.com/osmlab/atlas-checks"
            target="_blank" rel="noopener noreferrer">https://github.com/osmlab/atlas-checks</a></p>

        <h4>City Selection</h4>
        <p>Cities were chosen based on whether they were the capital city of a state or whether they were the most
          populous city within a state. <a href="https://en.wikipedia.org/wiki/List_of_largest_cities_of_U.S._states_and_territories_by_population"
             target="_blank" rel="noopener noreferrer">Wikipedia</a> was used to identify the most populous city in each state.</p>

        <h4>Grid Generation</h4>
        <p>Analysis grids were generated using a custom python tool which optimizes grid size based on map error
          density.
          The tool automates a process to find the optimal heat-map grid size which is an area containing a
          critical mass of errors that represents a reasonable task for an editor. The resulting grid is thematically
          styled as a choropleth heat map and used by editors to prioritize their work. For each grid cell, the
          following statistics are summarized:</p>
        <Grid item xs={12} className="gridItem">
          <Card className={classes.root}>
            <CardContent style={{ padding: 0 }}>
              <h5>Summarized Statistics</h5>
              <Divider/>
              <List>
                <ListItem>grid size in km<sup>2</sup></ListItem>
                <ListItem>% of road segments within the cell with map error</ListItem>
                <ListItem>count of OSM features with the cell area (km <sup>2</sup>)</ListItem>
                <ListItem>count of error flags within the cell</ListItem>
                <ListItem>count of checks detecting error within the cell</ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <p>Afterwards, the grid-based statistics are used to generate the following statistics in a given city:</p>

        <Grid item xs={12} className="gridItem">
          <Card className={classes.root}>
            <CardContent style={{ padding: 0 }}>
              <h5>Generated Statistics</h5>
              <Divider/>
              <List>
                <ListItem>Total OSM Features</ListItem>
                <ListItem>Total Atlas Checks Flags</ListItem>
                <ListItem>Total City Area</ListItem>
                <ListItem>Map Errors by Atlas Check Type</ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <h4>City Ranking</h4>
        <p>Cities are ranked based on the number of atlas checks flags per OSM road feature, 
          which is calculated by dividing total Atlas Checks Flags by total OSM features. The fewer flags per feature a city 
          has, the better its road network quality is and the higher it is ranked</p>
      </CardContent>
    </Card>
  );
};

Methodology.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Methodology);