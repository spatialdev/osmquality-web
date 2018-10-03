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
        <h3 style={{ textAlign: 'center' }}>Methodology and Data</h3>
        <Divider/>
        <h4>Map Quality Evaluation</h4>
        <p>
            Map quality is evaluated by looking at the OSM features (Ways, Nodes, and Relations) detected (flagged) by Atlas Checks. 
            Built on top of Atlas, a scalable OSM graph network, Atlas Checks allows users to write quality assurance algorithms 
            to find map errors in OSM data.
        </p>
        <p>
          The following Atlas Checks were used:
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

        <p>These checks can be downloaded for at: <a
          href="https://github.com/osmlab/atlas-checks"
          target="_blank" rel="noopener noreferrer">https://github.com/osmlab/atlas-checks</a></p>

        <h4>City Selection</h4>
        <p>The most populous city in each state is selected. <a
            href="https://en.wikipedia.org/wiki/List_of_largest_cities_of_U.S._states_and_territories_by_population"
            target="_blank" rel="noopener noreferrer">Wikipedia</a> was used to identify those cities.</p>

        <h4>City Ranking</h4>
        <p>Cities are ranked based on the map error rate which is calculated as below.</p>
        <p>For atlas features within the subject area:</p>
        <img className="equation" src={require('../images/formula_simple.png')} alt="equation for calculating city ranking" />
        <p>The lower error rate a city has, the higher it is ranked. The error rate is normalized so that more weights are 
          assigned to atlas features that are flagged multiple times.</p>

        <h4>Grid Generation and Statistics</h4>
        <p>Analysis grids were generated using a custom python tool which optimizes grid size based on map error density. 
          The tool automates a process to find the optimal heat-map grid size, an area containing a critical mass of errors that represents 
          a reasonable task for an editor. The resulting grids are thematically styled as choropleth heat maps that can be used by editors 
          to prioritize their work. For each grid cell, the following statistics are generated:</p>
        <Grid item xs={12} className="gridItem">
          <Card className={classes.root}>
            <CardContent style={{ padding: 0 }}>
              <List>
                <ListItem>Count of flagged Atlas features</ListItem>
                <ListItem>Count of flagged OSM features</ListItem>
                <ListItem>Count of flags</ListItem>
                <ListItem>Grid cell size</ListItem>
                <ListItem>Count of checks by type</ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <p>Afterwards, the grid-based statistics are used to generate the following statistics shown in the 'Quick Stats' section for each city:</p>

        <Grid item xs={12} className="gridItem">
          <Card className={classes.root}>
            <CardContent style={{ padding: 0 }}>
              <List>
                <ListItem>Count of total flagged OSM features (called OSM features)</ListItem>
                <ListItem>Count of total Atlas Checks flags (called Atlas Checks Flags)</ListItem>
                <ListItem>Total city area that are analyzed (called Total City Area)</ListItem>
                <ListItem>Percentages of checks by type</ListItem>
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