import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import BottomMsg from '../../Workout/Component/Exercise/BottomMsg';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const ProgressBar = (props) => {
    const { classes, progress, message, thisExerciseDetail, ExList, history } = props;
    return (
      <div className={classes.root}>
        {message && 
          <BottomMsg
            thisExerciseDetail={thisExerciseDetail}
            ExList={ExList}
            history={history}
          />
        }
        <LinearProgress variant="determinate" value={progress} />
      </div>
  );
};

ProgressBar.propTypes = {
  classes: PropTypes.object.isRequired,
  progress: PropTypes.number.isRequired,
  message: PropTypes.bool,
};

export default withStyles(styles)(ProgressBar);
