import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Component from './component';
import MainComponent from '../../../HOC/PageStructure';
import { styles } from '../../styles';
import {
  getCurrentProgram, finishQuery, selectDailyQuestionnaire, noProgram, compareOver24, restartProgramme,
} from '../../action';
import LoadingComponent from '../../../HOC/Loading';
import Dialog from '../../../HOC/Dialog';
import RestartDialog from '../../../HOC/reStartDialog';
import { second } from '../../../Questionnaire/Component/contentData';

const tapBarContent = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];
const refresh = () => {
  window.location.reload();
};

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyQuestionnaireOpen: false,
      questionnaireSelected: 0,
      tabsValue: 0,
      over24Open: false,
      restartDialog: false,
      queLocation: 'home',
      queDays: '',
      queGoal: '',
    };
    this.onTagClick = this.onTagClick.bind(this);
    this.handleOver24Blur = this.handleOver24Blur.bind(this);
    this.handleOver24Open = this.handleOver24Open.bind(this);
    this.handleRestartBlur = this.handleRestartBlur.bind(this);
    this.handleRestartOpen = this.handleRestartOpen.bind(this);
    this.handleRestartSave = this.handleRestartSave.bind(this);
    this.selectQuestionnaire = this.selectQuestionnaire.bind(this);
    this.handleRestartChange = this.handleRestartChange.bind(this);
    this.handleQuestionnaireBlur = this.handleQuestionnaireBlur.bind(this);
    this.handleQuestionnaireOpen = this.handleQuestionnaireOpen.bind(this);
    this.handleQuestionnaireClose = this.handleQuestionnaireClose.bind(this);
    this.midPartTabsValueHandleChange = this.midPartTabsValueHandleChange.bind(this);
  }

  componentDidMount() {
    this.props.finishQuery(true);
    this.props.getCurrentProgram();
    console.log(this.props.match);
    console.log(window.history.state);
    if (window.history.state && window.history.state.from === 'daily') {
      this.setState({ over24Open: true });
      window.history.pushState(null, null);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.directToQuestionnaire) {
      window.location.hash = '#/questionnaire';
      this.props.noProgram(false);
    }
    if (prevProps.programQuery !== this.props.programQuery) {
      this.setState({ tabsValue: Math.ceil(sessionStorage.progress / sessionStorage.days) - 1 });
    }
  }

  midPartTabsValueHandleChange(event, value) {
    this.setState({ midPartTabsValue: value });
  }

  handleQuestionnaireClose() {
    const m = sessionStorage.feedback_value;
    const n = `${m}`.split(',');
    n[sessionStorage.dayInWeek * 1 - 1] = this.state.questionnaireSelected;
    const s = n.join(',');
    this.props.selectDailyQuestionnaire(s, refresh);
    this.setState({ dailyQuestionnaireOpen: false });
  }

  handleQuestionnaireBlur() {
    this.setState({ dailyQuestionnaireOpen: false });
  }

  handleQuestionnaireOpen() {
    this.setState({ dailyQuestionnaireOpen: true });
  }

  handleOver24Blur() {
    this.setState({ over24Open: false });
  }

  handleOver24Open() {
    this.setState({ over24Open: true });
  }

  handleRestartBlur() {
    this.setState({ restartDialog: false });
  }

  handleRestartOpen() {
    this.setState({ restartDialog: true });
  }

  handleRestartSave() {
    const { queLocation, queDays, queGoal } = this.state;
    const { path } = second[queLocation].find(v => v.id === (1 * queGoal));
    this.handleRestartBlur();
    this.props.finishQuery(true);
    this.props.restartProgramme({ location: queLocation, path, days: queDays }, () => { this.props.finishQuery(false); window.location.reload(true); });
  }

  selectQuestionnaire(event) {
    this.setState({ questionnaireSelected: event.target.value });
  }

  onTagClick(event, value) {
    this.setState({ tabsValue: value });
  }

  handleRestartChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const {
      classes, programQuery, theme,
    } = this.props;
    const {
      dailyQuestionnaireOpen, restartDialog, questionnaireSelected, tabsValue, over24Open, queLocation, queDays, queGoal,
    } = this.state;
    const {
      progress, days, path, finish_for_day,
    } = sessionStorage;
    const finish = !!finish_for_day && JSON.parse(finish_for_day);
    const currentWeek = Math.ceil(progress / days);
    const showTitle = `${path}`.split(/(?=[A-Z])/).join(' ');
    return (
      <div>
        <LoadingComponent open={programQuery} />
        <RestartDialog
          workoutS
          title="Workout"
          goal={queGoal}
          days={queDays}
          open={restartDialog}
          location={queLocation}
          handleChange={this.handleRestartChange}
          handleClose={this.handleRestartBlur}
          handleRestartSave={this.handleRestartSave}
        />
        <Dialog
          title=""
          open={over24Open}
          loadingStatus={false}
          handleClose={this.handleOver24Blur}
          discription="You need to waiting for next day"
        />
        <Dialog
          other
          title="Feedback"
          loadingStatus={false}
          open={dailyQuestionnaireOpen}
          handleClose={this.handleQuestionnaireBlur}
          discription="How do you feel of today's exercises"
          otherClickFunction={this.handleQuestionnaireClose}
          media={
            (
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="feedback"
                  name="feedback"
                  value={questionnaireSelected}
                  onChange={this.selectQuestionnaire}
                >
                  <FormControlLabel value="0" control={<Radio color="primary" />} label="Too hard" />
                  <FormControlLabel value="1" control={<Radio color="primary" />} label="Just right" />
                  <FormControlLabel value="2" control={<Radio color="primary" />} label="Too easy" />
                  <FormControlLabel value="3" control={<Radio color="primary" />} label="Did not complete" />
                </RadioGroup>
              </FormControl>
            )
          }
        />
        <MainComponent
          top
          planPage
          topDiscription
          currentPage={2}
          FooterContent={1}
          tabsValue={tabsValue}
          progress={progress || 1}
          currentWeek={currentWeek}
          onTagClick={this.onTagClick}
          tapBarContent={tapBarContent}
          title={showTitle || 'Workout'}
          restartClick={this.handleRestartOpen}
          backgroundImage={theme.workoutHeader.plan}
          midComponent={(
            <Grid container style={{ flex: 1 }} justify="center" alignContent="space-around" alignItems="flex-start">
              <Component
                days={days * 1}
                currentWeek={tabsValue}
                progress={progress}
                handleQuestionnaireOpen={this.handleQuestionnaireOpen}
                finish={finish}
                showTitle={showTitle}
                over24={sessionStorage.workoutUpdateDate === 'begin' ? true : compareOver24(sessionStorage.workoutUpdateDate)}
                handleOver24Open={this.handleOver24Open}
              />
            </Grid>
        )}
        />

      </div>
    );
  }
}

function mapStateToProps(state) {
  const { programQuery, directToQuestionnaire } = state.Workout;
  return {
    programQuery, directToQuestionnaire,
  };
}

index.propTypes = {
  classes: PropTypes.object.isRequired,
  progress: PropTypes.object,
  currentWeek: PropTypes.number,
};

export default connect(mapStateToProps, {
  getCurrentProgram, finishQuery, selectDailyQuestionnaire, noProgram, restartProgramme,
})(withStyles(styles, { withTheme: true })(index));
