// @flow
import React, { Component } from 'react';
import { Progress, Pagination, List, Picker, Icon, NoticeBar} from 'antd-mobile';

import enUs from 'antd-mobile/lib/date-picker/locale/en_US';
import { connect } from 'react-redux';
import { addQuestionnaire } from './actions';

import CurrentStep  from '../../Components/Questionnaire/Progress';
import StepOne from '../../Components/Questionnaire/StepOne';
import StepTwo from '../../Components/Questionnaire/StepTwo';
import StepThree from '../../Components/Questionnaire/StepThree';
import StepFour from '../../Components/Questionnaire/StepFour';
import StepFive from '../../Components/Questionnaire/StepFive';
import StepSix from '../../Components/Questionnaire/StepSix';


import './Questionnaire.css';


class Questionnaire extends Component {
  constructor(props){
    super(props);
    this.state = {

      detail: {
        name:"",
        age:"",
        gender: "",
        currentBodyWeight: "",
      },

      program: {
        days: 2,
        trainingGoals: [
          { value: 0, isChecked: false, label: 'Muscle size and strength', description:"Weight training principles designed to build muscle and strength" },
          { value: 1, isChecked: false, label: 'fat loss/Definition', description: "A combination of cardio and weight training to target fat loss and increase muscle definition "},
          { value: 2, isChecked: false, label: 'Decrease stress', description:"Using exercise strategies to reduce stress levels and restore balance back in your body"},
          { value: 3, isChecked: false, label: 'Improve posture', description:"Utilising specific exercises and weight training to correct postural imbalances "}
        ]
      },
      injuryManagement: [
        { value: 0, isChecked: false, description: 'Posture Correction', imgurl: 'http://livebiomechanix.com/wp-content/uploads/2015/12/Screen-shot-2015-11-30-at-7.49.40-PM-596x191.png'},
        { value: 1, isChecked: false, description: 'Lower Back Pain', imgurl: 'http://totalphysiocare.com.au/wp-content/uploads/2017/05/lower-back-pain-relief.png'},
        { value: 2, isChecked: false, description: 'Neck Pain', imgurl: 'https://static.wixstatic.com/media/b1546b_f6a11249f1a346e08fc817d7cece04c3~mv2.jpg/v1/fill/w_630,h_382,al_c,lg_1,q_80/b1546b_f6a11249f1a346e08fc817d7cece04c3~mv2.webp'},
        { value: 3, isChecked: false, description: 'Shoulder Pain', imgurl: 'https://feelpainrelief.com/wp-content/uploads/2015/09/shoulder-pain-300x200.jpg'},
        { value: 4, isChecked: false, description: 'Hip Pain', imgurl: 'https://qph.fs.quoracdn.net/main-qimg-4d054f876feaa4b3d4944914a6f7cb66-c'},
      ],
      stressAndProductivity: {
        currentStress:"",
        currentProductivity:"",
      },
      healthAndWellbeing: {
        currentInjury:"",
        currentHealth:"",
      },
      generalActivity: {
        currentActivity:"",
        currentExercise:"",
      },
      currentPage: 1,
      hasError: false,

      buttonText: 'Next',

    }
    // this.makeNextToFinish=this.makeNextToFinish.bind(this);
  }

  //handle the checkbox for injury management in questionnaire (third page)
  injuryManagementCheckboxHandler = (value) => {
    let injuryManagement = [ ...this.state.injuryManagement]
    let count = 0;
    injuryManagement.map(i =>{
      if(i.isChecked === true){
        count ++;
      }
    })

    if(count < 2 || injuryManagement[value].isChecked){
      injuryManagement[value].isChecked = !injuryManagement[value].isChecked;
      this.setState({ injuryManagement });
    }
    else{
      alert('Exceeded maximun number of selection');
    }

  }

  //handle the checkbox for program in questionnaire (second page)
  programCheckboxHandler = (value) => {
    let program = { ...this.state.program}
    let count = 0;
    program['trainingGoals'].map(i => {
      if(i.isChecked === true) {
        count ++;
      }
    })
    if(count < 2 || program['trainingGoals'][value].isChecked) {
      program['trainingGoals'][value].isChecked = !program['trainingGoals'][value].isChecked;
      this.setState({ program });
    } else {
      alert('You can select only two at most');
    }
  }

