import React from 'react';

const MapLegend = () => {
  return <svg style={{margin: 'auto 0px'}} width="300" height="45">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="100%" spreadMethod="pad">
        <stop offset="0%" stopColor="#f7f0ed" stopOpacity="1"/>
        <stop offset="50%" stopColor="#f2ac9b" stopOpacity="1"/>
        <stop offset="100%" stopColor="#e3645b" stopOpacity="1"/>
      </linearGradient>
    </defs>
    <rect width="300" height="15" transform="translate(0,0)" style={{fill: "url(\"#gradient\")"}}/>
    <g className="y axis" transform="translate(0,30)">
      <text y="4" x="0">Low</text>
    </g>
    <g className="y axis" transform="translate(0,30)">
      <text y="4" x="266">High</text>
    </g>
  </svg>
};

export default MapLegend;