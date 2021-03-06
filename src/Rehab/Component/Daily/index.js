import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import Component from './component';
import MainComponent from '../../../HOC/PageStructure';
import { styles } from '../../styles';
import {
  getDailyRehab, getPosture, getInjury, createNewRehab,
  showQuestionnaireForCreate, finishQuerryDailyData, destructure,
  keepExercise, setRehabExercisesRecordsByDay, setRenderExercises,
} from '../../actions';
import Dialog from '../../../HOC/Dialog';
import Loading from '../../../HOC/Loading';
import Stepper from './stepper';
import { rehabProgramme } from '../../../config';
import RestartDialog from '../../../HOC/reStartDialog';

const tapBarContent = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

class MainRehab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      midPartTabsValue: 0,
      currentWeek: 0,
      injurySelected: 0,
      postureSelected: 0,
      showDiscription: false,
      title: '',
      showChangeDialog: false,
      exerciseSelected: 0,
      dialogData: [],
      dialogIndex: 0,
      ExList: [],
    };
    this.midPartTabsValueHandleChange = this.midPartTabsValueHandleChange.bind(this);
    this.handleQuestionnaireClose = this.handleQuestionnaireClose.bind(this);
    this.handleClickDiscriptionOpen = this.handleClickDiscriptionOpen.bind(this);
    this.handleDiscriptionClickClose = this.handleDiscriptionClickClose.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleFinishQuestionnaireClick = this.handleFinishQuestionnaireClick.bind(this);
    this.handleCloseChangeDialog = this.handleCloseChangeDialog.bind(this);
    this.handleOpenChangeDialog = this.handleOpenChangeDialog.bind(this);
    this.handleChangeDialogNext = this.handleChangeDialogNext.bind(this);
    this.handleChangeDialogBack = this.handleChangeDialogBack.bind(this);
    this.keepRenderExercisesState = this.keepRenderExercisesState.bind(this);
    this.setRenderExercisesState = this.setRenderExercisesState.bind(this);
    this.keepExerciseFetch = this.keepExerciseFetch.bind(this);
    this.setRenderExercisesRecord = this.setRenderExercisesRecord.bind(this);
    this.handleRestartChange = this.handleRestartChange.bind(this);
    this.handleRestartBlur = this.handleRestartBlur.bind(this);
    this.handleRestartOpen = this.handleRestartOpen.bind(this);
  }

  componentDidMount() {
    const nowDay = new Date().getDay();
    this.setState({ currentWeek: nowDay + 1, midPartTabsValue: nowDay });
    this.props.finishQuerryDailyData(true);
    this.props.getDailyRehab(nowDay);
    this.setRenderExercisesState();
  }

  componentDidUpdate(prevProps, prevState) {
    if ((this.state.midPartTabsValue !== prevState.midPartTabsValue) || (this.props.selectedRehabExercises !== prevProps.selectedRehabExercises)) {
      this.setRenderExercisesState();
      this.setRenderExercisesRecord();
    }
    if (new Date().getDate - new Date(this.props.selectedRehabExercises.date).getDate >= 7) {
      this.props.showQuestionnaireForCreate(true);
    }
  }

  handleChangeDialogNext() {
    this.setState(sta => ({ exerciseSelected: sta.exerciseSelected + 1 }));
  }

  handleChangeDialogBack() {
    this.setState(sta => ({ exerciseSelected: sta.exerciseSelected - 1 }));
  }

  handleOpenChangeDialog(data, index) {
    this.setState({ dialogData: data });
    this.setState({ dialogIndex: index });
    this.setState({ showChangeDialog: true });
  }

  handleCloseChangeDialog() {
    this.setState({ showChangeDialog: false });
  }

  handleQuestionnaireClose() {
    this.props.showQuestionnaireForCreate(false);
  }

  handleClickDiscriptionOpen(content) {
    this.setState({ showDiscription: true, title: content.title });
  }

  handleDiscriptionClickClose() {
    this.setState({ showDiscription: false });
  }

  handleFinishQuestionnaireClick() {
    this.props.createNewRehab(
      {
        posture: this.state.postureSelected * 1 - 1,
        injury: this.state.injurySelected * 1 - 1,
      },
      () => { window.location.reload(true); },
    );
    this.props.finishQuerryDailyData(true);
    this.props.showQuestionnaireForCreate(false);
  }

  handleSelectChange(event) {
    this.setState({ [`${event.target.name}Selected`]: event.target.value });
  }

  midPartTabsValueHandleChange(event, value) {
    this.setState({ midPartTabsValue: value });
  }


  setRenderExercisesState() {
    const { acf } = this.props.selectedRehabExercises;
    const s = acf && acf[`day${this.state.midPartTabsValue}`];
    if (s === undefined || s === '') {
      this.props.setRenderExercises([]);
      return;
    }
    const a = destructure(s);
    this.props.setRenderExercises(a);
  }

  keepRenderExercisesState() {
    const a = Object.assign({},
      JSON.parse(JSON.stringify(this.state.dialogData[this.state.exerciseSelected])));
    const m = [].concat(JSON.parse(JSON.stringify(this.props.renderExercises)));
    m[this.state.dialogIndex] = a;
    this.props.setRenderExercises(m);
    this.setState({ showChangeDialog: false });
    this.setState({ exerciseSelected: 0 });
  }

  keepExerciseFetch(id) {
    if (!this.props.renderExercises[id]) {
      this.handleClickDiscriptionOpen({ title: 'You need to select one of exercises before you keeping it' });
      return;
    }
    this.props.finishQuerryDailyData(true);
    this.props.keepExercise(this.props.renderExercises);
  }

  setRenderExercisesRecord() {
    const data = this.props.rehabExercisesRecorded;
    const m = [...data].find(v => v.progress === `${this.state.midPartTabsValue}`);
    this.props.setRehabExercisesRecordsByDay(m || {
      id: this.state.midPartTabsValue,
      progress: this.state.midPartTabsValue,
      data: [],
    });
  }

  handleRestartBlur() {
    this.setState({ restartDialog: false });
  }

  handleRestartOpen() {
    this.setState({ restartDialog: true });
  }

  handleRestartChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }


  render() {
    const {
      classes, theme, showCreationQuestionnaire, querryCreating,
      querryDailyData, posture, injury, renderExercises, showQuestionnaireForCreate,
    } = this.props;
    const { acf } = this.props.selectedRehabExercises;
    const postureName = acf && acf.posture;
    const injuryName = acf && acf.injury;
    const {
      currentWeek, midPartTabsValue, showDiscription, title, injurySelected, ExList,
      postureSelected, exerciseSelected, dialogData, showChangeDialog, dialogIndex,
    } = this.state;
    return (
    <>
      <RestartDialog
        rehabS
        title="Rehab"
        rehab={injurySelected}
        posture={postureSelected}
        open={showCreationQuestionnaire}
        handleChange={this.handleSelectChange}
        handleClose={this.handleQuestionnaireClose}
        handleRestartSave={this.handleFinishQuestionnaireClick}
      />
      <MainComponent
        top
        planPage
        title="Rehab"
        currentPage={3}
        showBottomButton
        FooterContent={3}
        currentWeek={currentWeek}
        tabsValue={midPartTabsValue}
        tapBarContent={tapBarContent}
        backgroundImage={theme.rehabHeader.daily}
        onTagClick={this.midPartTabsValueHandleChange}
        restartClick={() => showQuestionnaireForCreate(true)}
        midComponent={(
          <Grid container className={classes.midPaper} style={{ flex: 1 }} justify="center" alignContent="space-around" alignItems="center">
            <Loading
              open={querryDailyData}
            />
            <Dialog
              other
              picture
              discription=""
              loadingStatus={false}
              open={showChangeDialog}
              title="Select your Exercise"
              handleClose={this.handleCloseChangeDialog}
              otherClickFunction={this.keepRenderExercisesState}
              media={(
                <Stepper
                  data={dialogData}
                  injuryName={injuryName}
                  postureName={postureName}
                  dialogIndex={dialogIndex}
                  selected={exerciseSelected}
                  handleNext={this.handleChangeDialogNext}
                  handleBack={this.handleChangeDialogBack}
                />
                )}
            />
            <Dialog
              title=""
              discription={title}
              loadingStatus={false}
              open={showDiscription}
              handleClose={this.handleDiscriptionClickClose}
            />


            <Component
              ExList={ExList}
              injuryExes={injury}
              postureExes={posture}
              injuryName={injuryName}
              postureName={postureName}
              progress={midPartTabsValue}
              renderExercise={renderExercises}
              keepExercise={this.keepExerciseFetch}
              openDialog={this.handleOpenChangeDialog}
              pre={midPartTabsValue < new Date().getDay()}
              injury={`${rehabProgramme.injury[injuryName]}`.split('_').map(v => (`${v[0]}`).toUpperCase() + v.substring(1)).join(' ')}
              posture={`${rehabProgramme.posture[postureName]}`.split('_').map(v => (`${v[0]}`).toUpperCase() + v.substring(1)).join(' ')}
            />
          </Grid>
          )}
      />
      </>
    );
  }
}

MainRehab.propTypes = {
  classes: PropTypes.object.isRequired,
  progress: PropTypes.object,
  currentWeek: PropTypes.number,
};

function mapStateToProps(state) {
  const {
    posture, injury, showCreationQuestionnaire, querryCreating,
    querryDailyData, selectedRehabExercises, rehabExercisesRecorded, renderExercises,
  } = state.Rehab;
  return {
    posture,
    injury,
    showCreationQuestionnaire,
    querryCreating,
    querryDailyData,
    selectedRehabExercises,
    rehabExercisesRecorded,
    renderExercises,
  };
}
export default connect(mapStateToProps, {
  getDailyRehab,
  getPosture,
  getInjury,
  createNewRehab,
  showQuestionnaireForCreate,
  finishQuerryDailyData,
  keepExercise,
  setRehabExercisesRecordsByDay,
  setRenderExercises,
})(withStyles(styles, { withTheme: true })(MainRehab));
