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
import {
  getExerciseDetail, setAllDayExercises, selectExercise, setTodayExercises, getYoutubeLink,
  finishExercisePageQuery, updataOneExercise, finishAllDailyExercises, getThisExerciseHistory,
} from '../../action';
import LoadingComponent from '../../../HOC/Loading';

class ExerciseIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 0,
      reps: 0,
      youtube: false,
      history: false,
      title: 'youtube',
      shortPlayer: null,
      playing: true,
    };
    this.weightAdd = this.weightAdd.bind(this);
    this.weightMin = this.weightMin.bind(this);
    this.repsAdd = this.repsAdd.bind(this);
    this.repsMin = this.repsMin.bind(this);
    this.saveData = this.saveData.bind(this);
    this.returnBack = this.returnBack.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.onFinishAllExercise = this.onFinishAllExercise.bind(this);
    this.onPlayVideo = this.onPlayVideo.bind(this);
    this.onPauseVideo = this.onPauseVideo.bind(this);
  }

  componentDidMount() {
    if (this.props.renderExercises.length === 0) {
      window.location.href = `#/workout/daily/${sessionStorage.dayInWeek}`;
      return;
    }
    if (this.props.renderExercises[this.props.match.params.exerciseOrder - 1].day !== undefined) {
      window.location.href = `#/workout/daily/${sessionStorage.dayInWeek}`;
      return;
    }
    const thisExerciseDetail = this.props.renderExercises[this.props.match.params.exerciseOrder - 1];
    const queryName = `${thisExerciseDetail.id}${`${thisExerciseDetail.name}`}`;
    this.props.finishExercisePageQuery(true);
    this.props.getExerciseDetail({ exeLength: this.props.renderExercises.length });
    this.props.getThisExerciseHistory(this.props.match.params.exerciseOrder);
    this.props.getYoutubeLink(queryName);
    this.setState({ reps: !/^[0-9]*$/.test(this.props.renderExercises[this.props.match.params.exerciseOrder - 1].reps) ? 1 : 1 * this.props.renderExercises[this.props.match.params.exerciseOrder - 1].reps });
  }

  componentDidUpdate(pre) {
    const thisExerciseDetail = this.props.renderExercises[this.props.match.params.exerciseOrder - 1];
    if (!thisExerciseDetail || thisExerciseDetail.day !== undefined) {
      window.location.href = `#/workout/daily/${sessionStorage.dayInWeek}`;
    }
    if (pre.match.params.exerciseOrder !== this.props.match.params.exerciseOrder) {
      this.props.getThisExerciseHistory(this.props.match.params.exerciseOrder);
      this.setState({ reps: !/^[0-9]*$/.test(this.props.renderExercises[this.props.match.params.exerciseOrder - 1].reps) ? 1 : 1 * this.props.renderExercises[this.props.match.params.exerciseOrder - 1].reps });
    }
  }

  onPlayVideo() {
    this.setState({ playing: true });
  }

  onPauseVideo() {
    this.setState({ playing: false });
  }

  onClose(input) {
    this.setState({ [input]: false });
  }

  onOpen(input) {
    this.setState({ [input]: true });
  }

  returnBack() {
    this.props.history.goBack();
  }

  weightAdd() {
    this.setState(add('weight'));
  }

  weightMin() {
    this.setState(min('weight'));
  }

  repsAdd() {
    this.setState(add('reps'));
  }

  repsMin() {
    this.setState(min('reps'));
  }

  saveData() {
    const { exerciseOrder } = this.props.match.params;
    const showedExercises = this.props.todayExercises[`exe_${exerciseOrder}`];
    let result = '';
    const model = this.props.renderExercises[exerciseOrder - 1].progression_model;
    const wei = model.toUpperCase().includes('LINEAR') || model.toUpperCase().includes('DOUBLE');
    console.log('weight values', wei);
    if (!wei) {
      result = showedExercises ? `${showedExercises};(${this.state.reps})` : `(${this.state.reps})`;
    } else {
      result = showedExercises ? `${showedExercises};(${this.state.reps},${this.state.weight})` : `(${this.state.reps},${this.state.weight})`;
    }
    // const m = { ...this.props.todayExercises, [`exe_${exerciseOrder}`]: result };
    this.props.finishExercisePageQuery(true);
    this.props.updataOneExercise({ exeNum: exerciseOrder, exeData: result }, this.props.historyForSpecificExercise);
    // this.props.setTodayExercises(m);
  }

  onFinishAllExercise() {
    const a = this.props.todayExercises;
    const b = [...this.props.renderExercises];
    const finish = b.some((item, k) => (item.sets * 1) > a[`exe_${k + 1}`].split(';').length);
    if (!finish) {
      this.props.finishAllDailyExercises();
      window.location.hash = '#/workout';
    }
  }

  render() {
    const {
      classes, theme, renderExercises, alldayExercises, exercisePageQuery, todayExercises, historyForSpecificExercise, getYoutubeLink, youtubeLink, youtubeDis,
    } = this.props;
    const {
      weight, reps, youtube, title, history, playing,
    } = this.state;
    const { exerciseOrder } = this.props.match.params;
    const showedExercises = todayExercises[`exe_${exerciseOrder}`] || '';
    const a = showedExercises.split(';');

    // check product value, assign champion cup to the largest one
    let largest = 0;
    const res = a[0] !== '' && [...[...a].map((v) => {
      const b = [...v.substring(1, v.length - 1).split(',')];
      const product = b.length > 1 ? 1 * b[0] * b[1] : 1 * b[0];
      if (product > largest) {
        largest = product;
      }
      console.log('check weight value', weight);
      return ({ reps: b[0], weight: b.length > 1 ? b[1] : null });
    })];
    const thisExerciseDetail = renderExercises[exerciseOrder - 1] || {};
    const imageId = thisExerciseDetail.id;
    const finishCurrentExercise = thisExerciseDetail && (res.length >= thisExerciseDetail.sets * 1);
    const select = [
      {
        label: 'weight',
        min: this.weightMin,
        add: this.weightAdd,
        value: weight,
      }, {
        label: 'reps',
        min: this.repsMin,
        add: this.repsAdd,
        value: reps,
      },
    ];

    return (
      <MainComponent
        backgroundImage={theme.workoutHeader.exercises}
        title="Workout"
        progress={this.props.progress}
        currentWeek={this.props.currentWeek}
        currentPage={3}
        FooterContent={1}
        tapBarContent={false}
        midComponent={(
          <Grid container style={{ flex: 1 }} direction="column" justify="center" alignContent="space-between" alignItems="center">
            <LoadingComponent
              open={exercisePageQuery}
            />
            <Grid container item direction="column" alignContent="space-between" alignItems="center">
              <AppBar position="static" style={{ backgroundColor: theme.appBar.backgroundColor }}>
                <Toolbar style={{ justifyContent: 'space-between' }}>
                  <IconButton className={classes.menuButton} onClick={this.returnBack} color="primary" aria-label="Menu">
                    <LeftIcon style={{ fontSize: '30px' }} />
                  </IconButton>
                  <Typography className={classes.grow} style={{ fontSize: 'x-small' }} color="primary">{thisExerciseDetail ? thisExerciseDetail.name : 'title'}</Typography>
                  <div style={{ minHeight: '56px', minWidth: '56px' }}>
                    <SpeedDialTooltipOpen right primary />
                  </div>
                </Toolbar>
              </AppBar>
            </Grid>

            <ExerciseComponent
              step={10}
              thisExerciseDetail={thisExerciseDetail}
              select={select}
              ExList={res}
              largest={largest}
              onSaveClick={this.saveData}
              youtbueID={youtubeLink}
              onOpen={this.onOpen}
              onClose={this.onClose}
              youtubeOpenStatus={youtube}
              title={title}
              history={history}
              youtubeDiscription={youtubeDis}
              currentExerciseOrder={exerciseOrder}
              finishCurrentExercise={finishCurrentExercise}
              onFinishAllExercise={this.onFinishAllExercise}
              dailyExerciseLength={renderExercises.length}
              historyForSpecificExercise={historyForSpecificExercise}
              getThisExerciseHistory={getThisExerciseHistory}
              getYoutubeLink={getYoutubeLink}
              onReady={this.onReady}
              onPlayVideo={this.onPlayVideo}
              onPauseVideo={this.onPauseVideo}
              playing={playing}
            />

          </Grid>
        )}
      />
    );
  }
}

function mapStateToProps(state) {
  const {
    renderExercises, alldayExercises, exercisePageQuery, todayExercises, historyForSpecificExercise, youtubeLink, youtubeDis,
  } = state.Workout;
  return {
    renderExercises, alldayExercises, exercisePageQuery, todayExercises, historyForSpecificExercise, youtubeLink, youtubeDis,
  };
}

ExerciseIndex.propTypes = {
  classes: PropTypes.object.isRequired,
  progress: PropTypes.object,
  currentWeek: PropTypes.number,
};

export default connect(mapStateToProps, {
  getExerciseDetail,
  setAllDayExercises,
  selectExercise,
  setTodayExercises,
  finishExercisePageQuery,
  updataOneExercise,
  finishAllDailyExercises,
  getThisExerciseHistory,
  getYoutubeLink,
})(withStyles(styles, { withTheme: true })(ExerciseIndex));
