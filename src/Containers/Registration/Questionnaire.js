import React, { Component } from 'react';
import CurrentStep  from '../../Components/Registration/Questionnaire/Progress';
import StepOne from '../../Components/Registration/Questionnaire/StepOne';
import StepTwo from '../../Components/Registration/Questionnaire/StepTwo';
import { InputItem, Button, WhiteSpace, Icon, List, Radio, Flex, Checkbox, Progress, Picker, Card, Pagination } from 'antd-mobile';

const RadioItem = Radio.RadioItem;
const CheckboxItem = Checkbox.CheckboxItem;


class Questionnaire extends Component {
  constructor(props){
    super(props);
    this.state = {
      detail: {
        name:"",
        age:"",
        gender: "Male",
        currentBodyWeight: 0,
      },
      program: {
        days: 2,
        trainingGoal: {}
      },
      injuryManagement: [],
      stressAndProductivity: [],
      healthAndWellbeing: [],
      generalActivity: [],
      currentPage: 1,
      hasError: false,
      value: '',
      weightArray: [
        {value: 1, label: '1 KG'},{value: 2, label: '2 KG'},{value: 3, label: '3 KG'},{value: 4, label: '4 KG'},{value: 5, label: '5 KG'},{value: 6, label: '6 KG'},
        {value: 7, label: '7 KG'},{value: 8, label: '8 KG'},{value: 8, label: '8 KG'},
      ],

    }
  }

onChange = (value) => {
  console.log("value",value);
}

  nextButtonHandler = () => {
    console.log("Next button clicked");
  }
  previousButtonHandler = () => {
    console.log("previouse button clicked");
  }

  detailHandler = () => {
    console.log("DetailHander");
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
  radioHandler = (value) => {
    console.log('checkbox',value);
    let detail = {...this.state.detail}
    detail['gender'] = value;
    this.setState({
      detail
    });
  };

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
  onWeightPicker = (weight) => {
    let detail = {...this.state.detail}
    detail['currentBodyWeight'] = weight[0];
    this.setState({detail})
    this.setState({ weightPicker: weight[0]})
  }

  onPaginationHandler = (currentPage) => {
    this.setState({ currentPage })
  }

  render() {
    const { gender } = this.state.detail;
    const percent  = (this.state.currentPage-1)*20;
    const radioData = [
      { value: "Male", label: 'Male' },
      { value: "Female", label: 'Female' },
      { value: "Others", label: 'Others' },
    ];
    const data = [
       { value: 0, label: 'Muscle size and strength', description:"Weight training principles designed to build muscle and strength" },
       { value: 1, label: 'fat loss/Definition', description: "A combination of cardio and weight training to target fat loss and increase muscle definition "},
       { value: 2, label: 'Decrease stress', description:"Using exercise strategies to reduce stress levels and restore balance back in your body"},
       { value: 3, label: 'Improve posture', description:"Utilising specific exercises and weight training to correct postural imbalances "}
     ];

    let RenderPage = null;
    if(this.state.currentPage === 1){
      RenderPage = (
        <StepOne
           change={this.inputItemHandler}
           detail={this.state.detail}
           radioData={radioData}
           weightArray={this.state.weightArray}
           selectWeight={this.onWeightPicker}
           radioHandler = {this.radioHandler}
        />
      );
    } else if(this.state.currentPage === 2){
      RenderPage = (
        <StepTwo
         plus={this.plusHandler}
         minus={this.minusHandler}
         days={this.state.program.days}
         change={() => this.onChange()}
         data={data}
        />
      );
    } else if(this.state.currentPage === 3){
      RenderPage = (
          <div>
          <h3>Injury Management</h3>

          <CheckboxItem onChange={() => this.onChange(1)}>
            <label>
            <img style={{ height:"100px", width:"300px"}} src="http://livebiomechanix.com/wp-content/uploads/2015/12/Screen-shot-2015-11-30-at-7.49.40-PM-596x191.png" />
            </label>
          </CheckboxItem>

          <CheckboxItem onChange={() => this.onChange(2)}>
            <label>
            <img style={{ height:"100px", width:"100px"}} src="http://totalphysiocare.com.au/wp-content/uploads/2017/05/lower-back-pain-relief.png" />
            </label>
          </CheckboxItem>

          <CheckboxItem onChange={() => this.onChange(3)}>
            <label>
            <img style={{ height:"100px", width:"100px"}} src="https://static.wixstatic.com/media/b1546b_f6a11249f1a346e08fc817d7cece04c3~mv2.jpg/v1/fill/w_630,h_382,al_c,lg_1,q_80/b1546b_f6a11249f1a346e08fc817d7cece04c3~mv2.webp" />
            </label>
          </CheckboxItem>

          <CheckboxItem onChange={() => this.onChange(4)}>
            <label>
            <img style={{ height:"100px", width:"100px"}} src="https://feelpainrelief.com/wp-content/uploads/2015/09/shoulder-pain-300x200.jpg" />
            </label>
          </CheckboxItem>

          <CheckboxItem onChange={() => this.onChange(5)}>
            <label>
            <img style={{ height:"100px", width:"100px"}} src="https://qph.fs.quoracdn.net/main-qimg-4d054f876feaa4b3d4944914a6f7cb66-c" />
            </label>
          </CheckboxItem>
          </div>
      );
    }
    //for pagination
    const locale = {
      prevText: 'Prev',
      nextText: 'Next',
    };
    return(
      <div className="container">

      <div className="progress-bar">
        <div className="progress"><Progress percent={percent} position="normal" /></div>
        <div aria-hidden="true">{percent}%</div>
      </div>

        <CurrentStep/>


        {RenderPage}

        <div className="pagination-container">

            <Pagination total={6} current={this.state.currentPage} onChange={p => this.onPaginationHandler(p)} locale={locale}  />

       </div>
      </div>

    )
  }
}
export default Questionnaire;
