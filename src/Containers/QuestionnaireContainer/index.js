// @flow
import React, { Component } from 'react';
import { Progress, Button} from 'antd-mobile';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router';
import Modal from '../../Components/UI/Modal';
import RehabModal from '../../Components/Questionnaire/Popup/RehabModal';

import { addName, addAge, addGender, addWeight, addExercisePlace,
  addDays, addGoals,
  addRehabFocus, addStress,
  addProductivity, addProductiveAfterExercise,
  addWorkInjury, addHealthFeeling,
  addDailyActivity, addCurrentActivity,
  stepOne, stepTwo, stepThree, stepFour, stepFive, stepSix
}from './actions';

import CurrentStep  from '../../Components/Questionnaire/Progress';
import Detail from '../../Components/Questionnaire/Detail';
import Program from '../../Components/Questionnaire/Program';
import InjuryManagement from '../../Components/Questionnaire/InjuryManagement';
import PostureCorrection from '../../Components/Questionnaire/PostureCorrection';
import StepFour from '../../Components/Questionnaire/StepFour';
import StepFive from '../../Components/Questionnaire/StepFive';
import StepSix from '../../Components/Questionnaire/StepSix';

import './Questionnaire.css';

const removeArrayItem = (arr, itemToRemove) => {
  return arr.filter(item => item !== itemToRemove)
}

class Questionnaire extends Component {
  constructor(props){
    super(props);
    this.state = {
      trainingGoals: [
        { value: 0, isChecked: false, label: 'Muscle size and strength', description:"Weight training principles designed to build muscle and strength" },
        { value: 1, isChecked: false, label: 'Fat Loss/Definition', description: "A combination of cardio and weight training to target fat loss and increase muscle definition "},
        { value: 2, isChecked: false, label: 'Decrease stress', description:"Using exercise strategies to reduce stress levels and restore balance back in your body"},
        { value: 3, isChecked: false, label: 'Improve posture', description:"Utilising specific exercises and weight training to correct postural imbalances "}
      ],
      trainingGoalsForHome: [
        { value: 0, isChecked: false, label: 'Fat Loss/Definition', description: "A combination of cardio and weight training to target fat loss and increase muscle definition "},
        { value: 1, isChecked: false, label: 'Decrease stress', description:"Using exercise strategies to reduce stress levels and restore balance back in your body"},
        { value: 2, isChecked: false, label: 'Fitness', description:"xxxxxxxxxx xxxxxxxx xxxxxx xxxxx "}
      ],
      postureManagement: [
        { value: '1a', isChecked: false, description: 'Rounded shoulder and forward head', imgurl: 'https://muscularstrength.com/uploads/froala/18fc5d8c9a007cb8238d910aa106b91ad7e0066f.png'},
        { value: '1b', isChecked: false, description: 'Anterior pelvic tilt', imgurl: 'http://fitness4backpain.com/wp-content/uploads/Kyphosis-Normal-vs-Hyper.jpg'},
        { value: '1c', isChecked: false, description: 'Sway posture', imgurl: 'http://www.joannasoh.com/uploads/authors/1/fitness/posts/bad-posture/swayback-new.jpg'},
      ],
      injuryManagement: [
        { value: '2', isChecked: false, description: 'Lower Back Pain', imgurl: 'http://totalphysiocare.com.au/wp-content/uploads/2017/05/lower-back-pain-relief.png'},
        { value: '3', isChecked: false, description: 'Neck Pain', imgurl: 'https://static.wixstatic.com/media/b1546b_f6a11249f1a346e08fc817d7cece04c3~mv2.jpg/v1/fill/w_630,h_382,al_c,lg_1,q_80/b1546b_f6a11249f1a346e08fc817d7cece04c3~mv2.webp'},
        { value: '4', isChecked: false, description: 'Shoulder Pain', imgurl: 'https://feelpainrelief.com/wp-content/uploads/2015/09/shoulder-pain-300x200.jpg'},
        { value: '5', isChecked: false, description: 'Hip Pain', imgurl: 'https://qph.fs.quoracdn.net/main-qimg-4d054f876feaa4b3d4944914a6f7cb66-c'},
      ],

      rehabTypeForModal: '',
      dataForModal: { },
      modal: false,
      isFinish: false,
      currentPage: 1,
      hasError: false,
    }//state ends
    // this.makeNextToFinish=this.makeNextToFinish.bind(this);
  }//constructor ends

