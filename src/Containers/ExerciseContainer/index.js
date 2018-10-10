
import React, {Component} from 'react';
import {Redirect} from 'react-router';
import Exercise from '../../Components/Workout/Exercise/';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Info from '../../Components/Workout/Exercise/Info';
import Modal from '../../Components/UI/Modal';

import {displayExerciseName,displayExerciseTotal,displayExerciseNumber,
        displaySets, displayReps, displayWeight,displayVideo,displayVideoDesc,
        addLogNum,addLogTick,addLogReps,addLogWeight,addLogTrophy,addLogCurrent} from './actions';

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
    }
    //this.videoSearch('Destiny 2')
  }
  backButtonHandler = (e) => {
    e.preventDefault();
    this.setState({ goBack: true})
  }
  
  infoHandler = (e) => {
    e.preventDefault();
    this.setState({ showInfo: !this.state.showInfo})
  }


  render(){
    //const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300);
    const {exerciseName,exerciseNumber,exerciseTotal,sets,reps,weight,video,videoDescription,exerciseLog} =  this.props.ExerciseReducers;
    return(
      <div className="all">
        <Exercise
          onBackButtonClicked ={this.backButtonHandler}
          onSaveButtonClicked ={this.saveButtonHandler}
          onInfoClicked = {this.infoHandler}
          /*videos={this.state.selectedVideo}*/
          exerciseName = {exerciseName}
          exerciseNumber = {exerciseNumber}
          exerciseTotal = {exerciseTotal}

          sets = {sets}
          reps = {reps}
          weight = {weight}

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
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    displayExerciseName,displayExerciseNumber,displayExerciseTotal,
    displaySets,displayReps,displayWeight,displayVideo,displayVideoDesc,
    addLogNum,addLogTick,addLogReps,addLogWeight,addLogTrophy,addLogCurrent,
  }, dispatch
);
}

export default connect (mapStateToProps, matchDispatchToProps)(ExerciseContainer);
