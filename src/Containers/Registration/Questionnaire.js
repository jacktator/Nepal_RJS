import React, { Component } from 'react';
import Progress from '../../Components/Registration/Questionnaire/Progress';
import StepOne from '../../Components/Registration/Questionnaire/StepOne';
import { InputItem, Button, WhiteSpace, Icon, Checkbox} from 'antd-mobile';

const CheckboxItem = Checkbox.CheckboxItem;

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
        trainingGoal: {}
      },
      injuryManagement: [],
      stressAndProductivity: [],
      healthAndWellbeing: [],
      generalActivity: [],
      currentPage: 3,
      hasError: false,
      value: '',
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


  render() {
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
              placeholder="Please enter your name"
              error={this.state.hasError}
              onChange={this.inputItemHandler.bind(this, 'one', 'name')}
              value={this.state.detail.name}
            >Name</InputItem>

            <InputItem
              type="number"
              placeholder="Please enter your age"
              error={this.state.hasError}
              onChange={this.inputItemHandler.bind(this, 'one', 'age')}
              value={this.state.detail.age}
            >Age</InputItem>

            <InputItem
              type="text"
              placeholder="Please select your Gender"
              error={this.state.hasError}
              onChange={this.inputItemHandler.bind(this, 'one', 'gender')}
              value={this.state.detail.gender}
            >Gender</InputItem>

            <InputItem
              type="number"
              placeholder="input enter your weight"
              error={this.state.hasError}
              onChange={this.inputItemHandler.bind(this, 'one', 'weight')}
              value={this.state.detail.weight}
            >Weight</InputItem>

          </div>
      );

    } else if(this.state.currentPage === 2){
      RenderPage = (
          <div>
            <div>
              <span> <strong> Days </strong> </span>

              <span style={{float: "right", marginRight: "5%"}}>
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
                  <strong>{i.label}</strong> <br/> {i.description}
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
            <img style={{ height:"300px", width:"300px"}} src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQuwWbUXC-lgzQHp-j1iw56PIgl_2eALrEENUP-ld72gq3s8cVo" />
            </label>
          </CheckboxItem>

          <CheckboxItem onChange={() => this.onChange(2)}>
            <label for="myCheckbox3" >
            <img style={{ height:"300px", width:"300px"}} src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQuwWbUXC-lgzQHp-j1iw56PIgl_2eALrEENUP-ld72gq3s8cVo" />
            </label>
          </CheckboxItem>

          <CheckboxItem onChange={() => this.onChange(3)}>
            <label for="myCheckbox3" >
            <img style={{ height:"300px", width:"300px"}} src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQuwWbUXC-lgzQHp-j1iw56PIgl_2eALrEENUP-ld72gq3s8cVo" />
            </label>
          </CheckboxItem>
          </div>
      );
    }

    return(
      <div className="container">
        <Progress/>
        {RenderPage}
      </div>


    )
  }
}
export default Questionnaire;
