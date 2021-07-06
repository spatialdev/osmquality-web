import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import '../App.css';
import { Chart } from "react-google-charts";

import numberWithCommas from '../helpers/helpers';

import flag_icon from '../images/flag_icon.svg';
import shape_icon from '../images/shape_icon.svg';
import grid_four from '../images/grid-four.svg';
import trending_flat from '../images/trending_flat.svg';
import trending_down from '../images/trending_down.svg';
import trending_up from '../images/trending_up.svg';
import warning_circle from '../images/warning-circle.svg';
import building from '../images/buildings.svg';
import road from '../images/Road.svg';

const CoastalCityStatsCard = props => {
  const { data, history } = props;
  const flagTrend = (data.score)*100;
  const buildingErrorRate = (data.osmBuildingErrorRate)*100;
  const roadErrorRate =  (data.osmRoadErrorRate)*100;
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
                    <object data={warning_circle} className="statsIcon">Flag Icon
                    </object>
                    <div>
                        <h2 style={{margin: 0, display: 'inline'}}>{flagTrend.toFixed(2)}%</h2>
                        <p>Average Error Rate</p>
                    </div>
                </div>
            </div>

             <div className="statDiv">
                <div>
                   <object data={building} className="statsIcon">Flag Icon
                    </object>

                    <div>
                        <h2 style={{margin: 0, display: 'inline'}}>{(buildingErrorRate).toFixed(2)}%</h2>
                        <p>OSM Building Feature Error Rate</p>
                    </div>
                </div>
            </div>

            <div className="statDiv">
                <div>
                    <object data={road} className="statsIcon">Flag Icon
                    </object>
                    <div>
                        <h2 style={{margin: 0, display: 'inline'}}>{(roadErrorRate).toFixed(2)}%</h2>
                        <p>OSM Road Feature Error Rate</p>
                    </div>
                </div>
            </div>

            <div className="statDiv">
                <div>
                    <object data={grid_four} className="statsIcon">Grid Icon</object>
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
                        ['Natural Features', data.WaterFlags, '#000000', null],
                        ['Building', data.BuildingFlags, '#000000', null],
                        ['Road', data.RoadFlags, '#000000', null],
                    ]}
                    options={{

                        height: 177,
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

CoastalCityStatsCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CoastalCityStatsCard;
