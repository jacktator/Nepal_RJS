import React, {Component} from 'react';
import {Redirect} from 'react-router';
import { Toast } from 'antd-mobile';
import Exercise from '../../../Components/Workout/Exercise/';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Info from '../../../Components/Workout/Exercise/Info';
import ShowHistory from '../../../Components/Workout/Exercise/ShowHistory';
import Modal from '../../../Components/UI/Modal';
import {saveExerciseData, getExerciseRecord, updatePersonalBest, updateRepsAndWeight} from '../actions';
import Loading from '../../../Components/Loading/';
import Hoc from '../../../HOC/Hoc';

// import _ from 'lodash';
// import YTSearch from 'youtube-api-search';
// const API_KEY = 'AIzaSyBv5Htzijr5-3WBHMU-N3V21Ez9yBb-6vY';
class ExerciseContainer extends Component{

  constructor(props){
    super(props);
    this.state={
      //videos:[],
      //selectedVideo:null,
      isFinish: false, // represent if the workout finsh for a day.
      isLoading: false, // represent the loading of data
      goBack: false, // represent if user click back button
      showHistory: false,
      showInfo: false, // represent if user click show info icon
      completedExercise: 0, // count the number of completed exercise
      exerciseIndex: 0, // store the index of current exercise
      exerciseLength: null, // represent the total number of workout for current day
      currentSets : 1, // represent the number of set user is currently in

      prescribeWeight: 0,
      prescribeReps: 0,
      personalBest: 0,

      weight: 0, // represent the prescribe weight for current workout
      reps: 0, // represent the prescribe reps for current workout
      sets: 0,
      exerciseData: {
      },

      exerciseLog:[], // represent the array of exercise log performed by the user
      error: false, // represent if there is any error occured
    };
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeRep = this.onChangeRep.bind(this);
    this.onSaveButtonHandler = this.onSaveButtonHandler.bind(this);
    this.onNextButtonHandler = this.onNextButtonHandler.bind(this);
    this.onHistoryButtonHandler = this.onHistoryButtonHandler.bind(this);

  }
  componentWillMount() {
    let index = 0;
    if(this.props.match.params.index){
      index = this.props.match.params.index;
      this.setState({exerciseIndex: parseInt(this.props.match.params.index, 10)})
    }
    const {program, dayIndex}= this.props.WorkoutReducers;
    if(program && dayIndex!== null){
      let exerciseLength = program.exercises[dayIndex].exercise_list.length;
      if(program.exercises[dayIndex].exercise_list[index]){
        let exerciseData = program.exercises[dayIndex].exercise_list[index];
        this.setState({ exerciseLength: exerciseLength, exerciseData, personalBest: parseFloat(exerciseData.personal_best),
                        prescribeWeight: parseFloat(exerciseData.weight), prescribeReps: parseInt(exerciseData.reps, 10),
                        weight: parseFloat(exerciseData.weight), reps: parseInt(exerciseData.reps, 10),
                        sets: parseInt(exerciseData.sets, 10)
                      })
        this.loadingToast();
        this.calculateExerciseLog();
      }else{
        this.setState({ error: true})
      }
    }else{
      this.setState({ error: true})
    }
  }

