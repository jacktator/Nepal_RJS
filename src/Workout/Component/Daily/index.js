import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import Component from './component';
import MainComponent from '../../../HOC/PageStructure';
import { styles } from '../../styles';
import {
  statusArray, finishDailyQuery, getExercisesSample, getCurrentProgram, getDailyExercises,
} from '../../action';

class MainRehab extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderExercise: [],
      dialogOpen: false,
    };
    this.midPartTabsValueHandleChange = this.midPartTabsValueHandleChange.bind(this);
    this.renderExercise = this.renderExercise.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
  }


  componentDidMount() {
    if (sessionStorage.getItem('progress') === null) {
      getCurrentProgram();
    }
    const {
      exercises, finishDailyQuery, getDailyExercises,
    } = this.props;
    getDailyExercises({ length: exercises.length });
    finishDailyQuery(true);
  }

  componentDidUpdate(prevProps) {
    const sampleChanged = prevProps.unselectedExercises !== this.props.unselectedExercises;
    const statusChanged = prevProps.programSelectStatus !== this.props.programSelectStatus;
    if (sampleChanged || statusChanged) {
      this.renderExercise();
    }
  }

  openDialog() {
    this.setState({ dialogOpen: true });
  }

  closeDialog() {
    this.setState({ dialogOpen: false });
  }

  midPartTabsValueHandleChange(event, value) {
    this.setState({ midPartTabsValue: value });
  }

  renderExercise() {
    const {
      exercises, unselectedExercises, programSelectStatus,
    } = this.props;
    const statusIndex = statusArray.findIndex(v => v === programSelectStatus);
    switch (statusIndex) {
      case 0:
        this.setState({ renderExercise: exercises });
        return;
      case 1:
        this.setState({ renderExercise: unselectedExercises });
        return;
      case 2:
        const newArray = [].concat(exercises, unselectedExercises.slice(exercises.length));
        this.setState({ renderExercise: newArray });
        return;
      default:
        this.setState({ renderExercise: unselectedExercises });
    }
  }


  render() {
    const {
      classes, currentWeek, progress, dailyQuery,
    } = this.props;
    const { renderExercise, dialogOpen } = this.state;
    console.log(renderExercise);
    return (
      <MainComponent
        backgroundImage="image/sampleImage.jpeg"
        title="Workout"
        progress={progress}
        currentWeek={currentWeek}
        currentPage={2}
        FooterContent={1}
        showBottomButton
        tapBarContent={false}
        midComponent={(
          <Grid container style={{ flex: 1 }} justify="center" alignContent="space-around" alignItems="center">
            <Paper className={classes.midPaper} elevation={8}>
              <Component
                renderExercise={renderExercise}
                dailyQuery={dailyQuery}
                openDialog={dialogOpen}
                handleClose={this.closeDialog}
                handleOpenDialog={this.openDialog}
              />
            </Paper>
          </Grid>
          )}
      />
    );
  }
}

function mapStateToProps(state) {
  const {
    unselectedExercises, programSelectStatus, exercises, dailyQuery,
  } = state.Workout;
  return {
    unselectedExercises, programSelectStatus, exercises, dailyQuery,
  };
}

MainRehab.propTypes = {
  classes: PropTypes.object.isRequired,
  progress: PropTypes.object,
  currentWeek: PropTypes.number,
  dailyQuery: PropTypes.bool,
  exercises: PropTypes.array,
  finishDailyQuery: PropTypes.func,
  getDailyExercises: PropTypes.func,
};

export default connect(mapStateToProps, {
  getDailyExercises, finishDailyQuery, getCurrentProgram, getExercisesSample,
})(withStyles(styles)(MainRehab));
