import React, { Component } from 'react';
import {Icon} from 'antd-mobile';
import loadingGif from "../../Assets/Loading/loading.gif"
import './Loading.css';
class Loading extends Component {
  render() {

    return (
      <div className="loading-background">
        <img src={loadingGif} className="loading-gif" alt="exercise"/>
        <div className="loading-text">
          Loading...
        </div>


      </div>
    );
  }
}

export default Loading;
