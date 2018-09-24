import React from 'react';

const MapLegend = () => {
  return (<div className='horizontalLegend'>
    <div className='horizontalLegend-title'>Legend header</div>
    <div className='horizontalLegend-scale'>
      <ul className='horizontalLegend-labels'>
        <li><span style={{ background: '#ffc033' }}/>Low</li>
        <li><span style={{ background: '#fc6e35' }}/>Medium</li>
        <li><span style={{ background: '#ff0000' }}/>High</li>
      </ul>
    </div>
  </div>);
};

export default MapLegend;