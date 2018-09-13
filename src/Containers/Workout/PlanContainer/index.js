// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectFooter} from '../FooterContainer/actions';
import {getProgram} from '../actions';
import FooterContainer from'../FooterContainer';
import Plan from '../../../Components/Workout/Plan';
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
    console.log("nextProps",nextProps);
    if(nextProps.WorkoutReducers.programStartDate){
      let date1 = new Date().getTime();
      let date2 = new Date(nextProps.WorkoutReducers.programStartDate);
      let difference = date1 - date2;
      let daysDifference = Math.floor(difference/1000/60/60/24);
    }
    if(nextProps.WorkoutReducers.program){
      let {progress, days} = nextProps.WorkoutReducers.program;
      if(days*5 < progress && this.state.nextPropsCount === 0){
         this.setState({finishProgram: true, count: this.state.count+1})
      }
    }
  }

  onFeedbackButtonClickedHandler = (e) => {
    e.preventDefault();
    this.setState({ askForFeedback: true})
  }
  onSubmitFeedbackHandler = (e) => {
    e.preventDefault();
    this.setState({ askForFeedback: false})
    alert("write logic for submit feedback");
  }
  onFeedbackChange = (e, value) => {
    this.setState({feedbackValue: value})
  }
  render() {
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
        { this.state.finishProgram &&
          <Modal modalFor = "modal">
            <RedirectToQuestionnaire />
          </Modal>
        }
        { this.state.askForFeedback &&
          <Modal modalFor = "modal">
            <Feedback
              feedbackValue = {this.state.feedbackValue}
              onFeedbackChange = {this.onFeedbackChange}
              onSubmitFeedbackHandler = {this.onSubmitFeedbackHandler}
            />
          </Modal>
        }
        </div>
      )
    } else {
      return(
        <Hoc>
        <Loading/>
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

  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    selectFooter, getProgram
  }, dispatch
);
}

export default connect(mapStateToProps, matchDispatchToProps) (PlanContainer);
