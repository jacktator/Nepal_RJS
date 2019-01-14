import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { connect } from 'react-redux';
import ExerciseComponent from './component';
import MainComponent from '../../../HOC/PageStructure';
import SpeedDialTooltipOpen from '../../../HOC/speedDial';
import { add, min } from '../../../HOC/numberSelect';
import { styles } from '../../styles';
import { setRehabExercisesRecordsByDay } from '../../actions';

class ExerciseIndex extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleSaveButtonClicked = this.handleSaveButtonClicked.bind(this);
    this.dealRenderExerciseRecord = this.dealRenderExerciseRecord.bind(this);
  }

  handleSaveButtonClicked() {
    const m = [...this.props.dayRehabExercisesRecords.split(';')];
    const { state } = this.props.location;
    const { exe, itemID } = state;
    const {
      name, reps, sets, time,
    } = exe;
    const thisExerciseDetail = { name, sets, reps: reps === 'empty' ? time : reps };
    m[itemID] ? m[itemID] = `${thisExerciseDetail.reps}` : m[itemID] = `${m[itemID]},${thisExerciseDetail.reps}`;
    const result = m.join(';');
    this.props.setRehabExercisesRecorded(result);
  }

  dealRenderExerciseRecord(m) {
    const n = m.data;
    const f = n.split(';').map((v) => {
      const s = v.split(',').map(vv => ({ reps: vv }));
      return s;
    });
    return f;
  }

  render() {
    const {
      classes, currentWeek, location, dayRehabExercisesRecords,
    } = this.props;
    const { state } = location;
    const { exe, itemID } = state;
    const {
      name, reps, sets, time,
    } = exe;
    const thisExerciseDetail = { name, sets, reps: reps === 'empty' ? time : reps };
    const ExList = this.dealRenderExerciseRecord(dayRehabExercisesRecords)[itemID];
    return (
      <MainComponent
        backgroundImage="https://nepal.sk8tech.io/wp-content/uploads/2019/01/sampleImage.jpeg"
        progress={itemID}
        tapBarContent={false}
        currentWeek={currentWeek}
        currentPage={2}
        FooterContent={1}
        midComponent={(
          <Grid container style={{ flex: 1 }} direction="column" justify="center" alignContent="space-between" alignItems="center">

            <Grid container item direction="column" alignContent="space-between" alignItems="center">
              <AppBar position="static">
                <Toolbar style={{ justifyContent: 'space-between' }}>
                  <IconButton className={classes.menuButton} color="secondary" aria-label="Menu">
                    <LeftIcon style={{ fontSize: '30px' }} />
                  </IconButton>
                  <Typography className={classes.grow} variant="h6" color="secondary">Title</Typography>
                  <div style={{ minHeight: '56px', minWidth: '56px' }}>
                    <SpeedDialTooltipOpen right secondary />
                  </div>
                </Toolbar>
              </AppBar>
            </Grid>

            <ExerciseComponent
              step={10}
              ExList={ExList}
              thisExerciseDetail={thisExerciseDetail}
            />

          </Grid>
        )}
      />
    );
  }
}

ExerciseIndex.propTypes = {
  classes: PropTypes.object.isRequired,
  progress: PropTypes.object,
  currentWeek: PropTypes.number,
};

function mapStateToProps(state) {
  const {
    dayRehabExercisesRecords,
  } = state.Rehab;
  return {
    dayRehabExercisesRecords,
  };
}


export default connect(mapStateToProps, { setRehabExercisesRecordsByDay })(withStyles(styles)(ExerciseIndex));