  componentWillMount() {
    const {goals, rehab_focus} = this.props.QuestionnaireReducers.fields;
    let trainingGoals = [ ...this.state.trainingGoals ];
    let injuryManagement = [ ...this.state.injuryManagement];
    goals.map(i => {
      trainingGoals[i].isChecked = true;
      return null;
    })
    rehab_focus.map(j => {
      injuryManagement[j].isChecked = true;
      return null;
    })
    this.setState({ trainingGoals, injuryManagement, isFinish:false })
  }
  //handle the checkbox for injury management in questionnaire (third page)
  rehabFocusCheckboxHandler = (value, type) => {
    let injury_posture = type === 'forInjury' ? [ ...this.state.injuryManagement] : [ ... this.state.postureManagement]
    let { rehab_focus } = this.props.QuestionnaireReducers.fields;
    //let injuryManagement = [ ...this.state.injuryManagement];
    let count = rehab_focus.length;
    let index = injury_posture.findIndex(i => {return i.value === value});
    //close the modal
    this.cancelModalHandler();
    if(count < 2 || injury_posture[index].isChecked){
      injury_posture[index].isChecked = !injury_posture[index].isChecked;
      if(rehab_focus.includes(value)){
        rehab_focus = removeArrayItem(rehab_focus, value)
      }else{
        rehab_focus.push(value);
      }
      this.props.addRehabFocus(rehab_focus);
      if( type === 'forInjury'){
          this.setState({ injuryManagement : injury_posture });
      }
      else {
        this.setState({ postureManagement : injury_posture });
      }
    }
    else{
      alert('Exceeded maximun number of selection');
    }
  }
  //handle the checkbox for program in questionnaire (second page)
  programCheckboxHandler = (value) => {
    const {exercisePlace} = this.props.QuestionnaireReducers.fields;
    let tempGoals = [];
    let trainingGoals = exercisePlace === 'home'? [ ...this.state.trainingGoalsForHome ] : [ ...this.state.trainingGoals ];
    let count = 0;
    trainingGoals.map(i => {
      if(i.isChecked === true) {
        tempGoals.push(i.value);
        count ++;
      }
      return null;
    })
    if(count < 2 || trainingGoals[value].isChecked) {
      trainingGoals[value].isChecked = !trainingGoals[value].isChecked;
      if(tempGoals.includes(value)){
        tempGoals = removeArrayItem(tempGoals, value)
      }else{
        tempGoals.push(value);
      }
      this.props.addGoals(tempGoals);
      this.setState({ trainingGoals });
    } else {
      alert('You can select only two at most');
    }
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
        let {age, gender, weight, exercisePlace} = this.props.QuestionnaireReducers.fields;
        if(age === "" || gender === "" || weight === "" || nick_name === "" || exercisePlace === ""){
          alert("please insert all the data to proceed to next step");
          return;
        }
        this.props.stepOne(nick_name, age, gender, weight, exercisePlace);
        this.increaseCurrentPage(currentPage);

      }else if(currentPage === 2) {
        let {days_per_week, goals} = this.props.QuestionnaireReducers.fields;
        if(goals.length===0){
          alert("please insert all the data to proceed to next step");
          return;
        }
        this.props.stepTwo(days_per_week, goals);
        this.increaseCurrentPage(currentPage);

      }else if(currentPage === 3) {
        // let {rehab_focus} = this.props.QuestionnaireReducers.fields;
        // if( rehab_focus.length === 0){
        //   alert("Please insert all the data to proceed to next step");
        //   return;
        // }
        this.increaseCurrentPage(currentPage);

      }else if(currentPage === 4) {
        let {rehab_focus} = this.props.QuestionnaireReducers.fields;
        if( rehab_focus.length === 0){
          alert("Please select at least one option for injury management or posture correction");
          return;
        }
        this.props.stepThree(rehab_focus);
        this.increaseCurrentPage(currentPage);

      }else if(currentPage ===  5) {
        let {stress, productivity} = this.props.QuestionnaireReducers.fields;
        if( stress === "" || productivity === ""){
          alert("Please insert all the data to proceed to next step");
          return;
        }

        this.props.stepFour(stress, productivity);
        this.increaseCurrentPage(currentPage);

      }else if(currentPage === 6) {
        let {work_injury, health_feeling} = this.props.QuestionnaireReducers.fields;
        if( work_injury === "" || health_feeling === ""){
          alert("Please insert all the data to proceed to next step");
          return;
        }
        this.props.stepFive(work_injury, health_feeling);
        this.increaseCurrentPage(currentPage);

      }else if(currentPage === 7) {
        let {current_activity, daily_activity} = this.props.QuestionnaireReducers.fields;
        if( current_activity === "" || daily_activity === "" ){
          alert("Please insert all the data to proceed to next step");
          return;
        }
        this.props.stepSix(current_activity, daily_activity);
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

  render() {
    const {nick_name, fields} = this.props.QuestionnaireReducers;
    const percent  = (this.state.currentPage-1)*15;
    const genderArray = [
      { value: "male", label: 'Male' },
      { value: "female", label: 'Female' },
      { value: "others", label: 'Others' },
    ];
    const daysArray= [
      {value: 3, label: '3'},{value: 4, label: '4'},{value: 5, label: '5'},
    ];
    const weightArray= [
      {value: 70, label: '70 KG'},{value: 71, label: '71 KG'},{value: 72, label: '72 KG'},{value: 73, label: '73 KG'},{value: 74, label: '74 KG'},{value: 75, label: '75 KG'},
      {value: 76, label: '76 KG'},{value: 77, label: '77 KG'},{value: 78, label: '78 KG'},{value: 79, label: '79 KG'},{value: 80, label: '80 KG'},
    ];
    const exercisePlaceArray = [
      { value: "gym", label: 'Gym' },
      { value: "home", label: 'Home' },
    ];
    const stressArray= [
      {value: '1', label: 'Stress free', description:'I never feel stressed'},{value: '2', label: 'Minimally stressed', description:'I rarely feel stressed'},
      {value: '3', label: 'Moderately stressed', description:'I feel stressed occasionally'},{value:'4', label: 'Highly stressed', description:'I feel quite stressed most days'},
      {value: '5', label: 'Extrembly stressed', description:'I feel highly stressed every day'},
    ];
    const productivityArray = [
      {value: '1', label: 'Not productive at all', description:'I never feel productive'},{value: '2', label: 'Minimally productive', description:'I don’t feel productive very often'},
      {value: '3', label: 'Moderately productive', description:'I feel fairly productive most days'},{value: '4', label: 'Highly productive', description:'I feel highly productive most days'},
      {value: '5', label: 'Extrembly productive', description:'I feel highly productive every day'},
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
      {value: '5', label: 'Extrembly active', description:'I do heavy lifting/labour type work or highly intense activity nearly all of the day'},
    ];
    const exerciseArray= [
      {value: '1', label: 'Sendentary', description:'I do no exercise '},{value: '2', label: 'Lightly active', description:'I do some light cardio or weight training 1-2 times a week'},
      {value: '3', label: 'Moderately active', description:'I do cardio or weight training 3-4 times a week'},{value: '4', label: 'Very active', description:'I do cardio or weight training 5-6 times a week'},
      {value: '5', label: 'Extrembly active', description:'I do intense cardio or weight training 6+ times a week'},
    ];
    let RenderPage = null;
    if(this.state.currentPage === 1){
      RenderPage = (
        <Detail
        fields={fields}
        name={nick_name}
        nameHandler={this.props.addName}
        ageHandler={this.props.addAge}
        genderArray={genderArray}
        genderHandler = {this.props.addGender}
        weightArray={weightArray}
        selectWeight={this.props.addWeight}
        exercisePlaceArray={exercisePlaceArray}
        selectExercisePlace={this.props.addExercisePlace}
        />
      );
    } else if(this.state.currentPage === 2){
      RenderPage = (
        <Program
        daysArray = {daysArray}
        days= {fields.days_per_week}
        selectDays = {this.props.addDays}
        change={this.programCheckboxHandler}
        data = { fields.exercisePlace ==='home' ? this.state.trainingGoalsForHome : this.state.trainingGoals }
        />
      );
    } else if(this.state.currentPage === 3){
      RenderPage = (
        <InjuryManagement
          change={this.rehabFocusCheckboxHandler}
          data = {this.state.injuryManagement}
          showModal = {this.showModal}
        />

      );
    }else if(this.state.currentPage === 4){
      RenderPage = (
        <PostureCorrection
          change={this.rehabFocusCheckboxHandler}
          data = {this.state.postureManagement}
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
      <div className="progress-bar">
      <div className="progress"><Progress percent={percent} position="normal" /></div>
      <div aria-hidden="true">{percent}%</div>
      </div>
      <CurrentStep currentPage={this.state.currentPage}/>
      {RenderPage}
      </div>

      <div className="pagination-container">
      <Button type="primary" disabled={this.state.currentPage === 1 ? true: false}  onClick={() => this.buttonHandler('previous')}
      inline size="medium" style={{ float: 'left', marginLeft: '12px'}}>
      previous
      </Button>

      <span id="footer_page" style ={{}}>{this.state.currentPage}/6</span>
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
              select = {this.rehabFocusCheckboxHandler}
            />
          </Modal>
      )}
      {(this.state.isFinish) && (
        <Redirect to="/plan" />
      )}
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    QuestionnaireReducers: state.QuestionnaireReducers
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    addName, addAge, addGender, addWeight, addExercisePlace,
    addDays, addGoals,
    addRehabFocus, addStress,
    addProductivity, addProductiveAfterExercise,
    addWorkInjury, addHealthFeeling,
    addDailyActivity, addCurrentActivity,
    stepOne, stepTwo, stepThree, stepFour, stepFive, stepSix
  }, dispatch
);
}
export default connect (mapStateToProps, matchDispatchToProps)(Questionnaire);
