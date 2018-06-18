// @flow
import React, { Component } from 'react';
import { Progress, Button} from 'antd-mobile';
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
      nick_name: "",
      fields: {
        name: "",
        age: "",
        gender: "",
        weight: "",
        days_per_week: 2,
        goals: [],
        rehab_focus: [],
        stress: null,
        productivity: null,
        productive_after_exercise: null,
        work_injury: null,
        health_feeling: null,
        daily_activity: null,
        current_activity: null
      },
      program: {
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
    let injuryManagement = [ ...this.state.injuryManagement];
    let fields = { ...this.state.fields };
    let tempRehabFocus = [];
    let count = 0;
    injuryManagement.map(i =>{
      if(i.isChecked === true){
        count ++;
        tempRehabFocus.push(i.value);
      }
      return null;
    })
    if(count < 2 || injuryManagement[value].isChecked){
      injuryManagement[value].isChecked = !injuryManagement[value].isChecked;
      tempRehabFocus.push(value);
      fields['rehab_focus'] = tempRehabFocus;
      this.setState({ injuryManagement, fields });
    }
    else{
      alert('Exceeded maximun number of selection');
    }
  }
  //handle the checkbox for program in questionnaire (second page)
  programCheckboxHandler = (value) => {
    let tempGoals = [];
    let program = { ...this.state.program };
    let fields = { ...this.state.fields };
    let count = 0;

    program['trainingGoals'].map(i => {
      if(i.isChecked === true) {
        tempGoals.push(i.value);
        count ++;
      }
      return null;
    })
    if(count < 2 || program['trainingGoals'][value].isChecked) {
      program['trainingGoals'][value].isChecked = !program['trainingGoals'][value].isChecked;
      tempGoals.push(value);
      fields['goals'] = tempGoals;
      this.setState({ program, fields });

    } else {
      alert('You can select only two at most');
    }
  }


  //handle to radio button for gender selection
  genderHandler = (value) => {
    let fields = {...this.state.fields}
    fields['gender'] = value;
    this.setState({
      fields
    });
  };
//handle the input for name in step One
  nameHandler = (nick_name) => {
    this.setState({ nick_name })
  }
  ageHandler = (age) => {
    let fields = { ...this.state.fields}
    fields['age']= age;
    this.setState({ fields })

  }

  //handle the input filed for stepOne
  inputItemHandler = (step, assignTo, data) => {
    //step refers to the six different steps
    //assign refers to particular data such as name or age.
    //data is the data being entered in input field
    if( step === 'one'){
      let fields = {...this.state.fields}
      fields[assignTo] = data;
      this.setState({ fields })
    }
  }
  //handle the value for weight picker
  onWeightPicker = (weight) => {
    let fields = {...this.state.fields}
    fields['weight'] = weight[0];
    this.setState({fields})
    // this.setState({ weightPicker: weight[0]})
  }

  onDaysPicker = (days) => {
    let fields = {...this.state.fields}
    fields['days_per_week'] = days[0];
    this.setState({fields})
  }

  //handle the pagination onChange event
  onPaginationHandler = (currentPage) => {
    this.setState({ currentPage })
  }

  //handle the value for stress picker
  onStressPicker = (stress) => {
    let fields = {...this.state.fields}
    fields['stress'] = stress
    this.setState({fields})
  }

  //handle the value for productivity picker
  onProductivityPicker = (productivity) => {
    let fields = {...this.state.fields}
    fields['productivity'] = productivity;
    this.setState({fields})
  }

  //handle the value for injury picker
  onInjuryPicker = (injury) => {
    let fields = {...this.state.fields}
    fields['work_injury'] = injury[0];
    this.setState({fields})

  }

  //handle the value for health picker
  onHealthPicker = (health) => {
    let fields = {...this.state.fields}
    fields['health_feeling'] = health[0];
    this.setState({fields})
  }

  //handle the value for activity picker
  onActivityPicker = (activity) => {
    let fields = {...this.state.fields}
    fields['daily_activity'] = activity[0];
    this.setState({fields})
  }

  //handle the value for exercise picker
  onExercisePicker = (exercise) => {
      let fields = {...this.state.fields}
      fields['current_activity'] = exercise[0];
      this.setState({fields})
  }

  buttonHandler = (button) =>{

    let currentPage = this.state.currentPage;
    if(currentPage === 6 && button === "next"){
      this.props.addQuestionnaire(this.state);
    }
    if(button === "previous"){
      if(currentPage>1){
          currentPage -= 1;
          this.setState({ currentPage })
      }
    }
    if(button === "next"){
      if(this.state.fields.name === "" && this.state.fields.age === "" && this.state.fields.weight === "" && this.state.fields.gender === ""){
        alert("please enter the data")
      }else{
        if(currentPage < 6){
            currentPage += 1;
            this.setState({ currentPage })
        }
      }
    }
  }
  //Handle the finish button of sixth page
  onFinishButtonHandler = () => {

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
    const daysArray= [
      {value: 3, label: '3'},{value: 4, label: '4'},{value: 5, label: '5'},
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
        nameHandler={this.nameHandler}
        name={this.state.nick_name}
        ageHandler={this.ageHandler}
        fields={this.state.fields}
        radioData={radioData}
        weightArray={weightArray}
        selectWeight={this.onWeightPicker}
        radioHandler = {this.genderHandler}
        />
      );
    } else if(this.state.currentPage === 2){
      RenderPage = (
        <StepTwo
        daysArray = {daysArray}
        selectDays = {this.onDaysPicker}
        days={this.state.fields.days_per_week}
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
        fields = {this.state.fields}
        productivityArray={productivityArray}
        selectProductivity={this.onProductivityPicker}
        />
      );

    } else if(this.state.currentPage === 5){
      RenderPage = (
        <StepFive
        injuryArray={injuryArray}
        selectInjury={this.onInjuryPicker}
        fields = {this.state.fields}
        healthArray={healthArray}
        selectHealth={this.onHealthPicker}
        />
      );

    }else if(this.state.currentPage === 6){
      RenderPage = (
        <StepSix
        activityArray={activityArray}
        selectActivity={this.onActivityPicker}
        fields = {this.state.fields}
        exerciseArray={exerciseArray}
        selectExercise={this.onExercisePicker}
        finishButtonHandler = {this.onFinishButtonHandler}
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
        <div className="pagination-container" style ={{textAlign: 'center'}}>
          <Button type="primary" disabled={this.state.currentPage === 1 ? true: false}  onClick={() => this.buttonHandler('previous')}
            inline size="medium" style={{ float: 'left'}}>
              previous
        </Button>
        <span id="footer_page" style ={{}}>{this.state.currentPage}/6</span>
        <Button type="primary" onClick={() => this.buttonHandler('next')}
          inline size="medium" style={{ float: 'right'}}>
           {this.state.currentPage === 6 ? "Finish": "Next"}
       </Button>
      </div>
    </div>

    )
  }
}
function mapStateToProps(state){
  console.log('mapStatetoProps',state);
  return null;
}
export default connect (mapStateToProps, { addQuestionnaire })(Questionnaire);
