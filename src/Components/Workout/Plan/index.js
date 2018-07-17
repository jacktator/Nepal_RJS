import React, { Component } from 'react'
import {WingBlank,Progress,Tabs} from 'antd-mobile'
import './Plan.css'
import StickyTab from './StickyTab'


export default class Plan extends Component{

  render() {

    return (
      <div>
              <img src={require("../../../Assets/Workout/sampleImage.jpeg")} alt="sampleImage" className="plan-sample-image"/>
              <div className="plan-title"> Insert Title Here</div>
              <div className="plan-program-duration"> Insert Program Duration Here</div>
              <div className="plan-progress-text"> % Completed </div>
              <div className="plan-progress-container">
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
