import React, { Component } from 'react';
import {Icon} from 'antd-mobile';
import loadingGif from "../../Assets/Loading/loading.gif"
import './Loading.css';
class Loading extends Component {
  render() {

    if(this.props.mode === "selectExercise") {
      return (
        <div className="loading-background" style={{position:'relative'}}>
          <img src={loadingGif} className="loading-gif" alt="exercise"/>
          <div className="loading-text">
            Loading...
          </div>
        </div>
      )
    } else {
      return (
        <div className="loading-background" style={{position:'absolute'}}>
          <img src={loadingGif} className="loading-gif" style={{marginTop:"30%"}} alt="exercise"/>
          <div className="loading-text">
            Loading...
          </div>
        </div>
      )
    }
  }
}

export default Loading;
