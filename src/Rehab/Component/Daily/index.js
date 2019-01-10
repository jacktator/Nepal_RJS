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
  getDailyRehab, getPosture, getInjury, createNewRehab, showQuestionnaireForCreate, finishQuerryDailyData, destructure,
} from '../../actions';
import Dialog from '../../../HOC/Dialog';
import Questionnaire from './questionnaire';
import Loading from '../../../HOC/Loading';
import Stepper from './stepper';

const tapBarContent = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

class MainRehab extends React.PureComponent {
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
      renderExercise: [],
      dialogData: [],
      dialogIndex: 0,
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
  }

  componentDidMount() {
    this.setState({ currentWeek: new Date().getUTCDay() - 1 });
    this.props.finishQuerryDailyData(true);
    this.props.getDailyRehab(new Date().getUTCDay() - 1);
  }

  handleChangeDialogNext() {
    this.setState(sta => ({ exerciseSelected: sta.exerciseSelected + 1 }));
  }

  handleChangeDialogBack() {
    this.setState(sta => ({ exerciseSelected: sta.exerciseSelected - 1 }));
  }

  handleOpenChangeDialog(data) {
    this.setState({ dialogData: data });
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
        user_id: 4,
      },
    );
    this.props.showQuestionnaireForCreate(false);
  }

  handleSelectChange(event) {
    console.log(event.target.value);
    console.log(this.state[`${event.target.name}Selected`]);
    this.setState({ [`${event.target.name}Selected`]: event.target.value });
  }

  midPartTabsValueHandleChange(event, value) {
    this.setState({ midPartTabsValue: value });
  }

  setRenderExercisesState(day) {
    const s = this.props.selectedRehabExercises;
    const a = destructure(s[`day${day}`]);
  }

  keepRenderExercisesState() {
    const a = Object.assign({}, JSON.parse(JSON.stringify(this.state.dialogData[this.state.exerciseSelected])));
    this.setState({ renderExercise: a, showChangeDialog: false });
  }

  render() {
    const {
      classes, showCreationQuestionnaire, querryCreating, querryDailyData, posture, injury,
    } = this.props;
    console.log(posture, injury);
    const {
      currentWeek, midPartTabsValue, showDiscription, title, injurySelected,
      postureSelected, exerciseSelected, dialogData, showChangeDialog, renderExercise,
    } = this.state;
    return (
      <MainComponent
        top
        backgroundImage="https://nepal.sk8tech.io/wp-content/uploads/2019/01/sampleImage.jpeg"
        title="Rehab"
        currentWeek={currentWeek}
        currentPage={1}
        FooterContent={3}
        onTagClick={this.midPartTabsValueHandleChange}
        tabsValue={midPartTabsValue}
        showBottomButton
        tapBarContent={tapBarContent}
        midComponent={(
          <Grid container style={{ flex: 1 }} justify="center" alignContent="space-around" alignItems="center">
            <Paper className={classes.midPaper} elevation={8}>
              <Loading
                open={querryDailyData}
              />
              <Dialog
                open={showChangeDialog}
                loadingStatus={false}
                title="Select your Exercise"
                discription=""
                handleClose={this.handleCloseChangeDialog}
                other
                otherClickFunction={this.keepRenderExercisesState}
                media={(
                  <Stepper
                    handleNext={this.handleChangeDialogNext}
                    handleBack={this.handleChangeDialogBack}
                    selected={exerciseSelected}
                    data={dialogData}
                  />
                )}
              />
              <Dialog
                open={showDiscription}
                loadingStatus={false}
                title={title}
                discription=""
                handleClose={this.handleDiscriptionClickClose}
              />
              <Dialog
                open={showCreationQuestionnaire}
                loadingStatus={querryCreating}
                handleClose={this.handleQuestionnaireClose}
                title="Rehab Questionnaire"
                discription=""
                other
                otherClickFunction={this.handleFinishQuestionnaireClick}
                media={(
                  <Questionnaire
                    handleClickOpen={this.handleClickDiscriptionOpen}
                    handleSelectChange={this.handleSelectChange}
                    injury={injurySelected}
                    posture={postureSelected}
                  />
                )}
              />

              <Component
                injury="Injury"
                posture="Posture"
                injuryExes={injury}
                postureExes={posture}
                openDialog={this.handleOpenChangeDialog}
                renderExercise={renderExercise}
              />
            </Paper>
          </Grid>
          )}
      />
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
    posture, injury, showCreationQuestionnaire, querryCreating, querryDailyData, selectedRehabExercises,
  } = state.Rehab;
  return {
    posture, injury, showCreationQuestionnaire, querryCreating, querryDailyData, selectedRehabExercises,
  };
}
export default connect(mapStateToProps, {
  getDailyRehab, getPosture, getInjury, createNewRehab, showQuestionnaireForCreate, finishQuerryDailyData,
})(withStyles(styles)(MainRehab));
