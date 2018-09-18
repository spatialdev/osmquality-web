import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import GridOn from '@material-ui/icons/GridOn';
import Map from '@material-ui/icons/Map';
import OutlinedFlag from '@material-ui/icons/OutlinedFlag';
import Settings from '@material-ui/icons/Settings';

import '../App.css';


const CityStatsCard = props => {
  const { data } = props;
  return (
    <Card className="statsCard" style={{ margin: '10px' }}>
      <CardContent style={{ padding: 0 }}>
        <h3 className="cardHeader">
          Quick Stats
        </h3>
        <div className="gridRoot">
          <GridList cellHeight={160} className="gridList" cols={2}>
            <GridListTile key={data.features} cols={1} className="gridTile">
              <div>
                <Settings className="icon"/>
                <div>
                  <h4 style={{ margin: 0, display: 'inline' }}>{data.features}</h4>
                  <p>Number of OSM Features</p>
                </div>
              </div>
            </GridListTile>
            <GridListTile key={data.flags} cols={1} className="gridTile">
              <div>
                <OutlinedFlag className="icon"/>
                <div>
                  <h4 style={{ margin: 0, display: 'inline' }}>{data.flags}</h4>
                  <p>Number of Atlas Checks Flags</p>
                </div>
              </div>
            </GridListTile>
            <GridListTile key={data.totalArea} cols={1} className="gridTile">
              <div>
                <Map className="icon"/>
                <div>
                  <h4 style={{ margin: 0, display: 'inline' }}>{data.totalArea}</h4>
                  <p>Total City Area (km2)</p>
                </div>
              </div>
            </GridListTile>
            <GridListTile key={data.gridSize} cols={1} className="gridTile">
              <div>
                <GridOn className="icon"/>
                <div>
                  <h4 style={{ margin: 0, display: 'inline' }}>{data.gridSize}</h4>
                  <p>Grid Cell Size</p>
                </div>
              </div>
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
