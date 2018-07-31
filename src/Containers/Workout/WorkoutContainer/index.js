// @flow
import React, { Component } from 'react';
import {Redirect} from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectFooter} from '../FooterContainer/actions';
import {keepWarmUp, keepWorkOut, updateExercise, updateWarmup} from './actions';
import Workout from '../../../Components/Workout/Workout';
import SelectExercise from '../../../Components/Workout/SelectExercise';
import Modal from '../../../Components/UI/Modal';
import FooterContainer from '../FooterContainer';
import Hoc from '../../../HOC/Hoc';

class WorkoutContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      isChangeExcercise: false,
      isChangeWarmup: false,
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
  onChangeWarmupHandler = (value) => {
    this.setState({indexValue: value})
    this.setState({ isChangeWarmup: true })
  }
  onSelectExerciseHandler = (index) => {
    this.props.updateExercise(this.state.indexValue, index);
    this.setState({ isChangeExcercise: false })
  }
  onSelectWarmupHandler = (index) => {
    this.props.updateWarmup(this.state.indexValue, index);
    this.setState({ isChangeWarmup: false })
  }
  onWarmUpKeepHandler = (value) => {
    let warmUpExerciseArray = { ...this.state.warmUpExerciseArray}
    let index = this.state.warmUpExerciseArray.findIndex(i =>{ return i.value === value; });
    warmUpExerciseArray[index].isSaved = true;
    this.setState({ warmUpExerciseArray: warmUpExerciseArray })
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
    let {warmUpExerciseArray, workOutExerciseArray} = this.props.WorkOutReducers;
    return (
      <Hoc>
        <Workout
        onExerciseChange = {this.onChangeExerciseHandler}
        onWarmupChange = {this.onChangeWarmupHandler}
        onWarmUpKeep = {this.props.keepWarmUp}
        onWorkOutKeep = {this.props.keepWorkOut}
        onStart = {this.onStartHandler}
        warmUpArray = {warmUpExerciseArray}
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
        {(this.state.isChangeWarmup) && (
          <Modal modalFor = "modal-for-select-exercise">
            <SelectExercise
              onSelect = {this.onSelectWarmupHandler}
              excerciseArray = {this.state.excerciseArray}
            />
          </Modal>
        )}
        {( this.state.startExcercies) && (
          <Redirect to="/exercise" />
        )}
        <FooterContainer />
      </Hoc>
    )
  }
}
function mapStateToProps(state){
  return {
    currentFooterTab: state.FooterReducers.currentFooterTab,
    WorkOutReducers: state.WorkOutReducers
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    selectFooter, keepWarmUp, keepWorkOut, updateExercise, updateWarmup
  }, dispatch
);
}
export default connect(mapStateToProps, matchDispatchToProps) (WorkoutContainer);