  componentWillReceivethis(nextthis){
    //this.calculateExerciseLog();
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
    let exerciseData = program.exercises[dayIndex].exercise_list[this.state.exerciseIndex];
    let exerciseLength = program.exercises[dayIndex].exercise_list.length;
    let code = exerciseData.code;
    let reps= 8;
    if(exerciseData.progression_model === "double progression"){
      let temp = exerciseData.reps.split('-');
      reps = parseInt(temp[1], 10);
    }
    if(exerciseData.progression_model === "linear") {
      reps = parseInt(exerciseData.reps, 10);
    }
    if(exerciseData.progresison_model === "till failure") {
      reps = 8;
    }
    this.setState({
                    exerciseLength: exerciseLength, exerciseData, personalBest: parseFloat(exerciseData.personal_best),
                    prescribeWeight: parseFloat(exerciseData.weight), prescribeReps: reps,
                    weight: parseFloat(exerciseData.weight), reps: reps,
                    sets: parseInt(exerciseData.sets, 10)
                  })
    if(records){
      if(records.daily_record){
          let dayIndex = (records.daily_record.findIndex(i => { return i.day === day.toString()}));
          if(dayIndex >= 0){
            let dataIndex = (records.daily_record[dayIndex].data.findIndex( i => {return i.code === code}));
            if(dataIndex >= 0){
              let exerciseLog = records.daily_record[dayIndex].data[dataIndex].data;
              this.setState({exerciseLog: exerciseLog, currentSets: exerciseLog.length+1})
            }
          }
      }
    }
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 1000);
  }

  onNextButtonHandler = () => {
    // let {program, dayIndex}= this.props.WorkoutReducers;
    // program.exercises[dayIndex].exercise_list[this.state.exerciseIndex];
    let exerciseIndex;
    if(this.state.exerciseIndex === (this.state.exerciseLength - 1)){
      exerciseIndex = 0;
    }else{
      exerciseIndex = this.state.exerciseIndex +1;
    }

    const exerciseLog = [];
    this.setState({ exerciseLog: exerciseLog, isLoading: true, completedExercise: this.state.completedExercise+1});
    this.setState({ currentSets: 1, exerciseIndex })
    setTimeout(() => {
      this.calculateExerciseLog();
    }, 1000);
  }

  onSaveButtonHandler = () => {
    let name = this.state.exerciseData.workout;
    let code = this.state.exerciseData.code;
    let variation = this.state.reps - this.state.prescribeReps;
    let weight = this.state.prescribeWeight;
    let total = this.state.weight * this.state.reps;
    let {program, dayIndex, programID} = this.props.WorkoutReducers;
    let {record, recordID, currentWeek, currentDay} = this.props.WorkoutReducers;
    if(total > this.state.personalBest){
      this.setState({personalBest: total})
      //write action to update personal best for given excercise
      this.props.updatePersonalBest(program, programID, dayIndex, this.state.exerciseIndex, total);
    }
    if(this.state.exerciseData.progression_model === "linear") {
      switch (variation) {
        case -7: weight -= 10; break;
        case -6: weight -= 7.5; break;
        case -5: weight -= 7.5; break;
        case -4: weight -= 5; break;
        case -3: weight -= 5; break;
        case -2: weight -= 2.5; break;
        case -1: weight -= 2.5; break;
        case 2: weight += 2.5; break;
        case 3: weight += 2.5; break;
        case 4: weight += 5; break;
        case 5: weight += 5; break;
        case 6: weight += 5; break;
        case 7: weight += 7.5; break;
        default:
      }
    }
    this.setState({ weight, prescribeWeight: weight, reps: this.state.prescribeReps})

    //compare if its last exercise and last sets
    if(this.state.completedExercise===this.state.exerciseLength-1 && this.state.currentSets === this.state.sets){
      this.setState({completedExercise: this.state.completedExercise+1});
    }
    let exerciseLog = this.state.exerciseLog;
    exerciseLog.push({weight:this.state.weight, reps:this.state.reps, sets: this.state.currentSets});

    this.setState({exerciseLog, currentSets : this.state.currentSets+1})
    if(this.state.sets === this.state.currentSets){
      this.props.updateRepsAndWeight(program, programID, dayIndex, this.state.exerciseIndex, this.state.prescibeReps, this.state.prescribeWeight);
    }
    this.props.saveExerciseData(recordID, currentWeek, currentDay, name, code, this.state.weight, this.state.Currentsets, this.state.reps, record);

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
  onHistoryButtonHandler = (e) => {
    e.preventDefault();
    this.setState({showHistory: !this.state.showHistory})
  }

  backButtonHandler = (e) => {
    e.preventDefault();
    this.setState({ goBack: true})
  }
  onCompleteButtonHandler = () => {
    this.setState({ isFinish: true})
  }
  //Handles when user click info button
  infoHandler = (e) => {
    e.preventDefault();
    this.setState({ showInfo: !this.state.showInfo})
  }
  render(){
    console.log("This is exercise container",this.props)
    let message = "";
    if(this.state.currentSets <= this.state.sets){
      if(this.state.exerciseData.progression_model === 'linear'){
        if(this.state.currentSets === this.state.sets){
          message = `Last set! Do as many reps as possible with ${this.state.prescribeWeight}kg`;
        }else{
          message = `Set ${this.state.currentSets} - Aim for ${this.state.prescribeWeight} * ${this.state.prescribeReps}`;
        }
      }else if(this.state.exerciseData.progression_model === 'double progression'){
        if(this.state.currentSets === this.state.sets){
          message = `Last Set - Do as many reps as possible`;
        }else if(this.state.prescribeReps <= this.state.reps){
          message = `Increase the weight`;
        }else{
          message = `Aim for more reps`;
        }
      }else if(this.state.exerciseData.progression_model === 'till failure'){
        message = `Do as many reps as possible`;
      }
    }else{
      message = "Go no next workout"
    }

    if(this.props.WorkoutReducers.program && this.state.error === false){
      const video = "cPAbx5kgCJo";
      const videoDescription = "THIS is test video description";
      //const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300);
      // const {exerciseName,exerciseNumber,exerciseTotal,sets,reps,weight,video,videoDescription,exerciseLog} =  this.props.ExerciseReducers;
      return(
        <div className="all">
        {this.state.isLoading === true &&
          (
            <Hoc><Modal modalFor = "modal-for-select-exercise"><Loading mode="selectExercise"/></Modal></Hoc>
          )
        }
        <Exercise
        onBackButtonClicked ={this.backButtonHandler}
        onCompleteButtonHandler ={this.onCompleteButtonHandler}
        onSaveButtonClicked ={this.onSaveButtonHandler}
        onNextButtonHandler = { this.onNextButtonHandler }
        onHistoryButtonHandler = {this.onHistoryButtonHandler}
        // onSaveButtonClicked={this.onSaveButtonClick}
        onChangeWeight={this.onChangeWeight}
        onChangeRep={this.onChangeRep}
        onInfoClicked = {this.infoHandler}
        message = {message}
        /*videos={this.state.selectedVideo}*/
        state = {this.state}
        />
        {this.state.goBack && (
          <Redirect to='/plan' />
        )}
        {this.state.isFinish && (
          <Redirect to='/plan' />
        )}
        {this.state.showHistory && (
          <Modal modalFor = "modal-for-info">
          <ShowHistory
            name = {this.state.exerciseData.workout}
            record = {this.props.WorkoutReducers.record}
            onBackButtonClicked = {this.onHistoryButtonHandler}
          />
          </Modal>
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

function mapStateTothis(state){
  return {
    ExerciseReducers: state.ExerciseReducers,
    WorkoutReducers: state.WorkoutReducers,
  }
}

function matchDispatchTothis(dispatch){
  return bindActionCreators({
    saveExerciseData, getExerciseRecord, updatePersonalBest, updateRepsAndWeight
  }, dispatch
);
}

export default connect (mapStateTothis, matchDispatchTothis)(ExerciseContainer);
