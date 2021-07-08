import React, { Component, createRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

import bbox from "@turf/bbox";
import transformScale from "@turf/transform-scale";
import bboxPolygon from "@turf/bbox-polygon";
import {multiPoint} from "@turf/helpers";
import square from "@turf/square";

import {withStyles} from '@material-ui/core';
import Measure from "react-measure";

const styles = () => ({
  map: {
    height: '100%',
    width: '100%',
    minHeight: 300
  }
});

mapboxgl.accessToken = 'pk.eyJ1Ijoic3BhdGlhbGRldiIsImEiOiJjamxuN2kydGIxZzhsM3BwbmNrYmhpaWRkIn0.51uF3UCh8Vpb2M3Y-glu2g';
const mapboxMaps = {
  nocar: 'mapbox://styles/spatialdev/cjzmwlydi16yb1cmlney5rj52',
  coastal: 'mapbox://styles/spatialdev/ckqe3io6f1civ18qqlunwg3zd',
  ppl: 'mapbox://styles/spatialdev/cjzn2f2n11cic1cqdem3yxbvc',
  wfh: 'mapbox://styles/spatialdev/cjzn6045h1fwd1crrzvg29d88',
};
class Map extends Component {

  state = {
    mapboxMapRef: createRef(),
    map: null
  };

  constructor(props) {
    super(props);
  }

  getLooseBounds = (bounds, scale) => {
    return bbox(transformScale(bboxPolygon(square(bbox(multiPoint(bounds)))), scale));
  };

  componentDidMount = () => {
    const { mapboxMapRef } = this.state;
    const { style }  = this.props;
    const mapBounds = [[-116.3656827, 43.50939634], [-116.0941571, 43.69918141]];
    const options = {
      container: mapboxMapRef.current,
      style: mapboxMaps[style],
      bounds: mapBounds,
      // maxBounds: this.getLooseBounds(mapBounds, 1.25),
    };
    const map = new mapboxgl.Map(options);

    map.addControl(new mapboxgl.NavigationControl({showCompass: false}), 'bottom-right');
    this.setState({map});
  };

  componentDidUpdate = (prevProps, prevState) => {
    const {maxBounds: prevMaxBounds, style: prevStyle} = prevProps;
    const {maxBounds: currMaxBounds, style: currStyle} = this.props;
    const {map} = this.state;

    if (JSON.stringify(prevMaxBounds) !== JSON.stringify(currMaxBounds)) {

      // Before we can fly to a new location, we need to allow the camera to move
      map.setMaxBounds(null);
      map.fitBounds(currMaxBounds, {animate: false, padding: 10});
      // Once we've moved, we can set the new panning bounds
      // map.setMaxBounds(this.getLooseBounds(currMaxBounds, 2));
    }
    if (prevStyle !== currStyle)
    {
      map.setStyle(mapboxMaps[currStyle]);
    }
  };

  handleResize = () => {
    if (this.state.map) {
      this.state.map.resize();
    }
  };

  render = () => {
    const { classes } = this.props;
    const { mapboxMapRef } = this.state;
    return <Measure onResize={this.handleResize}>
      {({measureRef}) => {
        return (
          <div ref={measureRef} className={classes.map}>
            <div ref={mapboxMapRef} className={classes.map}/>
          </div>
        );
      }}
    </Measure>;
  };
}

export default withStyles(styles)(Map);