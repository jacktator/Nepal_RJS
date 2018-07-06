import React, { Component } from 'react'
import {WingBlank,Progress,Tabs} from 'antd-mobile'
import './Plan.css'
import StickyTab from './StickyTab'


export default class Plan extends Component{

  render() {
    
    return (
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
            </div>
      </div>
    )
  }
}
