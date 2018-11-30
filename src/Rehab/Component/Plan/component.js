import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  List, ListItem, ListItemIcon, ListItemText, Divider, Typography, Grid, Paper,
} from '@material-ui/core';
import FeedbackIcon from '@material-ui/icons/Feedback';
import RightIcon from '@material-ui/icons/KeyboardArrowRight';
import { styles } from '../../styles';

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
      <List className={classes.root} component="nav" disablePadding>
        {
            [...Array(this.props.days || 5)].map((v, k) => (
              <ListItem key={k} component={Paper} divider elevation={4} className={classes.infoListItem}>
                <ListItemText primary={(
                  <Typography color="secondary" variant="body1">{`Day ${k + 1}`}</Typography>)}
                />
                <ListItemIcon>{iconDisplay(this.props.finish)}</ListItemIcon>
              </ListItem>
            ))
        }
      </List>
    );
  }
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);
