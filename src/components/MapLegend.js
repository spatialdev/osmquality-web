import React from 'react';

const MapLegend = () => {
  return <svg width="400" height="45">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="100%" spreadMethod="pad">
        <stop offset="0%" stopColor="#f3ebed" stopOpacity="1"/>
        <stop offset="50%" stopColor="#c2a0c0" stopOpacity="1"/>
        <stop offset="100%" stopColor="#5c3366" stopOpacity="1"/>
      </linearGradient>
    </defs>
    <rect width="200" height="15" transform="translate(0,0)" style={{fill: "url(\"#gradient\")"}}/>
    <g className="y axis" transform="translate(0,30)">
      <text y="-2" x="0">Low</text>
    </g>
    <g className="y axis" transform="translate(0,30)">
      <text y="-2" x="174">High</text>
    </g>
  </svg>
};

export default MapLegend;