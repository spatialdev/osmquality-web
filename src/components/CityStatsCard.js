import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import OutlinedFlag from '@material-ui/icons/OutlinedFlag';

import '../App.css';

const CityStatsCard = props => {
  const { data } = props;
  return (
    <Card className="statsCard" style={{ margin: '10px' }}>
      <CardContent>
        <h3 className="cardHeader">
          Quick Stats
        </h3>

        <div className="gridRoot">
          <GridList cellHeight={160} className="gridList" cols={2}>
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
  data: PropTypes.object.isRequired,
};

export default CityStatsCard;
