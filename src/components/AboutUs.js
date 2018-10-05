import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Divider from '@material-ui/core/Divider/Divider';

const styles = () => ({
  root: {
    margin: '10px',
    width: 'calc(100% - 20px)',
    alignItems: 'center',
  },

  wrapper: {
    margin: '10px 10px 0px 10px',
    width: 'calc(100% - 20px)',
    alignItems: 'center',
    paddingBottom: '100px'
  }
});

const AboutUs = props => {
  const { classes } = props;

  return (
    <Card className={classes.wrapper}>
      <CardContent style={{ padding: '15px 20px' }}>
        <h3 style={{ textAlign: 'center' }}>About Us</h3>
        <Divider/>
        <p>
          <a href="https://www.critigen.com/about/" target="_blank" rel="noopener noreferrer">Critigen</a> is a global
          team providing consulting, design, integration, and support services - mostly involving
          geospatial technologies. Critigen works with clients to “spatially-enable” their systems, products and
          services. Critigen harnesses the power of spatial technology by leveraging 30 + years of knowledge and
          innovation from our team of experts. Our results are sustainable spatial information solutions and decision
          support tools aimed at improving operational effectiveness and efficiencies.
        </p>
        <p>
          We’ve been working with OpenStreetMap for a decade - making contributions, creating maps, performing analyses
          and building tools. We love being part of the community building a free and open map of the world for
          everyone.
        </p>
        <p>
          Follow us on Twitter: <a href="https://twitter.com/osmquality" target="_blank"
                                   rel="noopener noreferrer">https://twitter.com/osmquality</a>
        </p>
        <p>
          We’re hiring: <a href="https://www.critigen.com/about/careers/" target="_blank"
                           rel="noopener noreferrer">https://www.critigen.com/about/careers</a>
        </p>
        <p>
          Check out our work: <a href="http://spatialdev.github.io" target="_blank"
                           rel="noopener noreferrer">http://spatialdev.github.io</a>
        </p>

      </CardContent>
    </Card>
  );
};

AboutUs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutUs);