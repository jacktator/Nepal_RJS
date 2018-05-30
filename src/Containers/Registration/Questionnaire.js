import React, { Component } from 'react';
import CurrentStep  from '../../Components/Registration/Questionnaire/Progress';
import StepOne from '../../Components/Registration/Questionnaire/StepOne';
import { InputItem, Button, WhiteSpace, Icon, List, Radio, Flex, Checkbox, Progress, Picker, Card } from 'antd-mobile';



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
        currentBodyWeight: 1,
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
  onWeightPicker(weight){
    let detail = {...this.state.detail}
    detail['currentBodyWeight'] = weight[0];
    this.setState({detail})
    // this.setState({ weightPicker: weight[0]})
  }

  previousButtonHandler = () =>{
    let currentPage = this.state.currentPage;
    if(currentPage>1){
        currentPage -= 1;
        this.setState({ currentPage })
    }

  }
  nextButtonHandler = () =>{
    let currentPage = this.state.currentPage;
    if(currentPage < 6){
        currentPage += 1;
        this.setState({ currentPage })
    }
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
          <div>
          <h2>Your Detail</h2>
            <InputItem
              type="text"
              placeholder="Please enter your name (letters only)"
              error={this.state.hasError}
              onChange={this.inputItemHandler.bind(this, 'one', 'name')}
              value={this.state.detail.name}
            >Name</InputItem>

            <InputItem
              type="number"
              placeholder="Please enter your age (numbers only)"
              error={this.state.hasError}
              onChange={this.inputItemHandler.bind(this, 'one', 'age')}
              value={this.state.detail.age}
            >Age</InputItem>

            <List renderHeader={() => 'Please select your gender Gender'}>
              {radioData.map(i => (
                <RadioItem key={i.value} checked={gender === i.value} onChange={() => this.radioHandler(i.value)}>
                  {i.label}
                </RadioItem>
              ))}
            </List>
            <WhiteSpace size="lg" />

            <Picker
              data={this.state.weightArray}
              cols={1}
              value={[this.state.detail.currentBodyWeight]}
              onOk={v => this.onWeightPicker(v)}
              >
              <List.Item arrow="horizontal">Current Body Weight:</List.Item>
            </Picker>

          </div>
      );

    } else if(this.state.currentPage === 2){
      RenderPage = (
          <div>
            <div>
              <span style={{ marginLeft: "50px"}}> <strong> Days :</strong> </span>
              &nbsp;&nbsp;
              <span>
                <button onClick={this.minusHandler}>
                <Icon type="minus" style={{width:"12px", height: "12px"}}/>
                </button>&nbsp;
                  <span>{this.state.program.days }</span>
                  &nbsp;
                <button onClick={this.plusHandler}>
                <Icon type="plus" style={{width:"12px", height: "12px"}}/>
                </button>
              </span>
            </div>
            <br />

            <div>

              {data.map(i => (
                <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
                  <strong>{i.label}</strong><List.Item.Brief>{i.description}</List.Item.Brief>
                </CheckboxItem>
              ))}
            </div>
          </div>
      );
    } else if(this.state.currentPage === 3){
      RenderPage = (
          <div>
          <h3>Injury Management</h3>

          <CheckboxItem onChange={() => this.onChange(1)}>
            <label for="myCheckbox3" >
            <img style={{ height:"100px", width:"300px"}} src="http://livebiomechanix.com/wp-content/uploads/2015/12/Screen-shot-2015-11-30-at-7.49.40-PM-596x191.png" />
            </label>
          </CheckboxItem>

          <CheckboxItem onChange={() => this.onChange(2)}>
            <label for="myCheckbox3" >
            <img style={{ height:"100px", width:"100px"}} src="http://totalphysiocare.com.au/wp-content/uploads/2017/05/lower-back-pain-relief.png" />
            </label>
          </CheckboxItem>

          <CheckboxItem onChange={() => this.onChange(3)}>
            <label for="myCheckbox3" >
            <img style={{ height:"100px", width:"100px"}} src="https://static.wixstatic.com/media/b1546b_f6a11249f1a346e08fc817d7cece04c3~mv2.jpg/v1/fill/w_630,h_382,al_c,lg_1,q_80/b1546b_f6a11249f1a346e08fc817d7cece04c3~mv2.webp" />
            </label>
          </CheckboxItem>

          <CheckboxItem onChange={() => this.onChange(4)}>
            <label for="myCheckbox3" >
            <img style={{ height:"100px", width:"100px"}} src="https://feelpainrelief.com/wp-content/uploads/2015/09/shoulder-pain-300x200.jpg" />
            </label>
          </CheckboxItem>

          <CheckboxItem onChange={() => this.onChange(5)}>
            <label for="myCheckbox3" >
            <img style={{ height:"100px", width:"100px"}} src="https://qph.fs.quoracdn.net/main-qimg-4d054f876feaa4b3d4944914a6f7cb66-c" />
            </label>
          </CheckboxItem>
          </div>
      );
    } else if(this.state.currentPage === 0){
      RenderPage = (
          <div>
            <Picker
              data={this.state.weightArray}
              cols={1}
              value={[this.state.detail.currentBodyWeight]}
              onOk={v => this.onWeightPicker(v)}
              >
              <List.Item arrow="horizontal">Current Body Weight:</List.Item>
            </Picker>
          </div>
      );
    }
    return(
      <div className="container">
      <div className="show-info">
        <div className="progress"><Progress percent={percent} position="normal" /></div>
        <div aria-hidden="true">{percent}%</div>
      </div>
        <CurrentStep/>

        {RenderPage}
        <div>
           <Button type="primary" onClick={() => this.previousButtonHandler()} inline size="medium" style={{ float: 'left', marginLeft: '4px' }}>
              previous
          </Button>
          <span>{this.state.currentPage}/6</span>
          <Button type="primary" onClick={() => this.nextButtonHandler()} inline size="medium" style={{ float: 'right', marginRight: '4px' }}>
             Next
         </Button>
       </div>
      </div>


    )
  }
}
export default Questionnaire;
