// @flow
import React, { Component } from 'react';
import { Progress, Button,WingBlank,WhiteSpace,ActivityIndicator} from 'antd-mobile';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router';

import {postureCorrectionArray, injuryManagementArray, ageArray, genderArray, weightArray, daysArray,
        exercisePlaceArray, trainingGoalsArray, stressArray, productivityArray, injuryArray,
        healthArray, activityArray, exerciseArray} from '../DataSources/AllArrays';
import { addName, addAge, addGender, addWeight, addExercisePlace,
  addDays, addGoals,
  addInjuryManagement, addPostureCorrection,
  addStress,
  addProductivity, addProductiveAfterExercise,
  addWorkInjury, addHealthFeeling,
  addDailyActivity, addCurrentActivity,
  addQuestionnaire, addError, removeError, success, uploading
}from './actions';

import CurrentStep  from '../../Components/Questionnaire/Progress';
import Detail from '../../Components/Questionnaire/Detail';
import Program from '../../Components/Questionnaire/Program';
import InjuryManagement from '../../Components/Questionnaire/InjuryManagement';
import PostureCorrection from '../../Components/Questionnaire/PostureCorrection';
import StepFour from '../../Components/Questionnaire/StepFour';
import StepFive from '../../Components/Questionnaire/StepFive';
import StepSix from '../../Components/Questionnaire/StepSix';
import Modal from '../../Components/UI/Modal';
import RehabModal from '../../Components/Questionnaire/Popup/RehabModal';
import ShowError from '../../Components/Error/ShowError';

import './Questionnaire.css';

class Questionnaire extends Component {
  constructor(props){
    super(props);
    this.state = {
      rehabTypeForModal: '',
      dataForModal: { },
      modal: false,
      isFinish: false,
      currentPage: 1,
      hasError: false,
    }//state ends
  }//constructor ends

  addInjuryManagement = (value) => {
    this.cancelModalHandler();
    this.props.addInjuryManagement(value);
  }
  addPostureCorrection = (value) => {
    this.cancelModalHandler();
    this.props.addPostureCorrection(value);
  }
  //Icrease the currentPage of state by 1
  increaseCurrentPage = (currentPage) => {
    currentPage += 1;
    this.setState({ currentPage })
  }

  //Handle when next or previous button is clicked
  buttonHandler = (button) =>{
    let currentPage = this.state.currentPage;
    if(button === "previous"){
      if(currentPage>1){
        currentPage -= 1;
        this.setState({ currentPage })
      }
    }
    if(button === "next"){
      if(currentPage === 1 ){
        let {nick_name} = this.props.QuestionnaireReducers
        let {age, gender, weight} = this.props.QuestionnaireReducers.fields;
        if(age === "" || gender === "" || weight === "" || nick_name === ""){
          this.props.addError("Please insert all the data to proceed to the next step.");
          return;
        }
        this.increaseCurrentPage(currentPage);

      }else if(currentPage === 2) {
        let {goals, exercise_place} = this.props.QuestionnaireReducers.fields;
        if(exercise_place === ""){
          this.props.addError("Please select the exercise place to proceed to the next step.");
          return;
        }
        if(goals.length===0){
          this.props.addError("Please select a training goal to proceed to the next step.");
          return;
        }
        this.increaseCurrentPage(currentPage);

      }else if(currentPage === 3) {
        let {injury_management} = this.props.QuestionnaireReducers.fields;
        if(injury_management === ""){
          this.props.addError("Please select one of the options to proceed to the next step.");
          return;
        }
        this.increaseCurrentPage(currentPage);

      }else if(currentPage === 4) {
        let {posture_correction} = this.props.QuestionnaireReducers.fields;
        if(posture_correction === ""){
          this.props.addError("Please select one of the options to proceed to the next step.");
          return;
        }
        this.increaseCurrentPage(currentPage);

      }else if(currentPage ===  5) {
        let {stress, productivity} = this.props.QuestionnaireReducers.fields;
        if( stress === "" || productivity === ""){
          this.props.addError("Please answer all the questions to proceed to the next step.");
          return;
        }

        // this.props.stepFour(stress, productivity);
        this.increaseCurrentPage(currentPage);

      }else if(currentPage === 6) {
        let {work_injury, health_feeling} = this.props.QuestionnaireReducers.fields;
        if( work_injury === "" || health_feeling === ""){
          this.props.addError("Please answer all the questions to proceed to the next step.");
          return;
        }
        // this.props.stepFive(work_injury, health_feeling);
        this.increaseCurrentPage(currentPage);

      }else if(currentPage === 7) {
        let {current_activity, daily_activity} = this.props.QuestionnaireReducers.fields;
        if( current_activity === "" || daily_activity === "" ){
          this.props.addError("Please answer all the questions to proceed to the next step.");
          return;
        }
        // this.props.stepSix(current_activity, daily_activity);
          this.props.addQuestionnaire(this.props.QuestionnaireReducers)
        this.setState({isFinish:true})
      }
    }
  }

