import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import '../App.css';
import { Chart } from "react-google-charts";

import numberWithCommas from '../helpers/helpers';

import flag_icon from '../images/flag_icon.svg';
import shape_icon from '../images/shape_icon.svg';
import grid_icon from '../images/grid_icon.svg';
import trending_flat from '../images/trending_flat.svg';
import trending_down from '../images/trending_down.svg';
import trending_up from '../images/trending_up.svg';

const CityStatsCard = props => {
  const { data } = props;
  const flagTrend = (data.score-data.score_2018)*100;
  return (
    <Card className="statsCard" style={{
      margin: '10px'
    }}>
      <CardContent style={{ padding: 0 }}>
          <div className="cardHeaderContainer">
              <h3 className="cardHeader">
                  Quick Stats
              </h3>
          </div>
        <div >
            <div className="statDiv">
                <div>
                    <object data={flagTrend > 0 ? trending_up : flagTrend < 0 ? trending_down : trending_flat}
                            className={flagTrend > 0 ? "trendingUp" :
                                flagTrend < 0 ? "trendingDown" : "trendingFlat"}>Flag Icon
                    </object>
                    <div>
                        <h2 style={{margin: 0, display: 'inline'}}>{flagTrend.toFixed(2)}%</h2>
                        <p>Error Rate (vs. 2018)</p>
                    </div>
                </div>
            </div>
            <div className="statDiv">
                <div>
                    <object data={flag_icon} className="statsIcon">Flag Icon</object>
                    <div>
                        <h2 style={{margin: 0, display: 'inline'}}>{numberWithCommas(data.flags)}</h2>
                        <p>Affected OSM features</p>
                    </div>
                </div>
            </div>

            <div className="statDiv">
                <div>
                    <object data={shape_icon} className="statsIcon">Shape Icon</object>
                    <div>
                        <h2 style={{margin: 0, display: 'inline'}}>{numberWithCommas(data.totalRoads.toFixed(0))}</h2>
                        <p>Total OSM Road Features </p>
                    </div>
                </div>
            </div>

            <div className="statDiv">
                <div>
                    <object data={grid_icon} className="statsIcon">Grid Icon</object>
                    <div>
                        <h2 style={{margin: 0, display: 'inline'}}>{numberWithCommas(data.gridSize.toFixed(1))}</h2>
                        <p>Grid Cell Size (km<sup>2</sup>)</p>
                    </div>
                </div>
            </div>
            <div>
                <div className ='chartTitle'>Map Errors by Type</div>

                <Chart
                    className="barChart"
                    chartType="BarChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        [
                            'Item',
                            'Count',
                            { role: 'style' },
                            {
                                sourceColumn: 0,
                                role: 'annotation',
                                type: 'string',
                                calc: 'stringify',
                            },
                        ],
                        ['Road Geometry', data.roadGeometry, '#1802b1', null],
                        ['Road Attributes', data.roadAttributes, '#129BB1', null],
                    ]}
                    options={{
                        width: 300,
                        height: 120,
                        bar: { groupWidth: '50%' },
                        legend: { position: 'none' },

                    }}
                />
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

CityStatsCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CityStatsCard;
