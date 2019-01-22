import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Component from './component';
import MainComponent from '../../../HOC/PageStructure';
import { styles } from '../../styles';
import {
  getCurrentProgram, finishQuery, selectDailyQuestionnaire, noProgram,
} from '../../action';
import LoadingComponent from '../../../HOC/Loading';
import Dialog from '../../../HOC/Dialog';

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
    };
    this.midPartTabsValueHandleChange = this.midPartTabsValueHandleChange.bind(this);
    this.handleQuestionnaireOpen = this.handleQuestionnaireOpen.bind(this);
    this.handleQuestionnaireClose = this.handleQuestionnaireClose.bind(this);
    this.selectQuestionnaire = this.selectQuestionnaire.bind(this);
    this.handleQuestionnaireBlur = this.handleQuestionnaireBlur.bind(this);
    this.onTagClick = this.onTagClick.bind(this);
    this.handleOver24Blur = this.handleOver24Blur.bind(this);
    this.handleOver24Open = this.handleOver24Open.bind(this);
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

  selectQuestionnaire(event) {
    this.setState({ questionnaireSelected: event.target.value });
  }

  onTagClick(event, value) {
    this.setState({ tabsValue: value });
  }

  render() {
    const {
      classes, programQuery,
    } = this.props;
    const {
      dailyQuestionnaireOpen, questionnaireSelected, tabsValue, over24Open,
    } = this.state;
    const {
      progress, days, path, finish_for_day,
    } = sessionStorage;
    const finish = !!finish_for_day && JSON.parse(finish_for_day);
    const currentWeek = Math.ceil(progress / days);
    console.log(new Date().getDay() - new Date(sessionStorage.workoutUpdateDate).getDay());
    console.log(new Date().getDay());
    console.log(new Date(sessionStorage.workoutUpdateDate).getDay());
    return (
      <div>
        <LoadingComponent open={programQuery} />
        <Dialog
          open={over24Open}
          loadingStatus={false}
          title=""
          discription="You need to waiting for next day"
          handleClose={this.handleOver24Blur}
        />
        <Dialog
          open={dailyQuestionnaireOpen}
          loadingStatus={false}
          handleClose={this.handleQuestionnaireBlur}
          other
          otherClickFunction={this.handleQuestionnaireClose}
          title="Feedback"
          discription="How do you feel of today's exercises"
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
          topDiscription
          backgroundImage="https://nepal.sk8tech.io/wp-content/uploads/2019/01/sampleImage.jpeg"
          title={path || 'Workout'}
          progress={progress || 1}
          currentWeek={currentWeek}
          tabsValue={tabsValue}
          currentPage={2}
          FooterContent={1}
          onTagClick={this.onTagClick}
          tapBarContent={tapBarContent}
          midComponent={(
            <Grid container style={{ flex: 1 }} justify="center" alignContent="space-around" alignItems="center">
              <Paper className={classes.midPaper} elevation={8}>
                <Component
                  days={days * 1}
                  currentWeek={tabsValue}
                  progress={progress}
                  handleQuestionnaireOpen={this.handleQuestionnaireOpen}
                  finish={finish}
                  over24={sessionStorage.workoutUpdateDate === 'begin' ? true : (new Date().getDay() - new Date(sessionStorage.workoutUpdateDate).getDay()) >= 1}
                  handleOver24Open={this.handleOver24Open}
                />
              </Paper>
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
  getCurrentProgram, finishQuery, selectDailyQuestionnaire, noProgram,
})(withStyles(styles)(index));
