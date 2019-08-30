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
          <p>Cities are ranked based on its map error rate which is calculated by dividing the number of error OSM features by the number of total OSM features.</p>

          <h4>OSM PBF Extraction</h4>
          <p> The OSM data used was extracted from a full OSM history PBF file (<a href="https://planet.openstreetmap.org/">Source</a>). The full OSM history PBF was then clipped into city OSM history PBFs using each city's boundary file and <a href="https://osmcode.org/osmium-tool/">Osmium's extract tool</a>. Next, 2018 and 2019 data were extracted from each city OSM history PBF file using Osmium's 'time-filter' tool. Specifically, we kept data that was ingested before April 7th at 10am UTC in both 2018 and 2019, and call these outputs 'time slice' PBFs. Finally, Nodes without spatial information were filtered out from the time slice PBFs using a python script.</p>

          <h4>MQM Extent Enhancement</h4>
          <p>This year, we used the bounding box generated from each city's boundary file, as opposed to a user defined one that may or may not cover the entire city boundary, as the MQM extent. This allows for a more accurate representation of each city's OSM data quality.</p> 

          <h4>Re-prioritize Map Error Hot-Spots by Usage</h4>
          <p>To reprioritize map error hot-spots by usage, we collect data from the U.S. Census Bureau's American Community Survey. In particular, we used population data from 'Selected Characteristics of the Total and Native Populations in the United States' and 'no vehicle available' data from 'Means of Transportation to Work by Selected Characteristics' as estimates of road usage level in each city. Both are 2017 ACS 5-year estimates on the census tract level.</p>
          <p>We generated the MQM grids for population and car ownership through the following steps: first, joined the census data to the city census tracts. Then, we generated raster layers for each data category. Afterwards, we generated the MQM grids using the city boundary, and calculated the mean value of the raster layer in each grid using the zonal statistics tool in QGIS. Finally, we normalized the values into a scale of 0 - 100% and reclassify them into five levels by quantile.</p>
          <p> To combine the population and car ownership grids respectively with the MQM map error grids, we assigned a higher weight to the MQM grid because the map errors should still be the dominant factor for determining a city's map data quality. Specifically, we used the following formula: Combined Score = 0.7 × MQM Score + 0.3 × Census Score. For future enhancement, we would like to provide more flexibility for assigning weights to these layers. </p>

          <h4>Grid Generation and Statistics</h4>
          <p>MQM grids were generated using a custom python tool which optimizes grid size based on map error density. The tool generates a bounding box using the city boundary, and recursively split it into half until a user-defined termination condition is met. Splitting terminates when the vast majority (a user-defined percentage) grids contain a relatively small amount of map errors (a user-defined number), so a few grids with the highest amount of errors form hot-spots. The resulting grids are thematically styled as choropleth heat maps that can be used by editors to prioritize their work. For each grid, we show the counts of the flagged OSM features and the grid size.</p>
  
        </div>
      </CardContent>
    </Card>
  );
};

Methodology.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Methodology);