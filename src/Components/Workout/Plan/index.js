import React, { Component } from 'react'
import {WingBlank,Progress} from 'antd-mobile'
import './Plan.css'
import StickyTab from './StickyTab'

const Plan = (props) => {
  const currentlyPercentage = progressPercentage(props.WorkoutReducers.progress, props.WorkoutReducers.days);
  const currentlyWeek = currentWeek(props.WorkoutReducers.progress, props.WorkoutReducers.days);
  if(props.WorkoutReducers.program){
    return (
      <div>
        <img src={require("../../../Assets/Workout/sampleImage.jpeg")} alt="sampleImage" className="plan-sample-image"/>
        <div className="plan-title">{props.WorkoutReducers.goal}</div>
        <div className="plan-program-duration">You are currently at Week {currentlyWeek} </div>
        <div className="plan-progress-text"> {currentlyPercentage}% Completed </div>
        <div className="plan-progress-container">
          <WingBlank>
              <Progress position="normal" percent={currentlyPercentage} showInfo={false}/>
          </WingBlank>
        </div>
        <div className="sticky-tab">
          <StickyTab currentpage={currentlyWeek-1} WorkoutReducers={props.WorkoutReducers}/>
        </div>
      </div>
    )
  }
  else{
    return(
      <div>this is loading...</div>
    )
  }
}

const progressPercentage = (progress, days) => Math.round((progress - 1) / (days * 5) * 100);
const currentWeek = (progress, days) => (Math.ceil(progress / days));

export default Plan;
