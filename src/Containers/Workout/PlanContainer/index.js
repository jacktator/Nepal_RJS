// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router-dom';
import { ActivityIndicator } from 'antd-mobile';
import {selectFooter} from '../FooterContainer/actions';
import {getProgram, updateDailyFeedBack, removeError, setDiffFinished} from '../actions';
import FooterContainer from'../FooterContainer';
import Plan from '../../../Components/Workout/Plan';
import ShowError from '../../../Components/Error/ShowError';
import RedirectToQuestionnaire from '../../../Components/Workout/Plan/RedirectToQuestionnaire';
import Feedback from '../../../Components/Workout/Plan/Feedback';
import Hoc from '../../../HOC/Hoc';
import Loading from '../../../Components/Loading';
import Modal from '../../../Components/UI/Modal';

class PlanContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      feedbackValue: null,
      askForFeedback: false,
      finishProgram: false,
      nextPropsCount: 0,
    }
    this.onFeedbackButtonClickedHandler = this.onFeedbackButtonClickedHandler.bind(this);
    this.onFeedbackChange = this.onFeedbackChange.bind(this);
    this.onSubmitFeedbackHandler = this.onSubmitFeedbackHandler.bind(this);
  }
  componentWillMount(){
    if(this.props.currentFooterTab!== 'planTab' ){
      this.props.selectFooter('planTab');
    }
    this.props.getProgram();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.WorkoutReducers.program){
      let {progress, days} = nextProps.WorkoutReducers.program;
      if(days*5 < progress && this.state.nextPropsCount === 0){
         this.setState({finishProgram: true, count: this.state.count+1})
      }
    }
  }

//Hanles when user want to open feedback page
  onFeedbackButtonClickedHandler = (e) => {
    e.preventDefault();
    this.setState({ askForFeedback: true})
  }
  //Handle submit button click in feedback.
  onSubmitFeedbackHandler = (e) => {
    e.preventDefault();
    this.setState({ askForFeedback: false });
    this.props.setDiffFinished(true);
    this.props.updateDailyFeedBack(
              this.props.WorkoutReducers.programID, this.props.WorkoutReducers.program,
              this.state.feedbackValue
            )
  }
  //Handle when user change the value in checkbox of feedback.
  onFeedbackChange = (e, value) => {
    e.preventDefault();
    this.setState({feedbackValue: value})
  }
  cancelErrorMessageHandler =() => {
    this.props.removeError();
  }
  render() {
    const {error} =this.props.WorkoutReducers;
    const FeedbackArray = [
        {value:3, Feedback:'Too hard'},
        {value:2, Feedback:'Just right'},
        {value:1, Feedback:'Too easy'},
        {value:4, Feedback:'Do not complete'},
    ]
    if(this.props.WorkoutReducers.program) {
      return (
        <div>
        <Plan
          WorkoutReducers={this.props.WorkoutReducers}
          onFeedbackButtonClickedHandler = {this.onFeedbackButtonClickedHandler}
        />
        <FooterContainer
          currentPath='plan'
        />

        {(error.hasError) && (
          <Modal modalFor='modal'>
            <ShowError
             error={error.message}
             cancel={this.cancelErrorMessageHandler}/>
          </Modal>
        )}

        { this.state.finishProgram &&
          <Modal modalFor = "modal">
            <RedirectToQuestionnaire />
          </Modal>
        }
        { this.state.askForFeedback &&
          <Modal modalFor = "modal">
            <Feedback
              FeedbackArray = {FeedbackArray}
              feedbackValue = {this.state.feedbackValue}
              onFeedbackChange = {this.onFeedbackChange}
              onSubmitFeedbackHandler = {this.onSubmitFeedbackHandler}
            />
          </Modal>
        }
        {(this.props.WorkoutReducers.redirectToQuestionnaire) && (
          <Redirect to='/questionnaire' />
        )}
        {(this.props.isInvalidToken) && (
          <Redirect to='/login/LoginDetails' />
          )}

        <ActivityIndicator
          toast
          text="Loading..."
          animating={this.props.WorkoutReducers.isDiffFinished}
        />

        </div>
      )
    } else {
      return(
        <Hoc>
        <Loading/>
        {(this.props.WorkoutReducers.redirectToQuestionnaire) && (
          <Redirect to='/questionnaire' />
        )}
        {(this.props.isInvalidToken) && (
          <Redirect to='/login/LoginDetails' />
        )}
        </Hoc>
      )
    }
  }
}

function mapStateToProps(state){
  return {
    currentFooterTab: state.FooterReducers.currentFooterTab,
    profileReducers: state.ProfileReducers,
    WorkoutReducers: state.WorkoutReducers,
    isInvalidToken: state.LoginDetailsStates.isInvalidToken,
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    selectFooter, getProgram, updateDailyFeedBack, removeError, setDiffFinished
  }, dispatch
);
}

export default connect(mapStateToProps, matchDispatchToProps) (PlanContainer);
