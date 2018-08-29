// @flow
import React, { Component } from 'react';
import {Redirect} from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectFooter} from '../FooterContainer/actions';
import {updateExercise} from './actions';
import {getProgram, keepWorkout, fetchWorkoutList} from '../actions';
import Workout from '../../../Components/Workout/Workout';
import SelectExercise from '../../../Components/Workout/SelectExercise';
import Modal from '../../../Components/UI/Modal';
import FooterContainer from '../FooterContainer';
import Hoc from '../../../HOC/Hoc';
import {WingBlank} from 'antd-mobile'

class WorkoutContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      isChangeWorkout: false,
      backToPlan: false,
      startExcercies: false,
      excerciseArray: [
        { value: 0, description: 'Push ups', imgurl: 'https://files.brightside.me/files/news/part_34/340810/14565160-1-0-1496126804-1496126811-650-0c369e17e2-1496430586.jpg'},
        { value: 1, description: 'Barbell Bench Press', imgurl: 'https://www.bodybuilding.com/images/2016/july/10-best-chest-exercises-for-building-muscle-v2-1-700xh.jpg'},
        { value: 2, description: 'Seated Macine Chest Press', imgurl: 'https://www.bodybuilding.com/images/2016/july/10-best-chest-exercises-for-building-muscle-v2-4-700xh.jpg'},
        { value: 3, description: 'Dips for chest', imgurl: 'https://www.bodybuilding.com/images/2016/july/10-best-chest-exercises-for-building-muscle-v2-6-700xh.jpg'},
      ],
      indexValue: null
    }
  }
  componentWillMount(){
    if(this.props.currentFooterTab!== 'workoutTab' ){
      this.props.selectFooter('workoutTab');
    }
  }
  //invokes when user click keep button
  onWorkOutKeepHandler = (index) => {
    this.props.keepWorkout(index, this.props.planReducers);
  }
  //invokes when user click change button
  onChangeExerciseHandler = (index) => {
    this.setState({ isChangeWorkout: true, indexValue: index })
     this.props.fetchWorkoutList(this.props.planReducers.program.exercises[0].exercise_list[index].code)
  }

  onSelectExerciseHandler = (index) => {
    this.props.updateExercise(this.state.indexValue, index);
    this.setState({ isChangeExcercise: false })
  }

  onStartHandler = () => {
    this.setState({ startExcercies: true})
  }
  render() {
    console.log("from workout", this.props.planReducers);
    if(this.props.planReducers.program){
      console.log("get the program");
      console.log(this.props.planReducers.program);
      console.log(this.props.planReducers.id);
      console.log(this.props.planReducers.exercises[0]);
      let {workOutExerciseArray} = this.props.WorkOutReducers;
      return (
        <Hoc>
        <Workout
        program = {this.props.planReducers.program}
        onExerciseChange = {this.onChangeExerciseHandler}
        onWorkOutKeep = {this.onWorkOutKeepHandler}
        onStart = {this.onStartHandler}
        workOutArray ={workOutExerciseArray}
        />
        {(this.state.isChangeWorkout) && (
          <Modal modalFor = "modal-for-select-exercise">
          <SelectExercise
            onSelect = {this.onSelectExerciseHandler}
            excerciseArray = {this.state.excerciseArray}
            listExercise = {this.props.planReducers}
          />
          </Modal>
        )}
        {( this.state.startExcercies) && (
          <Redirect to="/exercise" />
        )}
        <FooterContainer currentPath='workout' />
      </Hoc>
    )
  }
  else{
    return(
      <Redirect to= "/plan" />
    )
  }
}
}
function mapStateToProps(state){
  return {
    currentFooterTab: state.FooterReducers.currentFooterTab,
    WorkOutReducers: state.WorkOutReducers,
    planReducers: state.PlanReducers,
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    selectFooter, keepWorkout, fetchWorkoutList, updateExercise, getProgram
  }, dispatch
);
}
export default connect(mapStateToProps, matchDispatchToProps) (WorkoutContainer);
