import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Divider from '@material-ui/core/Divider/Divider';
import Grid from '@material-ui/core/Grid/Grid';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import withStyles from '@material-ui/core/styles/withStyles';


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
        <div className="methodologyContent">
          <h3 style={{ textAlign: 'center' }}>Methodology and Data</h3>
          <Divider/>
          <h4>Map Quality Evaluation</h4>
          <p>
              Map quality is evaluated by looking at the OSM features (Ways, Tags, and Relations) detected (flagged) by Atlas Checks. 
              Built on top of Atlas, a scalable OSM graph network, Atlas Checks allows users to write quality assurance algorithms 
              to find map errors in OSM data.
          </p>
          <p>
            The following Atlas Checks were used:
          </p>

          <Grid container className="cardGrid">
            <Grid item md={6} sm={12} xs={24} className="gridItem">
              <Card className={classes.root}>
                <CardContent style={{ padding: 0 }}>
                  <h5>Road Geometry Checks</h5>
                  <Divider/>
                  <List>
                    <ListItem>BuildingRoadIntersectionCheck</ListItem>
                    <ListItem>OverlappingEdgeCheck</ListItem>
                    <ListItem>EdgeCrossingEdgeCheck</ListItem>
                    <ListItem>SnakeRoadCheck</ListItem>
                    <ListItem>RoundaboutValenceCheck</ListItem>
                    <ListItem>InvalidMiniRoundaboutCheck</ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={6} sm={12} xs={24} className="gridItem">
              <Card className={classes.root}>
                <CardContent style={{ padding: 0 }}>
                  <h5>Road Tags and Relations Checks</h5>
                  <Divider/>
                  <List>
                    <ListItem>InvalidTurnRestrictionCheck</ListItem>
                    <ListItem>InvalidAccessTagCheck</ListItem>
                    <ListItem>InvalidLanesTagCheck</ListItem>
                    <ListItem>SignPostcheck</ListItem>
                    <ListItem>UnusualLayerTagCheck</ListItem>
                    <ListItem>StreetNameIntegerOnlyCheck</ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <p>These checks can be downloaded for at: <a
            href="https://github.com/osmlab/atlas-checks"
            target="_blank" rel="noopener noreferrer">https://github.com/osmlab/atlas-checks</a> version 5.1.3</p>

          <h4>City Selection</h4>
          <p>The most populous city in each state is selected. <a href="https://en.wikipedia.org/wiki/List_of_largest_cities_of_U.S._states_and_territories_by_population" target="_blank" rel="noopener noreferrer">Wikipedia</a> was used to identify those cities.</p>

          <h4>City Ranking</h4>
          <p>Cities are ranked based on the map error rate with error OSM features over all OSM features. The lower error rate a city has, the higher it is ranked.</p>

          <h4>Data Processing</h4>
          <p>TBD-Filled by Bentley</p>

          <h4>Grid Generation and Statistics</h4>
          <p>Analysis grids were generated using a custom python tool which optimizes grid size based on map error density. 
            The tool automates a process to find the optimal heat-map grid size, an area containing a critical mass of errors that represents 
            a reasonable task for an editor. The resulting grids are thematically styled as choropleth heat maps that can be used by editors 
            to prioritize their work. For each grid cell, we have counts on flagged OSM features and the size</p>
  
        </div>
      </CardContent>
    </Card>
  );
};

Methodology.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Methodology);