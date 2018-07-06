import _ from 'lodash';
import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';
import Excercise from '../../Components/Workout/Excercise/'
const API_KEY = 'AIzaSyBv5Htzijr5-3WBHMU-N3V21Ez9yBb-6vY';

class ExcerciseContainer extends Component{

  constructor(props){
    super(props);
    this.state={
      videos:[],
      selectedVideo:null,
    }
    this.videoSearch('Destiny 2')
  }

  render(){
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300);
    return(
      <div className="all">
        <Excercise
          videos={this.state.selectedVideo}
        />
      </div>
    );
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos)=>{
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    })
  }
}

export default ExcerciseContainer
