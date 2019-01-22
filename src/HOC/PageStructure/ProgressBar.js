import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  root: {
    width: '90%',
    height: '3px',
  },
};

const ProgressBar = (props) => {
  const { classes, progress } = props;
  return (
    <div className={classes.root}>
      <LinearProgress variant="determinate" value={progress} />
    </div>
  );
};

ProgressBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProgressBar);