  plusHandler = () =>{
    let program = this.state.program;
    program['days'] = program['days'] + 1;
    this.setState({ program: program })
  }
  minusHandler = () =>{
    let program = this.state.program;
    if(program['days']>1){
      program['days'] = program['days'] - 1;
      this.setState({ program: program })
    }
  }

  //handle to radio button for gender selection
  genderHandler = (value) => {
    console.log('checkbox',value);
    let detail = {...this.state.detail}
    detail['gender'] = value;
    this.setState({
      detail
    });
    console.log(this.state.detail);
  };

  //handle the input filed for stepOne
  inputItemHandler = (step, assignTo, data) => {
    //step refers to the six different steps
    //assign refers to particular data such as name or age.
    //data is the data being entered in input field
    if( step === 'one'){
      let detail = {...this.state.detail}
      detail[assignTo] = data;
      this.setState({ detail: detail})
    }
  }
  //handle the value for weight picker
  onWeightPicker = (weight) => {
    let detail = {...this.state.detail}
    detail['currentBodyWeight'] = weight[0];
    this.setState({detail})
    // this.setState({ weightPicker: weight[0]})
  }
  //handle the pagination onChange event
  onPaginationHandler = (currentPage) => {
    this.setState({ currentPage })
  }

  //handle the value for stress picker
  onStressPicker = (stress) => {
    let stressAndProductivity = {...this.state.stressAndProductivity}
    stressAndProductivity['currentStress'] = stress[0];
    this.setState({stressAndProductivity})
    // this.setState({ weightPicker: weight[0]})
  }

  //handle the value for productivity picker
  onProductivityPicker = (productivity) => {
    let stressAndProductivity = {...this.state.stressAndProductivity}
    stressAndProductivity['currentProductivity'] = productivity[0];
    this.setState({stressAndProductivity})
    // this.setState({ weightPicker: weight[0]})
  }

  //handle the value for injury picker
  onInjuryPicker = (injury) => {
    let healthAndWellbeing = {...this.state.healthAndWellbeing}
    healthAndWellbeing['currentInjury'] = injury[0];
    this.setState({healthAndWellbeing})
    // this.setState({ weightPicker: weight[0]})
  }

  //handle the value for health picker
  onHealthPicker = (health) => {
    let healthAndWellbeing = {...this.state.healthAndWellbeing}
    healthAndWellbeing['currentHealth'] = health[0];
    this.setState({healthAndWellbeing})
    // this.setState({ weightPicker: weight[0]})
  }

  //handle the value for activity picker
  onActivityPicker = (activity) => {
    let generalActivity = {...this.state.generalActivity}
    generalActivity['currentActivity'] = activity[0];
    this.setState({generalActivity})
    // this.setState({ weightPicker: weight[0]})
  }

  //handle the value for exercise picker
  onExercisePicker = (exercise) => {
    let generalActivity = {...this.state.generalActivity}
    generalActivity['currentExercise'] = exercise[0];
    this.setState({generalActivity})
    // this.setState({ weightPicker: weight[0]})
  }

  //Handle the finish button of sixth page
  onFinishButtonHandler = () => {
    console.log("finish Button Clicked");
    this.props.addQuestionnaire(this.state);
  }

  makeNextToFinish = () => {
    let {buttonText, currentPage} = this.state;
    if(currentPage === 6){
      buttonText = 'Finish'
    }
    return buttonText
  }



