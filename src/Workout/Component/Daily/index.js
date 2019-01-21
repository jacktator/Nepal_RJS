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
  statusArray, finishDailyQuery, getExercisesSample,
  getCurrentProgram, getDailyExercises, setRenderExercise, programSelectState,
  selectExercise, setSelectedExercisesQuery, setSelectedExercises, userKeepExercise,
} from '../../action';

class MainRehab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      dialogSelected: 0,
      dialogIndexSelected: 0,
      selectedFatherExercises: -1,
      midSelectExercise: [],
      err: false,

    };
    this.midPartTabsValueHandleChange = this.midPartTabsValueHandleChange.bind(this);
    this.renderExercise = this.renderExercise.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.selectDialogIndex = this.selectDialogIndex.bind(this);
    this.keepExercise = this.keepExercise.bind(this);
    this.selectMidExercise = this.selectMidExercise.bind(this);
    this.closeErrDialog = this.closeErrDialog.bind(this);
  }

  componentDidMount() {
    const {
      exercises, finishDailyQuery, getDailyExercises,
    } = this.props;
    if (this.props.renderExercises.length !== 0) {
      return;
    }
    getDailyExercises({ length: exercises.length });
    finishDailyQuery(true);
  }

  componentDidUpdate(prevProps) {
    const sampleChanged = prevProps.unselectedExercises !== this.props.unselectedExercises;
    const exerciseChanged = prevProps.exercises !== this.props.exercises;
    const statusChanged = prevProps.programSelectStatus !== this.props.programSelectStatus;
    if (sampleChanged || statusChanged || exerciseChanged) {
      this.renderExercise();
    }
  }

  selectMidExercise(data) {
    const { midSelectExercise, selectedFatherExercises } = this.state;
    const m = JSON.parse(JSON.stringify(midSelectExercise));
    m[selectedFatherExercises] = data;
    this.setState({ midSelectExercise: m });
    this.closeDialog();
  }

  handleNext() {
    this.setState(prevState => ({
      dialogSelected: prevState.dialogSelected + 1,
    }));
  }

  handleBack() {
    this.setState(prevState => ({
      dialogSelected: prevState.dialogSelected - 1,
    }));
  }

  keepExercise(data) {
    const { midSelectExercise } = this.state;
    if (!midSelectExercise[data.listID]) {
      this.setState({ err: true });
      return;
    }
    this.props.finishDailyQuery(true);
    const m = [].concat(this.props.exercises);
    const replace = midSelectExercise[data.listID];
    m[data.listID] = { ...data, name: replace.name, progression_model: replace.progression_model };
    const f = [...m.map(v => (v === 'unselected' ? '' : `(${[...Object.values(v)].join()})`))].join(';');
    const fin = m.length === this.props.unselectedExercises.length;
    this.props.userKeepExercise(f, fin);
  }

  openDialog(id, listID) {
    this.setState({ dialogOpen: true });
    if (listID === this.state.selectedFatherExercises) {
      return;
    }
    this.selectFatherExercise(listID);
    this.props.setSelectedExercises([]);
    this.props.setSelectedExercisesQuery(true);
    this.setState({
      dialogSelected: 0,
      dialogIndexSelected: 0,
    });
    this.props.selectExercise(id);
  }

  selectFatherExercise(id) {
    this.setState({ selectedFatherExercises: id });
  }

  selectDialogIndex(id) {
    this.setState({ dialogSelected: 0 });
    this.setState({ dialogIndexSelected: id });
  }

  closeDialog() {
    this.setState({ dialogOpen: false });
  }

  closeErrDialog() {
    this.setState({ err: false });
  }


  midPartTabsValueHandleChange(event, value) {
    this.setState({ midPartTabsValue: value });
  }

  renderExercise() {
    const {
      exercises, unselectedExercises,
    } = this.props;
    const programSelectStatus = programSelectState(unselectedExercises.length, exercises.length);
    const statusIndex = statusArray.findIndex(v => v === programSelectStatus);
    const newArray = [];
    switch (statusIndex) {
      case 0:
        this.props.setRenderExercise(exercises);
        return;
      case 1:
        this.props.setRenderExercise(unselectedExercises);
        return;
      case 2:
        for (let i = 0; i < unselectedExercises.length; i++) {
          newArray[i] = exercises[i] ? (exercises[i] === 'unselected' ? unselectedExercises[i] : exercises[i]) : unselectedExercises[i];
        }
        this.props.setRenderExercise(newArray);
        return;
      default:
        this.props.setRenderExercise(unselectedExercises);
    }
  }


  render() {
    const {
      classes, currentWeek, progress, dailyQuery, renderExercises, selectedExercises, selectedExercisesQuery,
    } = this.props;
    const {
      err, dialogOpen, dialogSelected, dialogIndexSelected, midSelectExercise, selectedFatherExercises,
    } = this.state;
    return (
      <MainComponent
        backgroundImage="https://nepal.sk8tech.io/wp-content/uploads/2019/01/sampleImage.jpeg"
        title="Workout"
        progress={progress}
        currentWeek={currentWeek}
        currentPage={3}
        FooterContent={1}
        workout
        showBottomButton
        tapBarContent={false}
        midComponent={(
          <Grid container style={{ flex: 1 }} justify="center" alignContent="space-around" alignItems="center">
            <Paper className={classes.midPaper} elevation={8}>
              <Component
                userKeepExercise={this.keepExercise}
                renderExercise={renderExercises}
                selectedExercisesQuery={selectedExercisesQuery}
                selectedExercises={selectedExercises}
                dailyQuery={dailyQuery}
                openDialog={dialogOpen}
                handleClose={this.closeDialog}
                handleOpenDialog={this.openDialog}
                midSelectExercise={midSelectExercise}
                handleNext={this.handleNext}
                handleBack={this.handleBack}
                dialogIndexSelected={dialogIndexSelected}
                dialogSelected={dialogSelected}
                selectDialogIndex={this.selectDialogIndex}
                selectMidExercise={this.selectMidExercise}
                err={err}
                handleErrClose={this.closeErrDialog}
                selectedFatherExercises={selectedFatherExercises}
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
    unselectedExercises, programSelectStatus, exercises, dailyQuery, renderExercises, selectedExercises, selectedExercisesQuery,
  } = state.Workout;
  return {
    unselectedExercises, programSelectStatus, exercises, dailyQuery, renderExercises, selectedExercises, selectedExercisesQuery,
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
  getDailyExercises,
  finishDailyQuery,
  getCurrentProgram,
  getExercisesSample,
  setRenderExercise,
  selectExercise,
  setSelectedExercisesQuery,
  setSelectedExercises,
  userKeepExercise,
})(withStyles(styles)(MainRehab));
