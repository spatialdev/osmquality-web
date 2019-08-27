import React, { Component, createRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

import bbox from "@turf/bbox";
import transformScale from "@turf/transform-scale";
import bboxPolygon from "@turf/bbox-polygon";
import {multiPoint} from "@turf/helpers";

import {withStyles} from '@material-ui/core';

const styles = () => ({
  map: {
    height: '400px',
    width: '400px'
  }
});

mapboxgl.accessToken = 'pk.eyJ1Ijoic3BhdGlhbGRldiIsImEiOiJjanpoYWFyZTkwaW4xM25vNWs2cWt6NWFqIn0.pjqihTlW7bHAp8bC8SaiNQ';
class Map extends Component {

  state = {
    mapboxMapRef: createRef(),
    map: null
  };

  constructor(props) {
    super(props);
  }

  getLooseBounds = (bounds, scale) => {
    return bbox(transformScale(bboxPolygon(bbox(multiPoint(bounds))), scale));
  };

  componentDidMount = () => {
    const { mapboxMapRef } = this.state;
    const { style }  = this.props;
    const mapBounds = [[-116.3656827, 43.50939634], [-116.0941571, 43.69918141]];
    const options = {
      container: mapboxMapRef.current,
      style,
      bounds: mapBounds,
      maxBounds: this.getLooseBounds(mapBounds, 2),
    };
    const map = new mapboxgl.Map(options);
    this.setState({map});
  };

  componentDidUpdate = (prevProps, prevState) => {
    const {maxBounds: prevMaxBounds, style: prevStyle } = prevProps;
    const {maxBounds: currMaxBounds, style: currStyle } = this.props;
    const {map} = this.state;
    if (JSON.stringify(prevMaxBounds) !== JSON.stringify(currMaxBounds)) {
      // Since we're re-using a map and div container, we need to re-size between loads to ensure that it gets the
      // size of its new container.
      map.resize();

      // Before we can fly to a new location, we need to allow the camera to move
      map.setMaxBounds(null);
      map.fitBounds(currMaxBounds, {animate: false, padding: 10});
      // Once we've moved, we can set the new panning bounds
      map.setMaxBounds(this.getLooseBounds(currMaxBounds, 2));
    }
    if (prevStyle !== currStyle)
    {
      map.setStyle(currStyle);
    }
  };

  render = () => {
    const { classes } = this.props;
    const { mapboxMapRef } = this.state;
    return <div ref={mapboxMapRef} className={classes.map}/>;
  };
}

export default withStyles(styles)(Map);