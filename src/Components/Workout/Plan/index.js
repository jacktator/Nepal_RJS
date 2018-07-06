import React, { Component } from 'react'
import {WingBlank,Progress,Tabs} from 'antd-mobile'
import './Plan.css'
import StickyTab from './StickyTab'


export default class Plan extends Component{

  render() {
    
    return (
<<<<<<< HEAD
        <div className="all">
          <div className="image-container">
            <img src={require("../../../Assets/Workout/sampleImage.jpeg")} alt="sampleImage" className="sample-image"/>
            <div className="title"> Insert Title Here</div>
            <div className="program-duration"> Insert Program Duration Here</div>
            <div className="progress-text"> % Completed </div>
            <div className="progress-container">
              <WingBlank>
                  <Progress position="normal" percent={40} showInfo={false}/>
              </WingBlank>
=======
        <div className ="back-ground">
              <img src={require("../../../Assets/Workout/sampleImage.jpeg")} alt="sampleImage" className="sample-image"/>
              <div className="title"> Insert Title Here</div>
              <div className="program-duration"> Insert Program Duration Here</div>
              <div className="progress-text"> % Completed </div>
              <div className="progress-container">
                  <WingBlank>
                      <Progress position="normal" percent={40} showInfo={false}/>
                  </WingBlank>
              </div>
            <div className="sticky-tab">
              <StickyTab/>
>>>>>>> e51e71ce65a235d69ce8c845e1841bd0821b773e
            </div>
          </div>
          <div className="sticky-tab">
              <StickyTab/>
          </div>
          
      </div>
    )
  }
}
