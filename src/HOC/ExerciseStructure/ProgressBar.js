import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const ProgressBar = (props) => {
    const { classes, progress } = props;
    return (
      <div className={classes.root}>
        <Typography align="center" variant="body1" component="h6" color="textPrimary">Do as much reps as possible</Typography>
        <LinearProgress variant="determinate" value={progress} />
      </div>
    );
}

ProgressBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProgressBar);