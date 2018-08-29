// @flow
import React, { Component } from 'react';
import {Redirect} from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectFooter} from '../FooterContainer/actions';
import {keepWorkOut, updateExercise} from './actions';
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
      isChangeExcercise: false,
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
  onChangeExerciseHandler = (value) => {
    this.setState({indexValue: value})
    this.setState({ isChangeExcercise: true })
  }

  onSelectExerciseHandler = (index) => {
    this.props.updateExercise(this.state.indexValue, index);
    this.setState({ isChangeExcercise: false })
  }

  onWorkOutKeepHandler = (value) => {
    let workoutExerciseArray = { ...this.state.workoutExerciseArray}
    let index = this.state.workoutExerciseArray.findIndex(i =>{ return i.value === value; });
    workoutExerciseArray[index].isSaved = true;
    // this.setState({ workoutExerciseArray })
  }
  onStartHandler = () => {
    this.setState({ startExcercies: true})
  }
  render() {
    console.log(this.props.planReducers);
    console.log(this.props.planReducers.exercises);
    let {warmUpExerciseArray, workOutExerciseArray} = this.props.WorkOutReducers;
    return (
      <Hoc>
        <Workout
        exercise = {this.props.planReducers.exercises}

        onExerciseChange = {this.onChangeExerciseHandler}
        onWorkOutKeep = {this.props.keepWorkOut}
        onStart = {this.onStartHandler}
        workOutArray ={workOutExerciseArray}

        />
        {(this.state.isChangeExcercise) && (
          <Modal modalFor = "modal-for-select-exercise">
            <SelectExercise
              onSelect = {this.onSelectExerciseHandler}
              excerciseArray = {this.state.excerciseArray}
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
    selectFooter, keepWorkOut, updateExercise,
  }, dispatch
);
}
export default connect(mapStateToProps, matchDispatchToProps) (WorkoutContainer);