  //Display Modal
  showModal = (data, type) => {
    this.setState({ rehabTypeForModal: type, dataForModal:data, modal:true});
  }
  cancelModalHandler = () => {
    this.setState({ modal: false })
  }
  cancelErrorMessageHandler = () => {
    this.props.uploading(false);
    this.props.removeError();

  }
  render() {
    const {nick_name, fields, isLoading} = this.props.QuestionnaireReducers;
    const percent  = (this.state.currentPage-1)*15;

    let RenderPage = null;
    if(this.state.currentPage === 1){
      RenderPage = (
        <Detail
          fields={fields}
          name={nick_name}
          nameHandler={this.props.addName}
          ageArray={ageArray}
          selectAge={this.props.addAge}
          genderArray={genderArray}
          genderHandler = {this.props.addGender}
          weightArray={weightArray}
          selectWeight={this.props.addWeight}
        />
      );
    } else if(this.state.currentPage === 2){
      RenderPage = (
        <Program
          fields={fields}
          days= {fields.days_per_week}
          exercise_place = {fields.exercise_place}

          daysArray = {daysArray}
          selectDays = {this.props.addDays}

          exercisePlaceArray={exercisePlaceArray}
          selectExercisePlace={this.props.addExercisePlace}

          selectTrainingGoals = {this.props.addGoals}
          trainingGoalsArray = {trainingGoalsArray}
        />
      );
    } else if(this.state.currentPage === 3){
      RenderPage = (
        <InjuryManagement
          selectInjuryManagement={this.props.addInjuryManagement}
          data= {injuryManagementArray}
          fields = {fields.injury_management}
          showModal = {this.showModal}
        />
      );
    }else if(this.state.currentPage === 4){
      RenderPage = (
        <PostureCorrection
          data = {postureCorrectionArray}
          fields = {fields.posture_correction}
          selectPostureCorrection={this.props.addPostureCorrection}
          showModal = {this.showModal}
        />
      );
    }else if(this.state.currentPage === 5){
      RenderPage = (
        <StepFour
        stressArray={stressArray}
        selectStress={this.props.addStress}
        fields = {fields}
        productivityArray={productivityArray}
        selectProductivity={this.props.addProductivity}
        />
      );
    } else if(this.state.currentPage === 6){
      RenderPage = (
        <StepFive
        injuryArray={injuryArray}
        selectInjury={this.props.addWorkInjury}
        fields = {fields}
        healthArray={healthArray}
        selectHealth={this.props.addHealthFeeling}
        />
      );
    }else if(this.state.currentPage === 7){
      RenderPage = (
        <StepSix
        activityArray={activityArray}
        selectActivity={this.props.addDailyActivity}
        fields = {fields}
        exerciseArray={exerciseArray}
        selectExercise={this.props.addCurrentActivity}
        />
      );
    }

    return(
      <div className="container">
      <div className= "content-without-pagination">
      <WhiteSpace size="sm"/>
      <WingBlank size="sm">
      <div className="progress-bar">
      <div className="progress">
          <Progress percent={percent} position="normal" />
      </div>
      <div aria-hidden="true">{percent}%</div>
      </div>
      </WingBlank>
      <CurrentStep currentPage={this.state.currentPage}/>
      {RenderPage}
      </div>

      <div className="pagination-container">
      <Button type="primary" disabled={this.state.currentPage === 1 ? true: false}  onClick={() => this.buttonHandler('previous')}
        inline size="medium" className="pagination-container-left-button">
          Previous
      </Button>
      <Button type="primary" onClick={() => this.buttonHandler('next')}
      inline size="medium" className="pagination-container-right-button">
      {this.state.currentPage === 7 ? "Finish": "Next"}
      </Button>
      <div className="pagination-page-number">{this.state.currentPage}/7</div>
      </div>
      {(isLoading) && (
        <div className="Backdrop-ActivityIndicator">
            <ActivityIndicator
              toast
              text="Please Wait..."
              animating={isLoading}
            />
        </div>
      )}

      {(this.state.modal) && (
          <Modal modalFor = "modal">
            <RehabModal
              data = {this.state.dataForModal}
              type = {this.state.rehabTypeForModal}
              cancel = {this.cancelModalHandler}
              select = {this.state.rehabTypeForModal === 'forPosture'? this.addPostureCorrection: this.addInjuryManagement }
            />
          </Modal>
      )}
      {(this.props.QuestionnaireReducers.success) && (
        <Redirect to='/mainmenu/'/>
      )}
      {(this.props.QuestionnaireReducers.error.hasError === true) && (
        <Modal modalFor = "modal">
          <ShowError
            error= {this.props.QuestionnaireReducers.error.message}
            cancel = {this.cancelErrorMessageHandler}
          />
        </Modal>
      )}
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    QuestionnaireReducers: state.QuestionnaireReducers,
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    addName, addAge, addGender, addWeight, addExercisePlace,
    addDays, addGoals,
    addInjuryManagement, addPostureCorrection, addStress,
    addProductivity, addProductiveAfterExercise,
    addWorkInjury, addHealthFeeling,
    addDailyActivity, addCurrentActivity,
    addQuestionnaire,
    addError, removeError, success, uploading
  }, dispatch
);
}

export default connect (mapStateToProps, matchDispatchToProps)(Questionnaire);
