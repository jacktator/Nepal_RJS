import React, {Component} from 'react';
import {Redirect} from 'react-router';
import Exercise from '../../../Components/Workout/Exercise/';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Info from '../../../Components/Workout/Exercise/Info';
import Modal from '../../../Components/UI/Modal';
import {saveExerciseData, getExerciseRecord} from '../actions';

// import _ from 'lodash';
// import YTSearch from 'youtube-api-search';
// const API_KEY = 'AIzaSyBv5Htzijr5-3WBHMU-N3V21Ez9yBb-6vY';
class ExerciseContainer extends Component{

  constructor(props){
    super(props);
    this.state={
      //videos:[],
      //selectedVideo:null,
      goBack: false,
      showInfo: false,
      sets : 1,
      exerciseIndex: 1,
    }
    //this.videoSearch('Destiny 2')
  }
  componentWillMount() {
    if(this.props.match.params.index){
      this.setState({exerciseIndex: this.props.match.params.index})
    }

    // this.props.getExerciseRecord(this.props.WorkoutReducers.programID);
  }
  backButtonHandler = (e) => {
    e.preventDefault();
    this.setState({ goBack: true})
  }
  saveButtonHandler = (code, sets, reps, weight) => {
    let {recordID, currentWeek, currentDay, record} = this.props.WorkoutReducers;
    console.log("this is record", record);
    this.props.saveExerciseData(recordID, currentWeek, currentDay, code, weight, sets, reps, record);
    this.setState({ sets : this.state.sets+1})
  }
  infoHandler = (e) => {
    e.preventDefault();
    this.setState({ showInfo: !this.state.showInfo})
  }
  render(){
    console.log("this is record showing in render", this.props.WorkoutReducers.record);
    if(this.props.WorkoutReducers.program){
      const {program, dayIndex}= this.props.WorkoutReducers;
      const exerciseNumber = 1;
      const video = "https://www.youtube.com/watch?v=vn_dFUUuHtI&feature=youtu.be";
      const videoDescription = "THIS is test video description";
      const exerciseLog = [];
      const reps = 8;

      const exerciseData = program.exercises[dayIndex].exercise_list[this.state.exerciseIndex];
      const exerciseTotal = program.exercises[dayIndex].exercise_list.length;
      //const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300);
      // const {exerciseName,exerciseNumber,exerciseTotal,sets,reps,weight,video,videoDescription,exerciseLog} =  this.props.ExerciseReducers;
      return(
        <div className="all">
          <Exercise
            onBackButtonClicked ={this.backButtonHandler}
            onSaveButtonClicked ={this.saveButtonHandler}
            onInfoClicked = {this.infoHandler}
            exerciseData = {exerciseData}
            exerciseTotal = {exerciseTotal}
            /*videos={this.state.selectedVideo}*/
            exerciseNumber = {exerciseNumber}

            reps = {reps}

            exerciseLog = {exerciseLog}
          />
        {this.state.goBack && (
          <Redirect to='/plan' />
        )}
        {this.state.showInfo && (
          <Modal modalFor = "modal-for-info">
            <Info
              onBackButtonClicked = {this.infoHandler}
              video = {video}
              videoDescription = {videoDescription}
            />
          </Modal>
        )}
        </div>
      );
    }else{
      return (
          <Redirect to="/plan" />
      )
    }
  }

  /*videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos)=>{
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    })
  }*/
}

function mapStateToProps(state){
  return {
    ExerciseReducers: state.ExerciseReducers,
    WorkoutReducers: state.WorkoutReducers,
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    saveExerciseData, getExerciseRecord
  }, dispatch
);
}

export default connect (mapStateToProps, matchDispatchToProps)(ExerciseContainer);
