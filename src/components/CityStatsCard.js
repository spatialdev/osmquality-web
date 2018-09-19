import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import '../App.css';


import flag_icon from '../images/flag_icon.svg';
import gear_icon from '../images/gear_icon.svg';
import shape_icon from '../images/shape_icon.svg';
import grid_icon from '../images/grid_icon.svg';

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
            <GridListTile key={data.features} cols={1} style={{height: '100px'}} classes={{
              tile: 'gridTileTile',
              root: 'gridTileRoot'
            }}>
              <div className="statDiv">
                <div>
                  <object data={gear_icon} className="statsIcon">Gear Icon</object>

                  <div>
                    <h4 style={{ margin: 0, display: 'inline' }}>{data.features}</h4>
                    <p>No. of OSM Features</p>
                  </div>
                </div>
              </div>
            </GridListTile>
            <GridListTile key={data.flags} cols={1} style={{height: '100px'}} classes={{
              tile: 'gridTileTile',
              root: 'gridTileRoot'
            }}>
              <div className="statDiv">
                <div>
                  <object data={flag_icon} className="statsIcon">Flag Icon</object>
                  <div>
                    <h4 style={{ margin: 0, display: 'inline' }}>{data.flags}</h4>
                    <p>No. of Atlas Checks Flags</p>
                  </div>
                </div>
              </div>
            </GridListTile>
            <GridListTile key={data.totalArea} cols={1} style={{height: '100px'}} classes={{
              tile: 'gridTileTile',
              root: 'gridTileRoot'
            }}>
              <div className="statDiv">
                <div>
                  <object data={shape_icon} className="statsIcon">Shape Icon</object>
                  <div>
                    <h4 style={{ margin: 0, display: 'inline' }}>{data.totalArea}</h4>
                    <p>Total City Area (km2)</p>
                  </div>
                </div>
              </div>
            </GridListTile>
            <GridListTile key={data.gridSize} cols={1} style={{height: '100px'}} classes={{
              tile: 'gridTileTile',
              root: 'gridTileRoot'
            }}>
              <div className="statDiv">
                <div>
                  <object data={grid_icon} className="statsIcon">Grid Icon</object>
                  <div>
                    <h4 style={{ margin: 0, display: 'inline' }}>{data.gridSize}</h4>
                    <p>Grid Cell Size</p>
                  </div>
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
