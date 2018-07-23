
import React, { Component } from 'react';
import { Progress, Button} from 'antd-mobile';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router';
import { addName, addAge, addGender, addWeight, addExercisePlace,
  addDays, addGoals,
  addRehabFocus, addStress,
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
      trainingGoals: [
        { value: '0', usedFor:'gym', isChecked: false, label: 'Muscle size and strength', description:"Weight training principles designed to build muscle and strength" },
        { value: '1', usedFor:'both', isChecked: false, label: 'Fat Loss/Definition', description: "A combination of cardio and weight training to target fat loss and increase muscle definition "},
        { value: '2', usedFor:'both', isChecked: false, label: 'Decrease stress', description:"Using exercise strategies to reduce stress levels and restore balance back in your body"},
        { value: '3', usedFor:'gym', isChecked: false, label: 'Improve posture', description:"Utilising specific exercises and weight training to correct postural imbalances "},
        { value: '4', usedFor:'home', isChecked: false, label: 'Fitness', description:"xxxxxxxxxx xxxxxxxx xxxxxx xxxxx "},
      ],
      postureCorrection: [
        { value: '1a', isChecked: false, description: 'Rounded shoulder and forward head', imgurl: 'https://muscularstrength.com/uploads/froala/18fc5d8c9a007cb8238d910aa106b91ad7e0066f.png'},
        { value: '1b', isChecked: false, description: 'Anterior pelvic tilt', imgurl: 'http://fitness4backpain.com/wp-content/uploads/Kyphosis-Normal-vs-Hyper.jpg'},
        { value: '1c', isChecked: false, description: 'Sway posture', imgurl: 'http://www.joannasoh.com/uploads/authors/1/fitness/posts/bad-posture/swayback-new.jpg'},
        { value: '0', isChecked: false, description: 'None' }
      ],
      injuryManagement: [
        { value: '2', isChecked: false, description: 'Lower Back Pain', imgurl: 'http://totalphysiocare.com.au/wp-content/uploads/2017/05/lower-back-pain-relief.png'},
        { value: '3', isChecked: false, description: 'Neck Pain', imgurl: 'https://static.wixstatic.com/media/b1546b_f6a11249f1a346e08fc817d7cece04c3~mv2.jpg/v1/fill/w_630,h_382,al_c,lg_1,q_80/b1546b_f6a11249f1a346e08fc817d7cece04c3~mv2.webp'},
        { value: '4', isChecked: false, description: 'Shoulder Pain', imgurl: 'https://feelpainrelief.com/wp-content/uploads/2015/09/shoulder-pain-300x200.jpg'},
        { value: '5', isChecked: false, description: 'Hip Pain', imgurl: 'https://qph.fs.quoracdn.net/main-qimg-4d054f876feaa4b3d4944914a6f7cb66-c'},
        { value: '0', isChecked: false, description: 'None' }
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
    let injuryManagement = [ ...this.state.injuryManagement ];
    let index = null;
    goals.map(currentValue => {
      index = this.state.trainingGoals.findIndex(i => { return i.value === currentValue; })
      if(index && index!== -1){
          trainingGoals[index].isChecked = true;
      }
      return null;
    })
    rehab_focus.map(currentValue => {
      index = this.state.injuryManagement.findIndex(i => { return i.value === currentValue; })
      if(index && index!== -1){
          injuryManagement[index].isChecked = true;
      }
      return null;
    })
    this.setState({ trainingGoals, injuryManagement})
  }
  //handle the checkbox for injury management in questionnaire (third page)
  postureCorrectionHandler = (value) => {
    this.cancelModalHandler();
    let postureCorrection = [...this.state.postureCorrection];
    let index = this.state.postureCorrection.findIndex(i => { return i.value === value})
    if(postureCorrection[index].isChecked){
      postureCorrection[index].isChecked = false;
    }else{
      this.state.postureCorrection.map(data => {
        index = this.state.postureCorrection.findIndex(i => { return i.value === data.value})
        if(value === data.value){
          postureCorrection[index].isChecked = true;
        }
        else{
            postureCorrection[index].isChecked = false;
        }
        return null;
      })
    }
    this.setState({postureCorrection});
  }
  injuryManagementHandler = (value) => {
    this.cancelModalHandler();
    let injuryManagement = [...this.state.injuryManagement];
    let index = this.state.injuryManagement.findIndex(i => { return i.value === value})
    if(injuryManagement[index].isChecked){
      injuryManagement[index].isChecked = false;
    }else{
      this.state.injuryManagement.map(data => {
        index = this.state.injuryManagement.findIndex(i => { return i.value === data.value})
        if(value === data.value){
          injuryManagement[index].isChecked = true;
        }
        else{
            injuryManagement[index].isChecked = false;
        }
        return null;
      })
    }

    this.setState({injuryManagement});
  }

  rehabFocusCheckboxHandler = (value) => {
    this.cancelModalHandler();
    let injury_posture = [ ...this.state.injuryManagement]
    let { rehab_focus } = this.props.QuestionnaireReducers.fields;

    if(!rehab_focus){
      rehab_focus = [];
    }
    //let injuryManagement = [ ...this.state.injuryManagement];
    let count = rehab_focus.length;
    let index = injury_posture.findIndex(i => {return i.value === value});
    //close the modal

    if(count < 2 || injury_posture[index].isChecked){
      injury_posture[index].isChecked = !injury_posture[index].isChecked;
      if(rehab_focus.includes(value)){
        rehab_focus = removeArrayItem(rehab_focus, value)
      }else{
        rehab_focus.push(value);
      }
      this.props.addRehabFocus(rehab_focus);
      this.setState({ injuryManagement : injury_posture });
    }
    else{
      this.props.addError("Exceeded maximun number of selection");
    }
  }
  //handle the checkbox for program in questionnaire (second page)
  programCheckboxHandler = (value) => {
    let tempGoals = [];
    let trainingGoals = [ ...this.state.trainingGoals ];
    let count = 0;
    trainingGoals.map(i => {
      if(i.isChecked === true) {
        tempGoals.push(i.value);
        count ++;
      }
      return null;
    })
    if(count < 1 || trainingGoals[value].isChecked) {
      trainingGoals[value].isChecked = !trainingGoals[value].isChecked;
      if(tempGoals.includes(value)){
        tempGoals = removeArrayItem(tempGoals, value)
      }else{
        tempGoals.push(value);
      }
      this.props.addGoals(tempGoals);
        this.setState({ trainingGoals })
    } else {
      this.props.addError("Only a maximum of one training goal can be selected");
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
        let {age, gender, weight} = this.props.QuestionnaireReducers.fields;
        if(age === "" || gender === "" || weight === "" || nick_name === ""){
          this.props.addError("Please insert all the data to proceed to the next step");
          return;
        }
        this.increaseCurrentPage(currentPage);

      }else if(currentPage === 2) {
        let {goals, exercisePlace} = this.props.QuestionnaireReducers.fields;
        if(exercisePlace === ""){
          this.props.addError("Please select the excercicse place");
          return;
        }
        if(goals.length===0){
          this.props.addError("Please insert all the data to proceed to the next step");
          return;
        }
        this.increaseCurrentPage(currentPage);

      }else if(currentPage === 3) {
        let {rehab_focus} = this.props.QuestionnaireReducers.fields;
        // if( rehab_focus.length === 0){
        //   this.props.addError("Please insert all the data to proceed to the next step");
        //   return;
        // }
        // this.props.stepThree(rehab_focus);
        this.increaseCurrentPage(currentPage);

      }else if(currentPage === 4) {
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
    const daysArray= [
      {value: 3, label: '3'},{value: 4, label: '4'},{value: 5, label: '5'},
    ];
    const ageArray = [
      {value: 20, label: '20 KG'},{value: 21, label: '21 KG'},{value: 22, label: '22 KG'},{value: 23, label: '23 KG'},{value: 24, label: '24 KG'},{value: 25, label: '25 KG'},{value: 26, label: '26 KG'},{value: 27, label: '27 KG'},{value: 28, label: '28 KG'},{value: 29, label: '29 KG'},
      {value: 30, label: '30 KG'},{value: 31, label: '31 KG'},{value: 32, label: '32 KG'},{value: 33, label: '33 KG'},{value: 34, label: '34 KG'},{value: 35, label: '35 KG'},{value: 36, label: '36 KG'},{value: 37, label: '37 KG'},{value: 38, label: '38 KG'},{value: 39, label: '39 KG'},
      {value: 40, label: '40 KG'},{value: 41, label: '41 KG'},{value: 42, label: '42 KG'},{value: 43, label: '43 KG'},{value: 44, label: '44 KG'},{value: 45, label: '45 KG'},{value: 46, label: '46 KG'},{value: 47, label: '47 KG'},{value: 48, label: '48 KG'},{value: 49, label: '49 KG'},
      {value: 50, label: '50 KG'},{value: 51, label: '51 KG'},{value: 52, label: '52 KG'},{value: 53, label: '53 KG'},{value: 54, label: '54 KG'},{value: 55, label: '55 KG'},{value: 56, label: '56 KG'},{value: 57, label: '57 KG'},{value: 58, label: '58 KG'},{value: 59, label: '59 KG'},
      {value: 60, label: '60 KG'},{value: 61, label: '61 KG'},{value: 62, label: '62 KG'},{value: 63, label: '63 KG'},{value: 64, label: '64 KG'},{value: 65, label: '65 KG'},{value: 66, label: '66 KG'},{value: 67, label: '67 KG'},{value: 68, label: '68 KG'},{value: 69, label: '69 KG'},
      {value: 70, label: '70 KG'},{value: 71, label: '71 KG'},{value: 72, label: '72 KG'},{value: 73, label: '73 KG'},{value: 74, label: '74 KG'},{value: 75, label: '75 KG'},{value: 76, label: '76 KG'},{value: 77, label: '77 KG'},{value: 78, label: '78 KG'},{value: 79, label: '79 KG'},
      {value: 80, label: '80 KG'},{value: 81, label: '81 KG'},{value: 82, label: '82 KG'},{value: 83, label: '83 KG'},{value: 84, label: '84 KG'},{value: 85, label: '85 KG'},{value: 86, label: '86 KG'},{value: 87, label: '87 KG'},{value: 88, label: '88 KG'},{value: 89, label: '89 KG'},
      {value: 90, label: '90 KG'},{value: 91, label: '91 KG'},{value: 92, label: '92 KG'},{value: 93, label: '93 KG'},{value: 94, label: '94 KG'},{value: 95, label: '95 KG'},{value: 96, label: '96 KG'},{value: 97, label: '97 KG'},{value: 98, label: '98 KG'},{value: 99, label: '99 KG'},
      {value: 100, label: '100 KG'},{value: 101, label: '101 KG'},{value: 102, label: '102 KG'},{value: 103, label: '103 KG'},{value: 104, label: '104 KG'},{value: 105, label: '105 KG'},{value: 106, label: '106 KG'},{value: 107, label: '107 KG'},{value: 108, label: '108 KG'},{value: 109, label: '109 KG'},
      {value: 110, label: '110 KG'},{value: 111, label: '111 KG'},{value: 112, label: '112 KG'},{value: 113, label: '113 KG'},{value: 114, label: '114 KG'},{value: 115, label: '115 KG'},{value: 116, label: '116 KG'},{value: 117, label: '117 KG'},{value: 118, label: '118 KG'},{value: 119, label: '119 KG'},
      {value: 120, label: '120 KG'}
    ]
    const weightArray= [
        {value: 20, label: '20 KG'},{value: 21, label: '21 KG'},{value: 22, label: '22 KG'},{value: 23, label: '23 KG'},{value: 24, label: '24 KG'},{value: 25, label: '25 KG'},{value: 26, label: '26 KG'},{value: 27, label: '27 KG'},{value: 28, label: '28 KG'},{value: 29, label: '29 KG'},
        {value: 30, label: '30 KG'},{value: 31, label: '31 KG'},{value: 32, label: '32 KG'},{value: 33, label: '33 KG'},{value: 34, label: '34 KG'},{value: 35, label: '35 KG'},{value: 36, label: '36 KG'},{value: 37, label: '37 KG'},{value: 38, label: '38 KG'},{value: 39, label: '39 KG'},
        {value: 40, label: '40 KG'},{value: 41, label: '41 KG'},{value: 42, label: '42 KG'},{value: 43, label: '43 KG'},{value: 44, label: '44 KG'},{value: 45, label: '45 KG'},{value: 46, label: '46 KG'},{value: 47, label: '47 KG'},{value: 48, label: '48 KG'},{value: 49, label: '49 KG'},
        {value: 50, label: '50 KG'},{value: 51, label: '51 KG'},{value: 52, label: '52 KG'},{value: 53, label: '53 KG'},{value: 54, label: '54 KG'},{value: 55, label: '55 KG'},{value: 56, label: '56 KG'},{value: 57, label: '57 KG'},{value: 58, label: '58 KG'},{value: 59, label: '59 KG'},
        {value: 60, label: '60 KG'},{value: 61, label: '61 KG'},{value: 62, label: '62 KG'},{value: 63, label: '63 KG'},{value: 64, label: '64 KG'},{value: 65, label: '65 KG'},{value: 66, label: '66 KG'},{value: 67, label: '67 KG'},{value: 68, label: '68 KG'},{value: 69, label: '69 KG'},
        {value: 70, label: '70 KG'},{value: 71, label: '71 KG'},{value: 72, label: '72 KG'},{value: 73, label: '73 KG'},{value: 74, label: '74 KG'},{value: 75, label: '75 KG'},{value: 76, label: '76 KG'},{value: 77, label: '77 KG'},{value: 78, label: '78 KG'},{value: 79, label: '79 KG'},
        {value: 80, label: '80 KG'},{value: 81, label: '81 KG'},{value: 82, label: '82 KG'},{value: 83, label: '83 KG'},{value: 84, label: '84 KG'},{value: 85, label: '85 KG'},{value: 86, label: '86 KG'},{value: 87, label: '87 KG'},{value: 88, label: '88 KG'},{value: 89, label: '89 KG'},
        {value: 90, label: '90 KG'},{value: 91, label: '91 KG'},{value: 92, label: '92 KG'},{value: 93, label: '93 KG'},{value: 94, label: '94 KG'},{value: 95, label: '95 KG'},{value: 96, label: '96 KG'},{value: 97, label: '97 KG'},{value: 98, label: '98 KG'},{value: 99, label: '99 KG'},
        {value: 100, label: '100 KG'},{value: 101, label: '101 KG'},{value: 102, label: '102 KG'},{value: 103, label: '103 KG'},{value: 104, label: '104 KG'},{value: 105, label: '105 KG'},{value: 106, label: '106 KG'},{value: 107, label: '107 KG'},{value: 108, label: '108 KG'},{value: 109, label: '109 KG'},
        {value: 110, label: '110 KG'},{value: 111, label: '111 KG'},{value: 112, label: '112 KG'},{value: 113, label: '113 KG'},{value: 114, label: '114 KG'},{value: 115, label: '115 KG'},{value: 116, label: '116 KG'},{value: 117, label: '117 KG'},{value: 118, label: '118 KG'},{value: 119, label: '119 KG'},
        {value: 120, label: '120 KG'},{value: 121, label: '121 KG'},{value: 122, label: '122 KG'},{value: 123, label: '123 KG'},{value: 124, label: '124 KG'},{value: 125, label: '125 KG'},{value: 126, label: '126 KG'},{value: 127, label: '127 KG'},{value: 128, label: '128 KG'},{value: 129, label: '129 KG'},
        {value: 130, label: '130 KG'},{value: 131, label: '131 KG'},{value: 132, label: '132 KG'},{value: 133, label: '133 KG'},{value: 134, label: '134 KG'},{value: 135, label: '135 KG'},{value: 136, label: '136 KG'},{value: 137, label: '137 KG'},{value: 138, label: '138 KG'},{value: 139, label: '139 KG'},
        {value: 140, label: '140 KG'},{value: 141, label: '141 KG'},{value: 142, label: '142 KG'},{value: 143, label: '143 KG'},{value: 144, label: '144 KG'},{value: 145, label: '145 KG'},{value: 146, label: '146 KG'},{value: 147, label: '147 KG'},{value: 148, label: '148 KG'},{value: 149, label: '149 KG'},
        {value: 150, label: '150 KG'},{value: 151, label: '151 KG'},{value: 152, label: '152 KG'},{value: 153, label: '153 KG'},{value: 154, label: '154 KG'},{value: 155, label: '155 KG'},{value: 156, label: '156 KG'},{value: 157, label: '157 KG'},{value: 158, label: '158 KG'},{value: 159, label: '159 KG'},
        {value: 160, label: '160 KG'},{value: 161, label: '161 KG'},{value: 162, label: '162 KG'},{value: 163, label: '163 KG'},{value: 164, label: '164 KG'},{value: 165, label: '165 KG'},{value: 166, label: '166 KG'},{value: 167, label: '167 KG'},{value: 168, label: '168 KG'},{value: 169, label: '169 KG'},
        {value: 170, label: '170 KG'},{value: 171, label: '171 KG'},{value: 172, label: '172 KG'},{value: 173, label: '173 KG'},{value: 174, label: '174 KG'},{value: 175, label: '175 KG'},{value: 176, label: '176 KG'},{value: 177, label: '177 KG'},{value: 178, label: '178 KG'},{value: 179, label: '179 KG'},
        {value: 180, label: '180 KG'},{value: 181, label: '181 KG'},{value: 182, label: '182 KG'},{value: 183, label: '183 KG'},{value: 184, label: '184 KG'},{value: 185, label: '185 KG'},{value: 186, label: '186 KG'},{value: 187, label: '187 KG'},{value: 188, label: '188 KG'},{value: 189, label: '189 KG'},
        {value: 190, label: '190 KG'},{value: 191, label: '191 KG'},{value: 192, label: '192 KG'},{value: 193, label: '193 KG'},{value: 194, label: '194 KG'},{value: 195, label: '195 KG'},{value: 196, label: '196 KG'},{value: 197, label: '197 KG'},{value: 198, label: '198 KG'},{value: 199, label: '199 KG'},
        {value: 200, label: '200 KG'},{value: 201, label: '201 KG'},{value: 202, label: '202 KG'},{value: 203, label: '203 KG'},{value: 204, label: '204 KG'},{value: 205, label: '205 KG'},{value: 206, label: '206 KG'},{value: 207, label: '207 KG'},{value: 208, label: '208 KG'},{value: 209, label: '209 KG'},
        {value: 210, label: '210 KG'},{value: 211, label: '211 KG'},{value: 212, label: '212 KG'},{value: 213, label: '213 KG'},{value: 214, label: '214 KG'},{value: 215, label: '215 KG'},{value: 216, label: '216 KG'},{value: 217, label: '217 KG'},{value: 218, label: '218 KG'},{value: 219, label: '219 KG'},
        {value: 220, label: '220 KG'},{value: 221, label: '221 KG'},{value: 222, label: '222 KG'},{value: 223, label: '223 KG'},{value: 224, label: '224 KG'},{value: 225, label: '225 KG'},{value: 226, label: '226 KG'},{value: 227, label: '227 KG'},{value: 228, label: '228 KG'},{value: 229, label: '229 KG'},
        {value: 230, label: '230 KG'},{value: 231, label: '231 KG'},{value: 232, label: '232 KG'},{value: 233, label: '233 KG'},{value: 234, label: '234 KG'},{value: 235, label: '235 KG'},{value: 236, label: '236 KG'},{value: 237, label: '237 KG'},{value: 238, label: '238 KG'},{value: 239, label: '239 KG'},
        {value: 240, label: '240 KG'},{value: 241, label: '241 KG'},{value: 242, label: '242 KG'},{value: 243, label: '243 KG'},{value: 244, label: '244 KG'},{value: 245, label: '245 KG'},{value: 246, label: '246 KG'},{value: 247, label: '247 KG'},{value: 248, label: '248 KG'},{value: 249, label: '249 KG'},
        {value: 250, label: '250 KG'},{value: 251, label: '251 KG'},{value: 252, label: '252 KG'},{value: 253, label: '253 KG'},{value: 254, label: '254 KG'},{value: 255, label: '255 KG'},{value: 256, label: '256 KG'},{value: 257, label: '257 KG'},{value: 258, label: '258 KG'},{value: 259, label: '259 KG'},
        {value: 260, label: '260 KG'},{value: 261, label: '261 KG'},{value: 262, label: '262 KG'},{value: 263, label: '263 KG'},{value: 264, label: '264 KG'},{value: 265, label: '265 KG'},{value: 266, label: '266 KG'},{value: 267, label: '267 KG'},{value: 268, label: '268 KG'},{value: 269, label: '269 KG'},
        {value: 270, label: '270 KG'},{value: 271, label: '271 KG'},{value: 272, label: '272 KG'},{value: 273, label: '273 KG'},{value: 274, label: '274 KG'},{value: 275, label: '275 KG'},{value: 276, label: '276 KG'},{value: 277, label: '277 KG'},{value: 278, label: '278 KG'},{value: 279, label: '279 KG'},
        {value: 280, label: '280 KG'},{value: 281, label: '281 KG'},{value: 282, label: '282 KG'},{value: 283, label: '283 KG'},{value: 284, label: '284 KG'},{value: 285, label: '285 KG'},{value: 286, label: '286 KG'},{value: 287, label: '287 KG'},{value: 288, label: '288 KG'},{value: 289, label: '289 KG'},
        {value: 290, label: '290 KG'},{value: 291, label: '291 KG'},{value: 292, label: '292 KG'},{value: 293, label: '293 KG'},{value: 294, label: '294 KG'},{value: 295, label: '295 KG'},{value: 296, label: '296 KG'},{value: 297, label: '297 KG'},{value: 298, label: '298 KG'},{value: 299, label: '299 KG'},
        {value: 300, label: '300 KG'}

    ];
    const exercisePlaceArray = [
      { value: "gym", label: 'Gym' },
      { value: "home", label: 'Home' },
    ];
    const stressArray= [
      {value: '1', label: 'Stress free', description:'I never feel stressed'},{value: '2', label: 'Minimally stressed', description:'I rarely feel stressed'},
      {value: '3', label: 'Moderately stressed', description:'I feel stressed occasionally'},{value:'4', label: 'Highly stressed', description:'I feel quite stressed most days'},
      {value: '5', label: 'Extremely stressed', description:'I feel highly stressed every day'},
    ];
    const productivityArray = [
      {value: '1', label: 'Not productive at all', description:'I never feel productive'},{value: '2', label: 'Minimally productive', description:'I don’t feel productive very often'},
      {value: '3', label: 'Moderately productive', description:'I feel fairly productive most days'},{value: '4', label: 'Highly productive', description:'I feel highly productive most days'},
      {value: '5', label: 'Extremely productive', description:'I feel highly productive every day'},
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
          daysArray = {daysArray}
          days= {fields.days_per_week}
          selectDays = {this.props.addDays}
          exercisePlaceArray={exercisePlaceArray}
          selectExercisePlace={this.props.addExercisePlace}
          change = {this.programCheckboxHandler}
          exercisePlace = {fields.exercisePlace}
          data = { this.state.trainingGoals }
        />
      );
    } else if(this.state.currentPage === 3){
      RenderPage = (
        <InjuryManagement
          change={this.injuryManagementHandler}
          data = {this.state.injuryManagement}
          showModal = {this.showModal}

        />
      );
    }else if(this.state.currentPage === 4){
      RenderPage = (
        <PostureCorrection
          change={this.postureCorrectionHandler}
          data = {this.state.postureCorrection}
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
          Previous
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
              select = {this.state.rehabTypeForModal === 'forPosture'? this.postureCorrectionHandler : this.injuryManagementHandler }
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
    addRehabFocus, addStress,
    addProductivity, addProductiveAfterExercise,
    addWorkInjury, addHealthFeeling,
    addDailyActivity, addCurrentActivity,
    addQuestionnaire,
    addError, removeError, success
  }, dispatch
);
}
export default connect (mapStateToProps, matchDispatchToProps)(Questionnaire);
