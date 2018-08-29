import React, { Component } from 'react'
import {WingBlank,Progress} from 'antd-mobile'
import './Plan.css'
import StickyTab from './StickyTab'

const Plan = (props) => {
  const currentlyPercentage = progressPercentage(props.planReducers.progress, props.planReducers.days);
  const currentlyWeek = currentWeek(props.planReducers.progress, props.planReducers.days);
    return (
      <div>
        <img src={require("../../../Assets/Workout/sampleImage.jpeg")} alt="sampleImage" className="plan-sample-image"/>
        <div className="plan-title">{props.planReducers.goal}</div>
        <div className="plan-program-duration">You are currently at Week {currentlyWeek} </div>
        <div className="plan-progress-text"> {currentlyPercentage}% Completed </div>
        <div className="plan-progress-container">
          <WingBlank>
              <Progress position="normal" percent={currentlyPercentage} showInfo={false}/>
          </WingBlank>
        </div>
        <div className="sticky-tab">
          <StickyTab currentpage={currentlyWeek-1} planReducers={props.planReducers}/>
        </div>
      </div>
    )
}

const progressPercentage = (progress, days) => Math.round((progress - 1) / (days * 5) * 100);
const currentWeek = (progress, days) => (Math.ceil(progress / days));

export default Plan;
