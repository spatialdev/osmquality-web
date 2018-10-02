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
          The Critigen Map Quality Score is based on a number of primary checks using the
          <a href="https://github.com/osmlab/atlas-checks" target="_blank" rel="noopener noreferrer"> Atlas-Checks</a> suite of tools published on
          OSM Lab.
          Checks used to establish rankings include: road connections, road tags and roundabout integrity.
          Specific checks used to develop the ranking include the following:</p>

        <Grid container className="cardGrid">
          <Grid item md={3} sm={6} xs={12} className="gridItem">
            <Card className={classes.root}>
              <CardContent style={{ padding: 0 }}>
                <h5>Road Connection Checks</h5>
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
                <h5>Road Relation Checks</h5>
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
                <h5>Road Tag Checks</h5>
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
                <h5>Roundabout Checks</h5>
                <Divider/>
                <List>
                  <ListItem>InvalidMiniRoundaboutCheck</ListItem>
                  <ListItem>MalformedRoundaboutCheck</ListItem>
                  <ListItem>RoundaboutClosedLoopCheck</ListItem>
                  <ListItem>RoundaboutValenceCheck</ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <p>These checks can be downloaded for use from the OSMLab <a
            href="https://github.com/osmlab/atlas-checks/tree/dev/src/main/java/org/openstreetmap/atlas/checks/validation"
            target="_blank" rel="noopener noreferrer">Atlas-Checks</a> repository.</p>

        <h4>City Selection</h4>
        <p>Cities were chosen based on whether they were the capital city of a state or whether they were the most
          populous city within a state. <a href="https://en.wikipedia.org/wiki/List_of_largest_cities_of_U.S._states_and_territories_by_population"
             target="_blank" rel="noopener noreferrer">Wikipedia</a> was used to identify the most populous city in each state.</p>

        <h4>Grid Generation</h4>
        <p>Analysis grids were generated using a custom python tool which optimizes grid size based on map error
          density.
          The tool automates a process to find the optimal heat-map grid size that represents an area containing a
          critical mass of errors that represents a reasonable task for an editor. The resulting grid is thematically
          styled as a choropleth heat map and used by editors to prioritize their work. For each grid cell, the
          following statistics are summarized:</p>
        <Grid item xs={12} className="gridItem">
          <Card className={classes.root}>
            <CardContent style={{ padding: 0 }}>
              <h5>Statistics</h5>
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
      </CardContent>
    </Card>
  );
};

Methodology.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Methodology);