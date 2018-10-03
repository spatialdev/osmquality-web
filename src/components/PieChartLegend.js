import React from 'react';

const PieChartLegend = props => {
  const legendData = props.legendData;
  const roadTagPercentage = legendData.roadTag * 100;
  const roadRelationPercentage = legendData.roadRelation * 100;
  const roadConnectionPercentage = legendData.roadConnections * 100;
  const roundaboutPercentage = legendData.roundabout * 100;

  const roadTagString = roadTagPercentage > 0 && roadTagPercentage < 1 ? '<1' : roadTagPercentage.toFixed(0);
  const roadRelationString = roadRelationPercentage > 0 && roadRelationPercentage < 1 ? '<1' : roadRelationPercentage.toFixed(0);
  const roadConnectionString = roadConnectionPercentage > 0 && roadConnectionPercentage < 1 ? '<1' : roadConnectionPercentage.toFixed(0);
  const roundaboutString = roundaboutPercentage > 0 && roundaboutPercentage < 1 ? '<1' : roundaboutPercentage.toFixed(0);


  return (
    <div className='my-legend'>
      <div className='legend-title'>Map Errors by Type</div>
      <div className='legend-scale'>
        <ul className='legend-labels'>
          <li><span style={{ background: '#47ACB1' }}/><p>Road Connections ({roadConnectionString}%)</p></li>
          <li><span style={{ background: '#E4BC43' }}/><p>Road Tags ({roadTagString}%)</p></li>
          <li><span style={{ background: '#F26522' }}/><p>Road Relations ({roadRelationString}%)</p></li>
          <li><span style={{ background: '#676766' }}/><p>Roundabouts ({roundaboutString}%)</p></li>
        </ul>
      </div>
    </div>
  );
};

export default PieChartLegend;