  render() {
    const percent  = (this.state.currentPage-1)*17;
    const radioData = [
      { value: "Male", label: 'Male' },
      { value: "Female", label: 'Female' },
      { value: "Others", label: 'Others' },
    ];
    const weightArray= [
      {value: 70, label: '70 KG'},{value: 71, label: '71 KG'},{value: 72, label: '72 KG'},{value: 73, label: '73 KG'},{value: 74, label: '74 KG'},{value: 75, label: '75 KG'},
      {value: 76, label: '76 KG'},{value: 77, label: '77 KG'},{value: 78, label: '78 KG'},{value: 79, label: '79 KG'},{value: 80, label: '80 KG'},
    ];
    const stressArray= [
      {value: 1, label: 'Stress free'},{value: 2, label: 'Minimally stressed'},{value: 3, label: 'Moderately stressed'},{value: 4, label: 'Highly stressed'},{value: 5, label: 'Extrembly stressed'},
    ];
    const productivityArray = [
      {value: 1, label: 'Not productive at all'},{value: 2, label: 'Minimally productive'},{value: 3, label: 'Moderately productive'},{value: 4, label: 'Highly productive'},{value: 5, label: 'Extrembly produvtive'},
    ];
    const injuryArray = [
      {value: 1, label: 'No pain'},{value: 2, label: 'Rarely in pain'},{value: 3, label: 'Sometimes in pain'},{value: 4, label: 'Regularly in pain'},{value: 5, label: 'Always in pain'},
    ];
    const healthArray = [
      {value: 1, label: 'Poor'},{value: 2, label: 'Fairly good'},{value: 3, label: 'Good'},{value: 4, label: 'Excellent'},
    ];
    const activityArray= [
      {value: 1, label: 'Sendentary'},{value: 2, label: 'Lightly active'},{value: 3, label: 'Moderately active'},{value: 4, label: 'Very active'},{value: 5, label: 'Extrembly active'},
    ];
    const exerciseArray= [
      {value: 1, label: 'Sendentary'},{value: 2, label: 'Lightly active'},{value: 3, label: 'Moderately active'},{value: 4, label: 'Very active'},{value: 5, label: 'Extrembly active'},
    ];

    let RenderPage = null;
    if(this.state.currentPage === 1){
      RenderPage = (
        <StepOne
        change={this.inputItemHandler}
        detail={this.state.detail}
        radioData={radioData}
        weightArray={weightArray}
        selectWeight={this.onWeightPicker}
        radioHandler = {this.genderHandler}
        />
      );
    } else if(this.state.currentPage === 2){
      RenderPage = (
        <StepTwo
        plus={this.plusHandler}
        minus={this.minusHandler}
        days={this.state.program.days}
        change={this.programCheckboxHandler}
        data={this.state.program.trainingGoals}
        />
      );
    } else if(this.state.currentPage === 3){
      RenderPage = (
        <StepThree
        change={this.injuryManagementCheckboxHandler}
        data = {this.state.injuryManagement}
        />
      );
    }else if(this.state.currentPage === 4){
      RenderPage = (
        <StepFour
        stressArray={stressArray}
        selectStress={this.onStressPicker}
        stressAndProductivity = {this.state.stressAndProductivity}
        productivityArray={productivityArray}
        selectProductivity={this.onProductivityPicker}
        />
      );

    } else if(this.state.currentPage === 5){
      RenderPage = (
        <StepFive
        injuryArray={injuryArray}
        selectInjury={this.onInjuryPicker}
        healthAndWellbeing = {this.state.healthAndWellbeing}
        healthArray={healthArray}
        selectHealth={this.onHealthPicker}
        />
      );

    }else if(this.state.currentPage === 6){
      RenderPage = (
        <StepSix
        activityArray={activityArray}
        selectActivity={this.onActivityPicker}
        generalActivity = {this.state.generalActivity}
        exerciseArray={exerciseArray}
        selectExercise={this.onExercisePicker}
        finishButtonHandler = {this.onFinishButtonHandler}
        />
      );
    }

    //for pagination
    const locale = {
      prevText: 'Prev',
      nextText: 'Next',
    };
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
      <Pagination
      total={6}
      current={this.state.currentPage}
      onChange={p => this.onPaginationHandler(p)}
      locale={{
        prevText: (<span className="arrow-align"><Icon type="left" />Prev</span>),
        nextText: (<span className="arrow-align"><Icon type="right" />{this.makeNextToFinish()}</span>),
      }} />
      </div>
      </div>

    )
  }
}
function mapStateToProps(state){
  console.log(state);
  return null;
}
export default connect (mapStateToProps, null)(Questionnaire);
