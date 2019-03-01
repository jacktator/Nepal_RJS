import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';
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
import {
  setRehabExercisesRecordsByDay, updateRehabRecord,
  finishAllRehab, finishExerciseSaveQuery, getYoutubeLink,
} from '../../actions';
import Loading from '../../../HOC/Loading';

class ExerciseIndex extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      exe: {},
      shortPlayer: null,
      youtube: false,
      title: 'youtube',
      playing: true,
    };
    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
    this.returnBack = this.returnBack.bind(this);
    this.onPlayVideo = this.onPlayVideo.bind(this);
    this.onPauseVideo = this.onPauseVideo.bind(this);
    this.handleFinishAllRehab = this.handleFinishAllRehab.bind(this);
    this.handleGetYoutubeLink = this.handleGetYoutubeLink.bind(this);
    this.handleSaveButtonClicked = this.handleSaveButtonClicked.bind(this);
    this.dealRenderExerciseRecord = this.dealRenderExerciseRecord.bind(this);
  }

  componentDidMount() {
    const exeOrder = this.props.match.params.exerciseOrder;
    const exe = this.props.renderExercises[exeOrder];
    const prefix = exeOrder < 4 ? 'injury' : 'posture';
    const queryName = `${prefix} ${this.props.selectedRehabExercises.acf[prefix]} ${exe.name}`;
    this.props.getYoutubeLink(queryName);
  }

  componentDidUpdate(prevProps) {
    if (!this.props.match.params.exerciseOrder) {
      window.location.href = '/rehab/content';
    }
    if (this.props.match.params.exerciseOrder >= this.props.renderExercises.length) {
      window.location.href = '/rehab/content';
    }
    if (!!this.props.match.params.exerciseOrder && prevProps.match.params.exerciseOrder !== this.props.match.params.exerciseOrder) {
      this.handleGetYoutubeLink();
    }
  }

  onClose(input) {
    this.setState({ [input]: false });
  }

  onOpen(input) {
    this.setState({ [input]: true });
  }

  onPlayVideo() {
    this.setState({ playing: true });
  }

  onPauseVideo() {
    this.setState({ playing: false });
  }

  handleSaveButtonClicked() {
    const m = JSON.parse(JSON.stringify([...this.props.dayRehabExercisesRecords.data]));
    const itemID = this.props.match.params.exerciseOrder;
    const exe = this.props.renderExercises[itemID];
    const {
      name, reps, sets, time,
    } = exe;
    if (m[itemID] && m[itemID].length >= sets * 1) {
      return;
    }
    const thisExerciseDetail = { name, sets, reps: reps === 'empty' ? time : reps };
    !m[itemID] ? m[itemID] = `${thisExerciseDetail.reps}` : m[itemID] = `${m[itemID].join(',')},${thisExerciseDetail.reps}`;
    const result = m.join(';');
    this.props.finishExerciseSaveQuery(true);
    this.props.updateRehabRecord(result);
  }

  handleFinishAllRehab() {
    this.props.finishAllRehab();
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


  handleGetYoutubeLink() {
    const exeOrder = this.props.match.params.exerciseOrder;
    const prefix = exeOrder < 4 ? 'injury' : 'posture';
    const imageLink = `${prefix} ${this.props.selectedRehabExercises.acf[prefix]}`;
    this.props.getYoutubeLink(imageLink);
  }

  render() {
    const {
      theme, currentWeek, dayRehabExercisesRecords, posture, injury,
      rehabExerciseQuery, rehabYoutubeLink, rehubYoutubeDis,
    } = this.props;
    const tstyles = styles(theme);
    const exeOrder = this.props.match.params.exerciseOrder;
    const exe = this.props.renderExercises[exeOrder];
    const { title, youtube, playing } = this.state;
    const {
      name, reps, sets, time,
    } = exe || {
      name: '', reps: '', sets: '', time: '',
    };
    const thisExerciseDetail = {
      name, sets, reps: reps === 'empty' ? time : reps, time: reps === 'empty',
    };
    const mmm = dayRehabExercisesRecords.data || [];
    const ExList = mmm.length !== 0 ? mmm[exeOrder] ? mmm[exeOrder].map(v => ({ reps: v })) : [] : [];
    const exerLength = (posture instanceof Array) ? ((injury instanceof Array) ? 0 : 4) : ((injury instanceof Array) ? 4 : 8);
    return (
      <>
        <Loading
          open={rehabExerciseQuery}
        />
        <MainComponent
          title="Rehab"
          currentPage={3}
          FooterContent={2}
          progress={exeOrder}
          tapBarContent={false}
          currentWeek={currentWeek}
          backgroundImage={theme.rehabHeader.exercises}
          midComponent={(
            <Grid container style={{ flex: 1 }} direction="column" justify="center" alignContent="space-between" alignItems="center">

              <Grid container item direction="column" alignContent="space-between" alignItems="center">
                <AppBar position="static" style={{ backgroundColor: theme.appBar.backgroundColor }}>
                  <Toolbar style={{ justifyContent: 'space-between' }}>
                    <IconButton className={tstyles.menuButton} onClick={this.returnBack} color="primary" aria-label="Menu">
                      <LeftIcon style={{ fontSize: '30px' }} />
                    </IconButton>
                    <Typography className={tstyles.grow} variant="h6" color="primary">{thisExerciseDetail.name}</Typography>
                    <div style={{ minHeight: '56px', minWidth: '56px' }}>
                      <SpeedDialTooltipOpen right primary />
                    </div>
                  </Toolbar>
                </AppBar>
              </Grid>

              <ExerciseComponent
                rehab
                step={10}
                title={title}
                ExList={ExList}
                playing={playing}
                onOpen={this.onOpen}
                onClose={this.onClose}
                youtubeOpenStatus={youtube}
                youtbueID={rehabYoutubeLink}
                onPlayVideo={this.onPlayVideo}
                currentExerciseOrder={exeOrder}
                dailyExerciseLength={exerLength}
                onPauseVideo={this.onPauseVideo}
                getYoutubeLink={this.getYoutubeLink}
                youtubeDiscription={rehubYoutubeDis}
                thisExerciseDetail={thisExerciseDetail}
                onSaveClick={this.handleSaveButtonClicked}
                onFinishAllExercise={this.handleFinishAllRehab}
                finishCurrentExercise={thisExerciseDetail.sets <= ExList.length}
              />

            </Grid>
        )}
        />
      </>
    );
  }
}

ExerciseIndex.propTypes = {
  progress: PropTypes.object,
  currentWeek: PropTypes.number,
};

function mapStateToProps(state) {
  const {
    dayRehabExercisesRecords, renderExercises, posture,
    injury, rehabExerciseQuery, selectedRehabExercises, rehabYoutubeLink, rehubYoutubeDis,
  } = state.Rehab;
  return {
    dayRehabExercisesRecords,
    renderExercises,
    posture,
    injury,
    rehabExerciseQuery,
    selectedRehabExercises,
    rehabYoutubeLink,
    rehubYoutubeDis,
  };
}


export default connect(mapStateToProps, {
  setRehabExercisesRecordsByDay, updateRehabRecord, finishAllRehab, finishExerciseSaveQuery, getYoutubeLink,
})(withTheme()(ExerciseIndex));

// || {
//  name: 'rehab', reps: '20', sets: '3', time: '10s',
// };
