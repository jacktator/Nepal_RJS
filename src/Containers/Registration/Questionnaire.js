import React, { Component } from 'react';
import Progress from '../../Components/Registration/Questionnaire/Progress';
import StepOne from '../../Components/Registration/Questionnaire/StepOne';

class Questionnaire extends Component {
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
      currentPage: 1
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
  // handleChange: function (propertyName, event) {
  //    const contact = this.state.contact;
  //    contact[propertyName] = event.target.value;
  //    this.setState({ contact: contact });
  //  },
  //  render: function () {
  //    return (
  //      <div>
  //        <input type="text" onChange={this.handleChange.bind(this, 'firstName')} value={this.state.contact.firstName}/>
  //        <input type="text" onChange={this.handleChange.bind(this, 'lastName')} value={this.state.contact.lastName}/>
  //        <input type="text" onChange={this.handleChange.bind(this, 'phone')} value={this.state.contact.lastName}/>
  //      </div>
  //    );
  //  }

  render() {

    let RenderPage = null
    if(this.state.currentPage === 1){
      RenderPage = (
          <div>
            Name:<input type="text" onChange={this.stepOneHandleChange.bind(this, 'name')} value={this.state.detail.name}/>
          </div>
      );
    } else if(this.state.currentPage === 2){
      RenderPage = (
          <Progress />
      );
    }

    return(
      <div>
        <Progress currentPage={this.state.currentPage}/>
        We are in Questionnaire: {this.state.detail.name}
        {RenderPage}
      </div>


    )
  }
}
export default Questionnaire;
