import React, {Component} from 'react';
import {Redirect} from 'react-router';
import { Toast } from 'antd-mobile';
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

      isLoading: false,
      goBack: false,
      showInfo: false,
      exerciseIndex: 0,
      exerciseLength: null,
      currentSets : 1,
      weight: 1,
      reps:1,
      sets: 1,
      exerciseLog:[],
      error: false,
    };
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeRep = this.onChangeRep.bind(this);
    this.onSaveButtonHandler = this.onSaveButtonHandler.bind(this);
    this.onNextButtonHandler = this.onNextButtonHandler.bind(this);


    //this.videoSearch('Destiny 2')
  }
  componentWillMount() {
    alert("component will mount");
    let index = 0;
    if(this.props.match.params.index){
      index = this.props.match.params.index;
      this.setState({exerciseIndex: this.props.match.params.index})
    }
    const {program, dayIndex}= this.props.WorkoutReducers;
    if(program && dayIndex!== null){
      let exerciseLength = program.exercises[dayIndex].exercise_list.length;
      if(program.exercises[dayIndex].exercise_list[index]){
        let exerciseData = program.exercises[dayIndex].exercise_list[index];
        this.setState({ exerciseLength: exerciseLength, weight: exerciseData.weight, sets: exerciseData.sets, reps: exerciseData.reps})
        this.loadingToast();
        this.calculateExerciseLog();
      }else{
      this.setState({ error: true})
      }
    }else{
      this.setState({ error: true})
    }
  }

  componentWillReceiveProps(nextProps){
    this.calculateExerciseLog();
  }

  loadingToast = () => {
  Toast.loading('Loading...', 1, () => {
    console.log('Load complete !!!');
  });
}

  calculateExerciseLog = () => {
    let {program, dayIndex}= this.props.WorkoutReducers;
    let records = this.props.WorkoutReducers.record;
    let week = this.props.WorkoutReducers.currentWeek;
    let day = this.props.WorkoutReducers.currentDay;
    let code = program.exercises[dayIndex].exercise_list[this.state.exerciseIndex].code;
    if(records){
      if(records.weekly_record){
        let weekIndex = records.weekly_record.findIndex(i => { return i.week === week.toString() });
        if(weekIndex >= 0){
          let dayIndex = (records.weekly_record[weekIndex].daily_record.findIndex(i => { return i.day === day.toString()}));
          if(dayIndex >= 0){
            let dataIndex = (records.weekly_record[weekIndex].daily_record[dayIndex].data.findIndex( i => {return i.code === code}));
            if(dataIndex >= 0){
              console.log("got the data",records.weekly_record[weekIndex].daily_record[dayIndex].data[dataIndex].data);
              let exerciseLog = records.weekly_record[weekIndex].daily_record[dayIndex].data[dataIndex].data;
              console.log("This is exercise log",exerciseLog);
              this.setState({exerciseLog: exerciseLog, currentSets: exerciseLog.length+1})
            }
          }
        }
      }
    }
    this.setState({isLoading: false})
  }

  onChangeWeight = (val) => {
    this.setState({ weight: val });
  }

  onChangeRep = (val) => {
    this.setState({ reps: val });
  }
  onLeftClick(e){
    e.preventDefault();
    alert(e)
  }

  backButtonHandler = (e) => {
    e.preventDefault();
    this.setState({ goBack: true})
  }

  onNextButtonHandler = () => {
    let {program, dayIndex}= this.props.WorkoutReducers;
    let exerciseIndex;
    if(this.state.exerciseIndex === (this.state.exerciseLength - 1)){
      exerciseIndex = 0;
    }else{
      exerciseIndex = this.state.exerciseIndex +1;
    }
    program.exercises[dayIndex].exercise_list[this.state.exerciseIndex];
    const exerciseLog = [];
    this.setState({ exerciseLog: exerciseLog, isLoading: true});
    this.setState({ currentSets: 1, exerciseIndex })
    setTimeout(() => {
      this.calculateExerciseLog();
  }, 1000);
  }
  onSaveButtonHandler = (code) => {
    let {recordID, currentWeek, currentDay, record} = this.props.WorkoutReducers;
    console.log("this is record", record);
    let exerciseLog = this.state.exerciseLog;
    exerciseLog.push({weight:this.state.weight, reps:this.state.reps});
    this.setState({exerciseLog, currentSets : this.state.currentSets+1})
    this.props.saveExerciseData(recordID, currentWeek, currentDay, code, this.state.weight, this.state.Currentsets, this.state.reps, record);

  }
  infoHandler = (e) => {
    e.preventDefault();
    this.setState({ showInfo: !this.state.showInfo})
  }
  render(){
    if(this.props.WorkoutReducers.program && this.state.error === false){
      const {program, dayIndex, record}= this.props.WorkoutReducers;
      const exerciseData = program.exercises[dayIndex].exercise_list[this.state.exerciseIndex];
      const video = "https://www.youtube.com/watch?v=vn_dFUUuHtI&feature=youtu.be";
      const videoDescription = "THIS is test video description";
      //const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300);
      // const {exerciseName,exerciseNumber,exerciseTotal,sets,reps,weight,video,videoDescription,exerciseLog} =  this.props.ExerciseReducers;
      return(
        <div className="all">
        <Exercise
          onBackButtonClicked ={this.backButtonHandler}
          onSaveButtonClicked ={this.onSaveButtonHandler}
          onNextButtonHandler = { this.onNextButtonHandler }
          // onSaveButtonClicked={this.onSaveButtonClick}
          onChangeWeight={this.onChangeWeight}
          onChangeRep={this.onChangeRep}
          onInfoClicked = {this.infoHandler}
          exerciseData = {exerciseData}
          /*videos={this.state.selectedVideo}*/
          state = {this.state}
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
        {this.state.isLoading === true && (
          <Modal>
            {this.loadingToast()}
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
