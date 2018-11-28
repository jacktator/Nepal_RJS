import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  List, ListItem, Paper, Divider, Typography, Grid, Button,
} from '@material-ui/core';
import FeedbackIcon from '@material-ui/icons/Feedback';
import RightIcon from '@material-ui/icons/KeyboardArrowRight';
import HOClistitem from './HOC/listitem';
import { styles } from '../styles';

const iconDisplay = (finish) => {
  switch (finish) {
    case true:
      return <FeedbackIcon />;
    default:
      return <RightIcon />;
  }
};

class SimpleList extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <List component="nav" disablePadding>
          <HOClistitem />
        </List>
      </div>
    );
  }
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);
