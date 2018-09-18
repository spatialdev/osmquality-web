import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import OutlinedFlag from '@material-ui/icons/OutlinedFlag';

const styles = {
  card: {
    minWidth: 275,
    borderRadius: 0,
  },
  cardHeader: {
    textAlign: 'center',
    borderBottom: '1px solid rgba(151,151,151, 0.27)',
    padding: '4px 0 20px 0',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: 500,
    border: '1px center #979797 100%'
  },
};

const CityStatsCard = props => {
  const { classes, data } = props;
  return (
    <Card className={classes.card} style={{ margin: '10px' }}>
      <CardContent>
        <h3 className={classes.cardHeader}>
          Quick Stats
        </h3>

        <div className={classes.root}>
          <GridList cellHeight={160} className={classes.gridList} cols={2}>
            <GridListTile key={data.features} cols={1}>
              <h4>{data.features}</h4>
              <p>Number of OSM Features</p>
            </GridListTile>
            <GridListTile key={data.flags} cols={1}>
              <OutlinedFlag/>
              <h4>{data.flags}</h4>
              <p>Number of Atlas Checks Flags</p>
            </GridListTile>
            <GridListTile key={data.totalArea} cols={1}>
              <h4>{data.totalArea}</h4>
              <p>Total City Area (km2)</p>
            </GridListTile>
            <GridListTile key={data.gridSize} cols={1}>
              <h4>{data.gridSize}</h4>
              <p>Grid Cell Size</p>
            </GridListTile>
          </GridList>
        </div>
      </CardContent>
    </Card>
  );
};

CityStatsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default withStyles(styles)(CityStatsCard);
