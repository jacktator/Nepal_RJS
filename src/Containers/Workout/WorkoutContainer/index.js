// @flow
import React, { Component } from 'react';
import {Redirect} from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Toast } from 'antd-mobile';
import {selectFooter} from '../FooterContainer/actions';
import {getProgram, keepWorkout, fetchWorkoutList, selectWorkout, setDayIndex, getExerciseRecord, setCurrentDay} from '../actions';
import Workout from '../../../Components/Workout/Workout';
import SelectExercise from '../../../Components/Workout/SelectExercise';
import Modal from '../../../Components/UI/Modal';
import FooterContainer from '../FooterContainer';
import Loading from '../../../Components/Loading';
import Hoc from '../../../HOC/Hoc';

class WorkoutContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      isReady: false,
      showKeepOrChange: false,
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
    if(this.props.WorkoutReducers.program){
      const {days, progress} = this.props.WorkoutReducers.program;
      const currentWeek = Math.ceil(parseInt(this.props.match.params.day,10) / days);
      const currentDay = parseInt(this.props.match.params.day,10) - ((currentWeek -1 ) * days)
      const dayIndex = this.props.WorkoutReducers.program.exercises.findIndex(i => { return i.day === currentDay.toString() })
      this.props.setDayIndex(dayIndex);
      this.props.setCurrentDay(parseInt(this.props.match.params.day, 10));
      this.props.getExerciseRecord(this.props.WorkoutReducers.programID);
      if(progress === this.props.match.params.day && parseInt(progress,10) <= parseInt(days,10) ){
          this.setState({showKeepOrChange: true})
      }
      this.setState({isReady: true})
    }
  }
  componentDidMount(){
    this.loadingToast();
  }
  componentWillReceiveProps(nextProps){

  }
  loadingToast = () => {
    Toast.loading('Loading...', 2, () => {
      console.log('Load complete !!!');
    });
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
  onCancelSelectExerciseHandler = () => {
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
      if(this.state.isReady){
      return (
        <Hoc>
        <Workout
        showKeepOrChange = {this.state.showKeepOrChange}
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
    }else{//if this.state.isReady is false
      return(
        <Loading />
      )
    }
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
    selectFooter, keepWorkout, fetchWorkoutList, getProgram,
    selectWorkout, setDayIndex, getExerciseRecord, setCurrentDay
  }, dispatch
);
}
export default connect(mapStateToProps, matchDispatchToProps) (WorkoutContainer);
