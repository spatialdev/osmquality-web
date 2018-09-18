import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { mdiFacebookBox, mdiTwitterBox, mdiInstagram, mdiLinkedinBox } from '@mdi/js';


const styles = {
  root: {
    width: '100%',
    backgroundColor: '#404040',
    left: 0,
    bottom: 0,
    height: '100px',
    overflow: 'hidden',
    padding: '5px',
  },
  share: {
    color: '#ffffff',
  }
};


class Footer extends Component {
  state = {
    value: 'recents',
  };

  flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <div>
          <p className={classes.share}>Share this:</p>
          <List style={this.flexContainer}>
            <ListItem><Icon path={mdiFacebookBox}/></ListItem>
            <ListItem
              primaryText="foo2"
              secondaryText="bar2"/>
          </List>
        </div>

      </BottomNavigation>
    );
  }
}

function Icon(props) {
  return (
    <svg viewBox="0 0 24 24"
         style={{ width: '24px', height: '24px' }}>
      <path d={props.path}/>
    </svg>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
