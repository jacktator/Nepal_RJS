// @flow
import React, { Component } from 'react';
import {Redirect} from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectFooter} from '../FooterContainer/actions';
import {getProgram, keepWorkout, fetchWorkoutList, selectWorkout, setDayIndex} from '../actions';
import Workout from '../../../Components/Workout/Workout';
import SelectExercise from '../../../Components/Workout/SelectExercise';
import Modal from '../../../Components/UI/Modal';
import FooterContainer from '../FooterContainer';
import Hoc from '../../../HOC/Hoc';
import {WingBlank} from 'antd-mobile';

class WorkoutContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      isChangeWorkout: false,
      backToPlan: false,
      startExcercies: false,
      exercisesIndex: null,
    }
  }
  componentWillMount(){
    if(this.props.currentFooterTab!== 'workoutTab' ){
      this.props.selectFooter('workoutTab');
    }
  }
  componentDidMount(){
    if(this.props.WorkoutReducers.program){
      const dayIndex = this.props.WorkoutReducers.program.exercises.findIndex(i => { return i.day === this.props.match.params.day })
      this.props.setDayIndex(dayIndex);
    }
  }
  //invokes when user click keep button
  onWorkOutKeepHandler = (index ) => {
    this.props.keepWorkout(index, this.props.WorkoutReducers);
  }
  //invokes when user click change button
  onChangeExerciseHandler = (index) => {
    this.setState({ isChangeWorkout: true, exercisesIndex: index })
     this.props.fetchWorkoutList(this.props.WorkoutReducers.program.exercises[0].exercise_list[index].code)
  }

  onSelectExerciseHandler = (exercise) => {
    this.props.selectWorkout(this.state.exercisesIndex, this.props.WorkoutReducers, exercise);
    this.setState({ isChangeWorkout: false })
  }

  onStartHandler = () => {
    this.setState({ startExcercies: true})
  }

  cancelChangeWorkout = () => {
    this.setState({ isChangeWorkout: false })
  }

  render() {
    if(this.props.WorkoutReducers.program){
      return (
        <Hoc>
        <Workout
        onExerciseChange = {this.onChangeExerciseHandler}
        onWorkOutKeep = {this.onWorkOutKeepHandler}
        onStart = {this.onStartHandler}
        WorkoutReducers ={this.props.WorkoutReducers}
        />
        {(this.state.isChangeWorkout) && (
          <Modal modalFor = "modal-for-select-exercise">
          <SelectExercise
            onSelect = {this.onSelectExerciseHandler}
            listExercise = {this.props.WorkoutReducers.listExercise}
            cancel = {this.cancelChangeWorkout}
          />
          </Modal>
        )}
        {( this.state.startExcercies) && (
          <Redirect to="/exercise" />
        )}
        <FooterContainer currentPath='workout' />
      </Hoc>
    )
  }else{
    return(
      <Redirect to= "/plan" />
    )
  }
}
}
function mapStateToProps(state){
  return {
    currentFooterTab: state.FooterReducers.currentFooterTab,
    WorkoutReducers: state.WorkoutReducers,
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    selectFooter, keepWorkout, fetchWorkoutList, getProgram, selectWorkout, setDayIndex
  }, dispatch
);
}
export default connect(mapStateToProps, matchDispatchToProps) (WorkoutContainer);
