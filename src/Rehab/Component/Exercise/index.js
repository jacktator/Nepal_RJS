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
import { styles } from '../../styles';
import { setRehabExercisesRecordsByDay, updateRehabRecord, destructureExeData } from '../../actions';

class ExerciseIndex extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      exe: {},
    };
    this.handleSaveButtonClicked = this.handleSaveButtonClicked.bind(this);
    this.dealRenderExerciseRecord = this.dealRenderExerciseRecord.bind(this);
    this.returnBack = this.returnBack.bind(this);
  }

  componentDidUpdate() {
    console.log('componentDidMount------------------------------------------------------------', this.props.renderExercises.length);
    if (!this.props.match.params.exerciseOrder) {
      console.log('111111111111111111111');
      console.log('exerciseOrder', this.props.match.params.exerciseOrder);
      window.location.hash = '#/rehab/content';
    }
    if (this.props.match.params.exerciseOrder >= this.props.renderExercises.length) {
      console.log('22222222222222222222222222');
      console.log('exerciseOrder', this.props.match.params.exerciseOrder);
      window.location.hash = '#/rehab/content';
    }
  }

  handleSaveButtonClicked() {
    console.log(this.props.dayRehabExercisesRecords);
    const m = JSON.parse(JSON.stringify([...this.props.dayRehabExercisesRecords.data]));
    const itemID = this.props.match.params.exerciseOrder;
    const exe = this.props.renderExercises[itemID];
    const {
      name, reps, sets, time,
    } = exe;
    if (m[itemID].length >= sets * 1) {
      return;
    }
    const thisExerciseDetail = { name, sets, reps: reps === 'empty' ? time : reps };
    !m[itemID] ? m[itemID] = `${thisExerciseDetail.reps}` : m[itemID] = `${m[itemID].join(',')},${thisExerciseDetail.reps}`;
    console.log('ssssssssssssssssssssssssssssssadsd', m);
    const result = m.join(';');
    this.props.updateRehabRecord(result);
  }

  dealRenderExerciseRecord(m) {
    const n = m.data;
    const f = n.split(';').map((v) => {
      const s = v.split(',').map();
      return s;
    });
    return f;
  }

  returnBack() {
    this.props.history.goBack();
  }

  render() {
    const {
      classes, currentWeek, dayRehabExercisesRecords,
    } = this.props;
    const exeOrder = this.props.match.params.exerciseOrder;
    const exe = this.props.renderExercises[exeOrder];
    const {
      name, reps, sets, time,
    } = exe || {
      name: 'rehab', reps: '20', sets: '3', time: '10s',
    };
    const thisExerciseDetail = {
      name, sets, reps: reps === 'empty' ? time : reps, time: reps === 'empty',
    };
    console.log('record++++++++++++++++++++++++++++++++++++++++++++++++++++', dayRehabExercisesRecords);
    const mmm = dayRehabExercisesRecords.data || [];
    const ExList = mmm.length !== 0 ? mmm[exeOrder] ? mmm[exeOrder].map(v => ({ reps: v })) : [] : [];
    console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', ExList);
    return (
      <MainComponent
        backgroundImage="https://nepal.sk8tech.io/wp-content/uploads/2019/01/sampleImage.jpeg"
        progress={exeOrder}
        tapBarContent={false}
        currentWeek={currentWeek}
        currentPage={2}
        FooterContent={1}
        midComponent={(
          <Grid container style={{ flex: 1 }} direction="column" justify="center" alignContent="space-between" alignItems="center">

            <Grid container item direction="column" alignContent="space-between" alignItems="center">
              <AppBar position="static">
                <Toolbar style={{ justifyContent: 'space-between' }}>
                  <IconButton className={classes.menuButton} onClick={this.returnBack} color="secondary" aria-label="Menu">
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
              onSaveClick={this.handleSaveButtonClicked}
              ExList={ExList}
              thisExerciseDetail={thisExerciseDetail}
              finishCurrentExercise={thisExerciseDetail.sets >= ExList.length}
              currentExerciseOrder={exeOrder}
              dailyExerciseLength={8}
              rehab
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
    dayRehabExercisesRecords, renderExercises,
  } = state.Rehab;
  return {
    dayRehabExercisesRecords, renderExercises,
  };
}


export default connect(mapStateToProps, { setRehabExercisesRecordsByDay, updateRehabRecord })(withStyles(styles)(ExerciseIndex));
