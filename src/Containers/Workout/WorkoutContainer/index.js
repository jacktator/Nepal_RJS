import React, { Component } from 'react';

import Workout from '../../../Components/Workout/Workout';
import SelectExercise from '../../../Components/Workout/SelectExercise';
import Modal from '../../../Components/UI/Modal';
import FooterContainer from '../FooterContainer';
import Hoc from '../../../HOC/Hoc';

class WorkoutContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      isChangeExcercise: false
    }
  }
  onChangeHandler = () => {
    this.setState({ isChangeExcercise: true })
  }
  onKeepHandler = () => {
    alert("onKeep");
  }
  onStartHandler = () => {
    alert("Starting you work out new ");
  }
  onSelectExerciseHandler = (index) => {
    alert(index);
    this.setState({ isChangeExcercise: false })
  }

  render() {
    return (
      <Hoc>
        <Workout
        onChange = {this.onChangeHandler}
        onKeep = {this.onKeepHandler}
        onStart = {this.onStartHandler}
        />
        {(this.state.isChangeExcercise) && (
          <Modal>
            <SelectExercise
            onSelect = {this.onSelectExerciseHandler}
            />
          </Modal>
        )}
        <FooterContainer />
      </Hoc>
    )
  }
}
export default WorkoutContainer;
