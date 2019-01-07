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
  getDailyRehab, getPosture, getInjury, createNewRehab, showQuestionnaireForCreate,
} from '../../actions';
import Dialog from '../../../HOC/Dialog';
import Questionnaire from './questionnaire';


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
    };
    this.midPartTabsValueHandleChange = this.midPartTabsValueHandleChange.bind(this);
    this.handleQuestionnaireClose = this.handleQuestionnaireClose.bind(this);
    this.handleClickDiscriptionOpen = this.handleClickDiscriptionOpen.bind(this);
    this.handleDiscriptionClickClose = this.handleDiscriptionClickClose.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleFinishQuestionnaireClick = this.handleFinishQuestionnaireClick.bind(this);
  }

  componentDidMount() {
    this.setState({ currentWeek: new Date().getUTCDay() - 1 });
    this.props.getDailyRehab();
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

  render() {
    const { classes, showCreationQuestionnaire, querryCreating } = this.props;
    const {
      currentWeek, midPartTabsValue, showDiscription, title, injurySelected,
      postureSelected,
    } = this.state;
    return (
      <MainComponent
        top
        backgroundImage="image/sampleImage.jpeg"
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
                injury="1111"
                posture="2222"
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
    posture, injury, showCreationQuestionnaire, querryCreating,
  } = state.Rehab;
  return {
    posture, injury, showCreationQuestionnaire, querryCreating,
  };
}
export default connect(mapStateToProps, {
  getDailyRehab, getPosture, getInjury, createNewRehab, showQuestionnaireForCreate,
})(withStyles(styles)(MainRehab));
