import React, { Component } from 'react';
import Progress from '../../Components/Registration/Questionnaire/Progress';
import StepOne from '../../Components/Registration/Questionnaire/StepOne';

// import {Link} from 'react-router-dom';
// import { WhiteSpace, Button, WingBlank } from 'antd-mobile';
// import { List, TextareaItem } from 'antd-mobile';

import { Picker, List, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import arrayTreeFilter from 'array-tree-filter';

class Check extends Component {
  constructor(props){
    super(props);
    this.state = {
      detail: {
        name:"Raul",
        age:"",
        gender: "",
        currentBodyWeight: "",
      },
      program: [],
      injuryManagement: [],
      stressAndProductivity: [],
      healthAndWellbeing: [],
      generalActivity: [],
      currentPage: 4
    }
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

  stepOneHandleChange = (propertyName, event) => {
    console.log("handleChange", propertyName, event.target.value);
    const detail = {...this.state.detail};
    detail[propertyName] = event.target.value;
    this.setState({ detail: detail});
  }





  render() {

    let RenderPage = null
    if(this.state.currentPage === 1){
      RenderPage = (
        <div>
          This is page 1

          </div>
      );
    } else if(this.state.currentPage === 2){
      RenderPage = (
        <div>
          this is page 2
        </div>
          // <Progress />
      );
    }  else if(this.state.currentPage === 3){
      RenderPage = (
        <div>
          this is page 3
        </div>
          // <Progress />
      );
    }  else if(this.state.currentPage === 4){


      RenderPage = (
        <div>

          <br/><br/><br/><br/>

          <p>How often do you feel stressed at work?</p>

          <Picker
          data={this.state.data}
          cols={this.state.cols}
          // value={this.state.asyncValue}
          value="Bishal"
          onPickerChange={this.onPickerChange}
          onOk={v => console.log(v)}
        >
          <List.Item arrow="horizontal" onClick={this.onClick}>Stress</List.Item>
        </Picker>

        <br/><br/><br/><br/>

        <p>How often do you feel stressed at work?</p>

        <Picker
        data={this.state.data}
        cols={this.state.cols}
        // value={this.state.asyncValue}
        value="Bishal"
        onPickerChange={this.onPickerChange}
        onOk={v => console.log(v)}
      >
        <List.Item arrow="horizontal" onClick={this.onClick}>Productivity</List.Item>
      </Picker>

      <br/><br/><br/><br/>

        </div>
      );
    } else if(this.state.currentPage === 5){
      RenderPage = (
        <div>
          <br/><br/><br/><br/>

          <p>Do you experience injury or posture related pain at work?</p>



          <Picker
          data={this.state.data}
          cols={this.state.cols}
          // value={this.state.asyncValue}
          value="Bishal"
          onPickerChange={this.onPickerChange}
          onOk={v => console.log(v)}
        >
          <List.Item arrow="horizontal" onClick={this.onClick}>Injury</List.Item>
        </Picker>

        <br/><br/><br/><br/>

        <p>Do you feel your health and wellbeing is right now?</p>

        <Picker
        data={this.state.data}
        cols={this.state.cols}
        // value={this.state.asyncValue}
        value="Bishal"
        onPickerChange={this.onPickerChange}
        onOk={v => console.log(v)}
      >
        <List.Item arrow="horizontal" onClick={this.onClick}>Health</List.Item>
      </Picker>

      <br/><br/><br/><br/>
        </div>
      );
    } else if(this.state.currentPage === 6){
      RenderPage = (
        <div>
          <br/><br/><br/><br/>

          <p>How active are you on a daily basis?</p>

          <Picker
          data={this.state.data}
          cols={this.state.cols}
          // value={this.state.asyncValue}
          value="Bishal"
          onPickerChange={this.onPickerChange}
          onOk={v => console.log(v)}
        >
          <List.Item arrow="horizontal" onClick={this.onClick}>Active</List.Item>
        </Picker>

        <br/><br/><br/><br/>

        <p>What is your current exercise activity level?</p>

        <Picker
        data={this.state.data}
        cols={this.state.cols}
        // value={this.state.asyncValue}
        value="Bishal"
        onPickerChange={this.onPickerChange}
        onOk={v => console.log(v)}
      >
        <List.Item arrow="horizontal" onClick={this.onClick}>Exercise</List.Item>
      </Picker>

      <br/><br/><br/><br/>

        </div>
      );
    }

    return(
      <div>
        <Progress currentPage={this.state.currentPage}/>
        {/* We are in Questionnaire: {this.state.detail.name} */}
        {RenderPage}
      </div>


    )
  }
}


export default Check;
