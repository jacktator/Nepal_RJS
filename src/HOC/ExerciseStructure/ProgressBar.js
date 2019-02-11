import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import BottomMsg from '../../Workout/Component/Exercise/BottomMsg';

const ProgressBar = (props) => {
  const {
    progress, message, thisExerciseDetail, ExList, history,
  } = props;
  return (
    <div>
      {message
          && (
          <BottomMsg
            thisExerciseDetail={thisExerciseDetail}
            ExList={ExList}
            history={history}
          />
          )
        }
      <LinearProgress variant="determinate" value={progress} />
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  message: PropTypes.bool,
};

export default ProgressBar;
