import React, { Component } from 'react';
import Progress from '../../Components/Registration/Questionnaire/Progress';

class Questionnaire extends Component {
  constructor(props){
    super(props);
    this.state = {
      detail: {
        name:"raul",
        age:"28",
        gender: "",
        currentBodyWeight: "",
      },
      program: [],
      injuryManagement: [],
      stressAndProductivity: [],
      healthAndWellbeing: [],
      generalActivity: []
    }
  }
  render() {
    console.log(this.state);
    return(

      <div><Progress />
      We are in Questionnaire: {this.state.detail.name}</div>

    )
  }
}
export default Questionnaire;
