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

          <h4>OSM PBF Extraction</h4>
          <p> The OSM data used was extracted from a full OSM history PBF file (<a href="https://planet.openstreetmap.org/">Source</a>). The goal of the initial phase of data processing was to have two extracts for each city, one containing 2018 data and the other 2019 data. This was achieved using a tool called <a href="https://osmcode.org/osmium-tool/">Osmium</a>.</p>
          <p> The first step was to cut the full planet OSM history PBF into a history file for each city using Osmium's 'extract' tool. The tool used geojson boundaries of each city to perform a soft clip for each, generating the new city history PBFs.</p>
          <p>Next, each of the city history files were time sliced. Using Osmium's 'time-filter' tool each history file was filtered so that the data appeared the same as it would have at a specific point in time in OSM. For each city this was done twice, creating a PBF for April 7th at 10am UTC for both 2018 and 2019. At this point, the new time slice PBFs were in standard OSM PBF format, as opposed to OSM history files.</p>
          <p>Finally, extraneous Nodes were cleaned from the time slice PBFs using a simple python script. The Nodes in question did not have an spatial information, as they were remnants of features that had been deleted at that point in time.</p>

          <h4>MQM Extent Enhancement</h4>
          <p>An addition to MQM was incorporated into our methodology this year, to better compare differences over time. The additional feature allows the extent of MQM results to be locked to a specified bounding box, as opposed to being dynamically set by the extent of the input data. This allowed the results of two MQM runs to share the same extent despite small variances in the spatial bound of the input data.</p>


         

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