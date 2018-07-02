import React, { Component } from 'react';

import Workout from '../../../Components/Workout/Workout';
import Hoc from '../../../HOC/Hoc';

class WorkoutContainer extends Component{
  constructor(props){
    super(props);
  }
  onChangeHandler = () => {
    alert("onChange");
    console.log("onChange Handler");
  }
  onKeepHandler = () => {
    alert("onKeep");
  }
  onStartHandler = () => {
    alert("Starting you work out new ");
  }


  render() {
    return (
      <Hoc>
        <Workout
        onChange = {this.onChangeHandler}
        onKeep = {this.onKeepHandler}
        onStart = {this.onStartHandler}
        />
      </Hoc>
    )
  }
}
export default WorkoutContainer;
