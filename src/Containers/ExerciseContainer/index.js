
import React, {Component} from 'react';
import {Redirect} from 'react-router';
import Exercise from '../../Components/Workout/Exercise/';
import Info from '../../Components/Workout/Exercise/Info';
import Modal from '../../Components/UI/Modal';

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
  saveButtonHandler = (e) => {
    e.preventDefault();
    alert('saved');
  }
  infoHandler = (e) => {
    e.preventDefault();
    this.setState({ showInfo: !this.state.showInfo})
  }


  render(){
    //const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300);
    return(
      <div className="all">
        <Exercise
          onBackButtonClicked ={this.backButtonHandler}
          onSaveButtonClicked ={this.saveButtonHandler}
          onInfoClicked = {this.infoHandler}
          /*videos={this.state.selectedVideo}*/
        />
      {this.state.goBack && (
        <Redirect to='/plan' />
      )}
      {this.state.showInfo && (
        <Modal modalFor = "modal-for-info">
          <Info
            onBackButtonClicked = {this.infoHandler}
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

export default ExerciseContainer
