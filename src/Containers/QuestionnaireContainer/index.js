// @flow
import React, { Component } from 'react';
import { Progress, Button,WingBlank,WhiteSpace} from 'antd-mobile';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router';
import { addName, addAge, addGender, addWeight, addExercisePlace,
  addDays, addGoals,
  addInjuryManagement, addPostureCorrection,
  addStress,
  addProductivity, addProductiveAfterExercise,
  addWorkInjury, addHealthFeeling,
  addDailyActivity, addCurrentActivity,
  addQuestionnaire, addError, removeError, success
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

const removeArrayItem = (arr, itemToRemove) => {
  return arr.filter(item => item !== itemToRemove)
}

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
          this.props.addError("Please insert all the data to proceed to the next step");
          return;
        }
        this.increaseCurrentPage(currentPage);

      }else if(currentPage === 2) {
        let {goals, exercise_place} = this.props.QuestionnaireReducers.fields;
        if(exercise_place === ""){
          this.props.addError("Please select the exercise place to proceed to the next step");
          return;
        }
        if(goals.length===0){
          this.props.addError("Please select training goals to proceed to the next step");
          return;
        }
        this.increaseCurrentPage(currentPage);

      }else if(currentPage === 3) {
        let {injury_management} = this.props.QuestionnaireReducers.fields;
        if(injury_management === ""){
          this.props.addError("Please select injury management for rehab focus to proceed to the next step");
          return;
        }
        this.increaseCurrentPage(currentPage);

      }else if(currentPage === 4) {
        let {posture_correction} = this.props.QuestionnaireReducers.fields;
        if(posture_correction === ""){
          this.props.addError("Please select posture correction for rehab focus to proceed to the next step");
          return;
        }
        this.increaseCurrentPage(currentPage);

      }else if(currentPage ===  5) {
        let {stress, productivity} = this.props.QuestionnaireReducers.fields;
        if( stress === "" || productivity === ""){
          this.props.addError("Please answer all the questions to proceed to the next step");
          return;
        }

        // this.props.stepFour(stress, productivity);
        this.increaseCurrentPage(currentPage);

      }else if(currentPage === 6) {
        let {work_injury, health_feeling} = this.props.QuestionnaireReducers.fields;
        if( work_injury === "" || health_feeling === ""){
          this.props.addError("Please answer all the questions to proceed to the next step");
          return;
        }
        // this.props.stepFive(work_injury, health_feeling);
        this.increaseCurrentPage(currentPage);

      }else if(currentPage === 7) {
        let {current_activity, daily_activity} = this.props.QuestionnaireReducers.fields;
        if( current_activity === "" || daily_activity === "" ){
          this.props.addError("Please answer all the questions to proceed to the next step");
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
    this.props.removeError();
  }
  render() {
    const {nick_name, fields} = this.props.QuestionnaireReducers;
    const percent  = (this.state.currentPage-1)*15;
    const genderArray = [
      { value: "male", label: 'Male' },
      { value: "female", label: 'Female' },
    ];
    const daysArray = ArrtoObj(3, 5, false);
    const ageArray = ArrtoObj(12, 75, false);
    const weightArray = ArrtoObj(20, 300, true);
    const exercisePlaceArray = [
      { value: "gym", label: 'Gym' },
      { value: "home", label: 'Home' },
    ];
    const trainingGoalsArray= [
      { value: '0', usedFor:'gym', label: 'Muscle size and strength', description:"Weight training principles designed to build muscle and strength" },
      { value: '1', usedFor:'both', label: 'Fat Loss/Definition', description: "A combination of cardio and weight training to target fat loss and increase muscle definition "},
      { value: '2', usedFor:'both', label: 'Decrease stress', description:"Using exercise strategies to reduce stress levels and restore balance back in your body"},
      { value: '3', usedFor:'gym', label: 'Improve posture', description:"Utilising specific exercises and weight training to correct postural imbalances "},
      { value: '4', usedFor:'home', label: 'Fitness', description:"xxxxxxxxxx xxxxxxxx xxxxxx xxxxx "},
    ];
    const postureCorrectionArray= [
      { value: '1a', description: 'Rounded shoulder and forward head', imgurl: 'https://muscularstrength.com/uploads/froala/18fc5d8c9a007cb8238d910aa106b91ad7e0066f.png'},
      { value: '1b', description: 'Anterior pelvic tilt', imgurl: 'http://fitness4backpain.com/wp-content/uploads/Kyphosis-Normal-vs-Hyper.jpg'},
      { value: '1c', description: 'Sway posture', imgurl: 'https://www.hunterphysio.com.au/wp-content/uploads/2017/05/lower-back-02.jpg'},
      { value: '0', description: 'None' },
    ];
    const injuryManagementArray= [
      { value: '2', description: 'Lower Back Pain', imgurl: 'http://totalphysiocare.com.au/wp-content/uploads/2017/05/lower-back-pain-relief.png'},
      { value: '3', description: 'Neck Pain', imgurl: 'https://static.wixstatic.com/media/b1546b_f6a11249f1a346e08fc817d7cece04c3~mv2.jpg/v1/fill/w_630,h_382,al_c,lg_1,q_80/b1546b_f6a11249f1a346e08fc817d7cece04c3~mv2.webp'},
      { value: '4', description: 'Shoulder Pain', imgurl: 'https://feelpainrelief.com/wp-content/uploads/2015/09/shoulder-pain-300x200.jpg'},
      { value: '5', description: 'Hip Pain', imgurl: 'https://qph.fs.quoracdn.net/main-qimg-4d054f876feaa4b3d4944914a6f7cb66-c'},
      { value: '0', description: 'None' },
    ];

    const stressArray= [
      {value: '1', label: 'Stress free', description:'I never feel stressed'},{value: '2', label: 'Minimally stressed', description:'I rarely feel stressed'},
      {value: '3', label: 'Moderately stressed', description:'I feel stressed occasionally'},{value:'4', label: 'Highly stressed', description:'I feel quite stressed most days'},
      {value: '5', label: 'Extremely stressed', description:'I feel highly stressed every day'},
    ];
    const productivityArray = [
      {value: '1', label: 'All the time', description:'I felt productive every day in the last 4 weeks'},{value: '2', label: 'Most of the time', description:'I felt productive most days in the past 4 weeks'},
      {value: '3', label: 'Half the time', description:'I felt productive for half of the days in the past 4 weeks'},{value: '4', label: 'Rarely', description:'I felt productive rarely in the last 4 weeks '},
      {value: '5', label: 'None of the time', description:'I have not felt productive at all in the last 4 weeks'},
    ];
    const injuryArray = [
      {value: '1', label: 'No pain', description:'I never feel injury or posture related pain'},{value: '2', label: 'Rarely in pain', description:'I feel injury or posture related pain every few weeks or months'},
      {value: '3', label: 'Sometimes in pain', description:'I feel injury or posture related pain 1-2 times a week'},{value: '4', label: 'Regularly in pain', description:'I feel injury or posture related pain most days of the week'},
      {value: '5', label: 'Always in pain', description:'I feel consistent injury or posture related pain every day of the week'},
    ];
    const healthArray = [
      {value: '1', label: 'Poor', description:'I feel like my health and wellbeing is poor right now'},{value: '2', label: 'Fairly good', description:'I feel like my health and wellbeing is fairly good right now'},
      {value: '3', label: 'Good', description:'I feel like my health and wellbeing is very good right now'},{value: '4', label: 'Excellent', description:'I feel like my health and wellbeing are excellent right now'},
    ];
    const activityArray= [
      {value: '1', label: 'Sendentary', description:'I am sitting all day'},{value: '2', label: 'Lightly active', description:'Most of my day is sitting but I walk and stand for short periods of the day'},
      {value: '3', label: 'Moderately active', description:'I am walking and standing for most of the day'},{value: '4', label: 'Very active', description:'I am walking or standing all day long'},
      {value: '5', label: 'Extremely active', description:'I do heavy lifting/labour type work or highly intense activity nearly all of the day'},
    ];
    const exerciseArray= [
      {value: '1', label: 'No exercise', description:'I do no exercise '},{value: '2', label: 'Light exercise', description:'I exercise 1-2 times weekly'},
      {value: '3', label: 'Moderate exercise', description:'I exercise 3-4 times weekly'},{value: '4', label: 'Hard exercise', description:'I exercise 5-6 times weekly'},
      {value: '5', label: 'Intense exercise', description:'I do intense exercise 6+ times weekly'},
    ];
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
          exercisePlace = {fields.exercise_place}

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
        inline size="medium" style={{ float: 'left', marginLeft: '12px'}}>
          Previous
      </Button>

      <span style ={{color:"black", marginTop: "40%", padding: "30px 30px"}}>{this.state.currentPage}/7</span>
      <Button type="primary" onClick={() => this.buttonHandler('next')}
      inline size="medium" style={{ float: 'right', marginRight: '12px'}}>
      {this.state.currentPage === 7 ? "Finish": "Next"}
      </Button>
      </div>
      {(this.state.modal) && (
          <Modal modalFor = "selectRehab">
            <RehabModal
              data = {this.state.dataForModal}
              type = {this.state.rehabTypeForModal}
              cancel = {this.cancelModalHandler}
              select = {this.state.rehabTypeForModal === 'forPosture'? this.addPostureCorrection: this.addInjuryManagement }
            />
          </Modal>
      )}
      {(this.props.QuestionnaireReducers.success) && (
        <Redirect to='/login/' />
      )}
      {(this.props.QuestionnaireReducers.error.hasError === true) && (
        <Modal modalFor = "showError">
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
    addError, removeError, success
  }, dispatch
);
}
function ArrtoObj(RangeFrom: int, RangeTo: int, unit: boolean) {
  var returnArray = [];
  if (unit) {
    for (let i = RangeFrom; i <= RangeTo; i++) {
      returnArray.push({value: i, label: i + " kg"})
    };
  } else {
    for (let i = RangeFrom; i <= RangeTo; i++) {
      returnArray.push({value: i, label: i})
    };
  }
  return returnArray;
}
export default connect (mapStateToProps, matchDispatchToProps)(Questionnaire);
