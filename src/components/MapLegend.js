import React from 'react';

const MapLegend = () => {
  return (<div className='horizontalLegend'>
    <div className='horizontalLegend-scale'>
      <p>Map Errors</p>
      <ul className='horizontalLegend-labels'>
        <li><span style={{ background: '#ffffb2', opacity: 0.62 }}/>Low</li>
        <li><span style={{ background: '#fd8d3c', opacity: 0.62 }}/>Medium</li>
        <li><span style={{ background: '#bd0026', opacity: 0.62 }}/>High</li>
      </ul>
    </div>
  </div>);
};

export default MapLegend;